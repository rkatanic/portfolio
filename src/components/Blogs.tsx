import { useState } from "react";
import { ReactComponent as GridIcon } from "../assets/icons/grid.svg";
import { ReactComponent as ListIcon } from "../assets/icons/list.svg";

import "./Blogs.css";

const Blogs = () => {
  const [viewMode, setViewMode] = useState(false);

  const blogs = [
    {
      title: "This is some first blog title",
      date: "November 15, 2021",
      length: 15,
      categories: ["Java", "Development"],
    },
    {
      title: "This is second blog title",
      date: "June 05, 2021",
      length: 12,
      categories: ["JavaScript", "Development"],
    },
    {
      title: "This is third blog title",
      date: "February 22, 2021",
      length: 4,
      categories: ["React", "Development"],
    },
    {
      title: "This is fourth blog title",
      date: "March 05, 2021",
      length: 22,
      categories: ["Design", "Development", "UX | UI"],
    },
    {
      title: "This is the last blog title",
      date: "August 18, 2020",
      length: 15,
      categories: ["Development"],
    },
  ];
  return (
    <>
      <p className="desc">
        Example of blog list. Click on icons to switch view mode.
      </p>
      <div className="switch-view-mode">
        <div onClick={() => setViewMode(false)}>
          <GridIcon />
        </div>
        <div onClick={() => setViewMode(true)}>
          <ListIcon />
        </div>
      </div>
      <div
        id="blog-list"
        className={`blog-list ${viewMode ? "blog-view-mode" : ""}`}
      >
        {blogs.map((blog, i) => (
          <div
            className="blog-item"
            style={{
              animation: `fadeIn 750ms ease-out ${250 * (i + 1)}ms forwards`,
            }}
          >
            <div className="blog-item-categories">
              {blog.categories.map((category) => (
                <div className="blog-item-category">{category}</div>
              ))}
            </div>
            <h3 className="blog-item-title">{blog.title}</h3>
            <div className="blog-item-footer">
              <div className="blog-item-date">{blog.date}</div>
              <div className="blog-item-length">{blog.length} min read</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
