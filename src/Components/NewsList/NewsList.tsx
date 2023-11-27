/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import s from "./NewsList.module.scss";
import React from "react";
import Container from "../Layout/Container/Container";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NewsListItem } from "../NewsListItem/NewsListItem";
import { INewsListItem } from "../../types/newsType";

export const NewsList: React.FC = () => {
  const { news } = useTypedSelector((state) => state.news.news);
  console.log("news: ", news);

  return (
    <section className={s.goods}>
      <Container>
        <>
          <ul className={s.list}>
            <p>NewsList</p>
            {news.map((item: INewsListItem) => (
              <li key={item.source.id}>
                <div key={item.source.id}>
                  <NewsListItem item={item} />
                </div>
              </li>
            ))}
          </ul>
        </>
      </Container>
    </section>
  );
};
