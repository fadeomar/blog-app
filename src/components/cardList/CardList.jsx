import React from "react";

import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

let posts = [
  {
    img: "p1.jpeg",
    createdAt: "16-12-2024",
    category: "style",
    catSlug: "style",
    slug: "first-post",
    title: "first_post",
    desc: "first_post",
  },
  {
    img: "p1.jpeg",
    createdAt: "16-12-2024",
    category: "food",
    catSlug: "food",
    slug: "second-post",
    title: "second_post",
    desc: "second_post",
  },
];
const CardList = ({ page = 1, cat }) => {
  const POST_PER_PAGE = 2;
  let count = posts.length;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
