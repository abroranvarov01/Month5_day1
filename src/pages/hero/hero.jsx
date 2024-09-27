import React from "react";
import style from "./hero.module.css";
import hero_img from "../../assets/hero_banner.svg";
import { Btn } from "../../components/button/button";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.block}>
        <h2 className={style.title}>
          Bring everyone together to build better products.
        </h2>
        <p className={style.text}>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Btn/>
      </div>
      <div>
        <img src={hero_img} alt="img" />
      </div>
    </section>
  );
};
