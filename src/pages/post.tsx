import React from "react";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppContext } from "../app-context";
import Header from "../components/header";
import Post from "../components/post";

const PostPage = observer(() => {
  const { api, store } = useAppContext();
  const [loading, setLoading] = useState(false);

  const params = useParams<{ postId: string }>();

  const postId = Number(params.postId);

  const load = async () => {
    try {
      setLoading(true);
      await api.post.getById(postId);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  const post = store.post.byId.get(Number(params.postId));


  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Header />
      <section className="head-page container">
          <h3>{post.user?.name} • {post.user?.username}</h3>
      </section>
      <section className="post-container container">
        <Post 
          post={post} />
      </section>
    </div>
  );
});

export default PostPage;
