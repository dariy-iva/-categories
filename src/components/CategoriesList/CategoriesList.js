import React from "react";
import "./CategoriesList.css";
import { categoriesData } from "../../utils/categoriesData";
import Category from "./Category/Category";

export default function CategoriesList() {
  const [categoriesList, setCategoriesList] = React.useState(categoriesData);

  function handleFeedbackButtonClick(newList) {
    setCategoriesList(newList);
  }

  return (
    <section className="categories">
      <ul className="categories__list">
        {categoriesList
          .sort((a, b) => b.raiting - a.raiting)
          .map((category, index, array) => (
            <li className="categories__item" key={category.title}>
              <Category
                categoriesList={array}
                category={category}
                categoryIndex={index}
                onClickFeedbackButton={handleFeedbackButtonClick}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}
