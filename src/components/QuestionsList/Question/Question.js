import React from "react";
import "./Question.css";

export default function Question(props) {
  const {
    questionData,
    categoryIndex,
    questionIndex,
    onClickFeedbackButton,
    categoriesList,
  } = props;
  const { question, answer, reviewSent, raiting } = questionData;

  const [isOpenQuestion, setIsOpenQuestion] = React.useState(false);

  const containerClass = `question ${isOpenQuestion ? "question_active" : ""}`;
  const buttonClass = `question__button question__text link-hover  ${
    isOpenQuestion ? "question__button_close" : ""
  }`;

  function handleButtonClick() {
    setIsOpenQuestion(!isOpenQuestion);
  }

  function handleFeedbackButtonClick(answer) {
    const newArr = [...categoriesList];
    newArr[categoryIndex].questions[questionIndex].reviewSent = true;

    answer
      ? (newArr[categoryIndex].questions[questionIndex].raiting += 1)
      : (newArr[categoryIndex].questions[questionIndex].raiting -= 1);

    newArr[categoryIndex].raiting = newArr[categoryIndex].questions
      .sort((a, b) => b.raiting - a.raiting)
      .reduce((prValue, item) => prValue + item.raiting, 0);

    onClickFeedbackButton(newArr);
  }

  return (
    <div className={containerClass}>
      <button type="button" className={buttonClass} onClick={handleButtonClick}>
        {question || ""}
        <span>&nbsp;{`(raiting: ${raiting})`}</span>
      </button>

      {isOpenQuestion && (
        <p className="question__text question___answer">{answer || ""}</p>
      )}
      {isOpenQuestion &&
        (reviewSent ? (
          <p className="question__text">Спасибо за обратную связь!</p>
        ) : (
          <div className="feedback">
            <p className="question__text feedback__text">
              Информация была полезной?
            </p>
            <button
              type="button"
              className="question__button feedback__button link-hover question__text"
              onClick={() => handleFeedbackButtonClick(true)}
            >
              Да
            </button>
            <button
              type="button"
              className="question__button feedback__button link-hover question__text"
              onClick={() => handleFeedbackButtonClick(false)}
            >
              Нет
            </button>
          </div>
        ))}
    </div>
  );
}
