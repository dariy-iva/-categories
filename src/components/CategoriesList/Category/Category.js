import React from "react";
import "./Category.css";
import QuestionsList from "../../QuestionsList/QuestionsList";

export default function Category(props) {
  const { category, categoryIndex, onClickFeedbackButton, categoriesList } =
    props;
  const { title, questions, raiting } = category;
  const [isOpenQuestionsList, setIsOpenQuestionsList] = React.useState(false);
  const buttonClass = `category__button link-hover ${
    isOpenQuestionsList ? "category__button_open" : ""
  }`;

  function handleButtonClick() {
    setIsOpenQuestionsList(!isOpenQuestionsList);
  }

  return (
    <div className="category">
      <button type="button" className={buttonClass} onClick={handleButtonClick}>
        {title || ""}
        <span>&nbsp;{`(raiting: ${raiting})`}</span>
      </button>
      {isOpenQuestionsList && (
        <QuestionsList
          categoriesList={categoriesList}
          questionsList={questions}
          categoryIndex={categoryIndex}
          onClickFeedbackButton={onClickFeedbackButton}
        />
      )}
    </div>
  );
}
