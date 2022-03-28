import React from "react";
import "./CategoriesList.css";
import { categoriesData } from "../../utils/categoriesData";
import Category from "./Category/Category";

export default function CategoriesList() {
  return (
    <section className="categories">
      <ul className="categories__list">
        {categoriesData.map((category) => (
          <li className="categories__item" key={category.title}>
            <Category categoryData={category} />
          </li>
        ))}
      </ul>
    </section>
  );
}
