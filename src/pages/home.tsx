import React from "react";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useAppContext } from "../app-context";
import Header from "../components/header";
import Post from "../components/post";

const HomePage = observer(() => {
  const { api, store } = useAppContext();
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      await api.post.getAll();
      await api.user.getAll();
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

  return (
    <div>
      <Header />
      <section className="post-list container">
        <ul className="post-list__list">
          {store.post.all.map((post, i) => (
            <li key={i} className="post-list__list-item">
              <Post
                post={post}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
});

export default HomePage;
