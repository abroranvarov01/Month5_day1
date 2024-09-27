import React from "react";
import style from "./comment-card.module.css";

export const CommentCard = ({ img, title, text }) => {
  return (
    <div className={style.Card}>
      <div className={style.img_box}>
        <img src={img} alt="img" />
      </div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.text}>{text}</p>
    </div>
  );
};
