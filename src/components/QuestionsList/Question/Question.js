import React from "react";
import "./Question.css";

export default function Question({ questionData }) {
  const { question, answer, reviewSent } = questionData;
  const [isOpenQuestion, setIsOpenQuestion] = React.useState(false);

  function handleOpenButtonClick() {
    setIsOpenQuestion(!isOpenQuestion);
  }

  function handleCloseButtonClick() {
    setIsOpenQuestion(!isOpenQuestion);
  }

  function handleFeedbackButtonClick() {
    
  }

  return (
    <>
      {isOpenQuestion ? (
        <div className="question questions__before">
          <button
            type="button"
            className="question__button question__button_close link-hover question__text"
            onClick={handleCloseButtonClick}
          >
            {question || ""}
          </button>
          <p className="question__text question___answer">{answer}</p>
          {reviewSent ? (
            <p className="question__text">Спасибо за обратную связь!</p>
          ) : (
            <div className="feedback">
              <p className="question__text feedback__text">Информация была полезной?</p>
              <button type="button" className="question__button feedback__button link-hover question__text" onClick={handleFeedbackButtonClick}>Да</button>
              <button type="button" className="question__button feedback__button link-hover question__text" onClick={handleFeedbackButtonClick}>Нет</button>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          className="question__button link-hover question__text questions__before"
          onClick={handleOpenButtonClick}
        >
          {question}
        </button>
      )}
    </>
  );
}
