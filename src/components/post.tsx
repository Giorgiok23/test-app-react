import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import PostModel from "../models/post";

const Post: FC<{ post: PostModel }> = observer(({ post }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <article className={`post ${post ? "" : "hidden"} `}>
      <header className="post__header">
        <button
          onClick={() => setEditMode(!editMode)}
          className="cta cta--edit"
          tabIndex={0}
          type="button"
        >
          <BsFillPencilFill />
        </button>
        <h1 className="post__title">
          <Link
            to={`/post/${post.id}`} 
          >{post.title}</Link>
        </h1>
      </header>
      <div>
        {post.body}
        <div className="cta-wrapper">
          <Link
            to={`/post/${post.id}`}
            className="btn btn-primary"
          >Read more</Link>
        </div>
      </div>
      <footer className="post__footer">
        <div className="post__user">
          <Link to={`/user/${post.userId}`}>{post.user?.name}</Link>
          {/* <Link
            linkLabel={user.name}
            linkTargetBlank={false}
            linkHref={user.url}
          /> */}
        </div>
        <div className="post__date">
          {/* Publication date: <span>{post.date.toLocaleDateString()}</span> */}
        </div>
      </footer>
    </article>
  );
});

export default Post;
