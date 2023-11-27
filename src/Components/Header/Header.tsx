import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../Layout/Container/Container";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div>
          <NavLink to="">
            <img src="" alt="Market yobaniy" />
          </NavLink>
        </div>
      </Container>
    </header>
  );
};

export default Header;
