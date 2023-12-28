import React from "react";
import { TITLES } from "../../constants";
import style from "./style.module.scss";
import Button from "../button";

const HomePage = () => {
  return (
    <>
      <div className={style.imageHome}>
        <div className={style.slogan}>
          <h1>{TITLES.title}</h1>
          <h2>{TITLES.subtitle}</h2>
          <Button noRounded={true}>Fazer Orçamento</Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
