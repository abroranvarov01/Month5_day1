import React from "react";
import style from "./button.module.css";
 export const Btn = ({name = "Get Started"}) => {
  return <button className={style.button}>{name}</button>;
};
