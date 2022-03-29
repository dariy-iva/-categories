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
  const {
    question,
    answer,
    reviewSent,
    raiting,
    isOpen = false,
  } = questionData;

  const [isOpenQuestion, setIsOpenQuestion] = React.useState(isOpen);
  const newArr = [...categoriesList];

  const containerClass = `question ${isOpenQuestion ? "question_active" : ""}`;
  const buttonClass = `question__button question__text link-hover ${
    isOpenQuestion ? "question__button_close" : ""
  }`;

  function handleButtonClick() {
    isOpenQuestion
      ? (newArr[categoryIndex].questions[questionIndex].isOpen = false)
      : (newArr[categoryIndex].questions[questionIndex].isOpen = true);
    setIsOpenQuestion(!isOpenQuestion);
  }

  function handleFeedbackButtonClick(answer) {
    newArr[categoryIndex].questions[questionIndex].reviewSent = true;

    answer
      ? (newArr[categoryIndex].questions[questionIndex].raiting += 1)
      : (newArr[categoryIndex].questions[questionIndex].raiting -= 1);

    newArr[categoryIndex].raiting = newArr[categoryIndex].questions.reduce(
      (prValue, item) => prValue + item.raiting,
      0
    );

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
