import React from "react";
import style from "./Comment.module.css";
import { CommentCard } from "../../components/comment-card/comment-card";
import Ava from "../../assets/ava.svg";
import { Btn } from "../../components/button/button";

export const Comment = () => {
  return (
    <section className={style.Comment}>
      <h2 className={style.title}></h2>
      <div className={style.block}>
        <CommentCard
          img={Ava}
          title="Anisha Li"
          text="  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
        />
        <CommentCard
          img={Ava}
          title="Anisha Li"
          text="  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
        />
      </div>
      <div className={style.btn_box}>
        <Btn />
      </div>
    </section>
  );
};
