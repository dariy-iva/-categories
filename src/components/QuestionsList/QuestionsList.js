import React from "react";
import "./QuestionsList.css";
import Question from "./Question/Question";

export default function QuestionsList(props) {
  const {
    questionsList,
    category,
    categoryIndex,
    onClickFeedbackButton,
    categoriesList,
  } = props;
  return (
    <ul className="questions">
      {questionsList.map((question, index) => (
        <li key={index+category.title} className="questions__item">
          <Question
            categoriesList={categoriesList}
            questionData={question}
            categoryIndex={categoryIndex}
            questionIndex={index}
            onClickFeedbackButton={onClickFeedbackButton}
          />
        </li>
      ))}
    </ul>
  );
}
