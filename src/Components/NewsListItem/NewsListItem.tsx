import { INewsListItem } from "../../types/newsType";
import s from "./NewsListItem.module.scss";
import React, { FC, ReactElement } from "react";

interface NewsProps {
  item: INewsListItem;
}

export const NewsListItem: FC<NewsProps> = ({ item }): ReactElement => {
  return (
    <li className={s.card}>
      <img src="картинка" alt="картинка" className="" />

      <div className={s.body}>
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.description}></p>

        <div>
          <p className={s.author}></p>
          <p className={s.publishedAt}></p>
        </div>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
        <button
          type="button"
          className="btn-close btn-close"
          aria-label="Close"
        >
          Подробнее
        </button>
      </span>
    </li>
  );
};
