import React from "react";
import "./MainPage.css";
import CategoriesList from "../../CategoriesList/CategoriesList";

export default function MainPage() {
  return (
    <main className="main-page">
      <h1 className="main-page__title">Вопросы по темам</h1>
      <CategoriesList />
    </main>
  );
}
