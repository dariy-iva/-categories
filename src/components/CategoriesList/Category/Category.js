import React from "react";
import "./Category.css";
import QuestionsList from "../../QuestionsList/QuestionsList";

export default function Category({ categoryData }) {
  const { title, questions } = categoryData;
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
      </button>
      {isOpenQuestionsList && <QuestionsList questionsList={questions} />}
    </div>
  );
}
