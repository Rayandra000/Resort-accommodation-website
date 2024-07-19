import React from "react";
import BlogCard from "./BlogCard";
import { useState } from "react";
import BlogData from "./BlogData";
import "./BlogHome.css";

const AllBlog = () => {
  const [items, setItems] = useState(BlogData);
  return (
    <>
      <section className="blog top">
        <div className="container">
          <div className="content grid">
            {items.map((item) => {
              return <BlogCard key={items.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlog;
