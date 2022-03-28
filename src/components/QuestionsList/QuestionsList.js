import React from "react";
import "./QuestionsList.css";
import Question from "./Question/Question";

export default function QuestionsList({ questionsList }) {

  return (
    <ul className="questions">
      {questionsList.map((question) => (
        <li key={questionsList.indexOf(question)} className="questions__item">
            <Question questionData={question} />
        </li>
      ))}
    </ul>
  );
}
