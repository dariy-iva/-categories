import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const linksConfig = [
    { path: "/", text: "Часто задаваемые вопросы" },
    { path: "/instructions", text: "Инструкции" },
  ];

  return (
    <header className="header">
      <nav className="header__menu">
        {linksConfig.map((link) => (
          <NavLink
            to={link.path}
            className={(props) =>
              props.isActive
                ? "header__link header__link_active link-hover"
                : "header__link link-hover"
            }
            key={linksConfig.indexOf(link)}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
