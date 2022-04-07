import React, { FC } from "react";
import { Link } from "../link/link";
import { BsFillPencilFill } from "react-icons/bs";

export type TAuthor = {
  name: string;
  url: string;
};

export type TPost = {
  postID: string;
  permalink: string;
  isVisible: boolean;
  title: string;
  content: string;
  author: TAuthor;
  date: Date;
};

export const Post: FC<TPost> = ({
  postID,
  permalink,
  isVisible,
  title,
  content,
  author,
  date,
}) => {
  return (
    <article id={postID} className={`post ${isVisible ? "" : "hidden"} `}>
      <header className="post__header">
        <a href="#" className="cta cta--edit">
          <BsFillPencilFill />
        </a>
        <h1 className="post__title">
          <Link
            linkLabel={title}
            linkTargetBlank={false}
            linkHref={permalink}
          />
        </h1>
      </header>
      <div>
          {content}
        <div className="cta-wrapper">
            <Link
                linkLabel="Read more"
                linkTargetBlank={false}
                linkHref={permalink}
                className="btn btn-primary"
            />
        </div>
      </div>
      <footer className="post__footer">
        <div className="post__author">
          Author:
          <Link
            linkLabel={author.name}
            linkTargetBlank={false}
            linkHref={author.url}
          />
        </div>
        <div className="post__date">
          Publication date: <span>{date.toLocaleDateString()}</span>
        </div>
      </footer>
    </article>
  );
};
