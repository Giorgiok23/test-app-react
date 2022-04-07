import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "../link/link";
import { Post, TPost } from "../post/post";
import "./postList.scss";

export type TPostList = {
  posts: TPost[];
};

const PostList: FC<TPostList> = ({ posts }) => {
  // const [posts, setPosts] = useState<string[]>([]);

  // finché non cambia posts non ricalcolo e intervengo solo su posts
  // const handleDelete = useCallback(
  //   (postID: string) => {
  //     return posts.find(() => true);
  //   },
  //   [posts]
  // );

  //useMemo usato per ottimizzare i calcoli e renderizzare solo quello che deve essere modificato
  // const modifiedPosts = useMemo(() => {
  //   return posts.map(() => true);
  // }, [posts]);

  //quando cambia posts vogliamo fare qualcosa (effetti collaterali)
  //non cambio mai una dipendenza che ho nello useEffect = loop infinito (in questo caso non cambio mai posts dentro useEffect)
  //non torno mai nulla di utilizzabile, puoi tornare le dinamiche di pulizia, quando smonto il componente [cleanUp]
  // useEffect(() => {
  //   return () => {};
  // }, [posts]);

  return (
    <section className="post-list container">
      <ul className="post-list__list">
        {posts.map((posts, i) => (
          <li className="post-list__list-item">
            <Post
              key={i}
              postID={posts.postID}
              permalink={posts.permalink}
              isVisible={posts.isVisible}
              title={posts.title}
              content={posts.content}
              author={posts.author}
              date={posts.date}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostList;
