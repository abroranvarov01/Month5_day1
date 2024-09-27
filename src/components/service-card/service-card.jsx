import React from "react";
import { Btn } from "../button/button";
import style from "./service.module.css";
export const ServiceCard = ({ num, title, text }) => {
  return (
    <div className={style.box}>
      <div className={style.btn_wrap}>
        <Btn name={num} />
      </div>
      <div>
        <h1 className={style.title}>{title}</h1>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};
