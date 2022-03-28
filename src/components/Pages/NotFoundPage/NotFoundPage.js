import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">
        Страница не найдена
        <Link className="not-found__link-redirect link-hover" to="/">
          Назад
        </Link>
      </p>
    </div>
  );
}