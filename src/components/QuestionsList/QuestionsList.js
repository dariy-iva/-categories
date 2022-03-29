import React from "react";
import "./QuestionsList.css";
import Question from "./Question/Question";

export default function QuestionsList(props) {
  const {
    questionsList,
    categoryIndex,
    onClickFeedbackButton,
    categoriesList,
  } = props;

  return (
    <ul className="questions">
      {questionsList
        .sort((a, b) => b.raiting - a.raiting)
        .map((question, index) => (
          <li key={question.id} className="questions__item">
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
