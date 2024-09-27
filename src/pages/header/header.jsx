import React from "react";
import style from "./header.module.css";
import Logo from "../../assets/Logo.svg";
import { Btn } from "../../components/button/button";

export const Header = () => {
  return (
    <>
      <div className={style.header}>
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className={style.list}>
          <li className={style.item}>
            <p className={style.item__text}>Pricing</p>
          </li>
          <li className={style.item}>
            <p className={style.item__text}>Product</p>
          </li>
          <li className={style.item}>
            <p className={style.item__text}>About Us</p>
          </li>
          <li className={style.item}>
            <p className={style.item__text}>Careers</p>
          </li>
          <li className={style.item}>
            <p className={style.item__text}>Community</p>
          </li>
        </ul>
        <Btn/>
      </div>
    </>
  );
};
