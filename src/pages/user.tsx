import React from "react";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppContext } from "../app-context";
import Post from "../components/post";
import Header from "../components/header";


const UserPage = observer(() => {
  const [loading, setLoading] = useState(false);

  const params = useParams<{ userId: string }>();

  const userId = Number(params.userId);

  const { api, store } = useAppContext();

  const load = async () => {
    try {
      setLoading(true);
      await api.user.getById(userId);
      await api.post.getByUserId(userId);
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

  const user = store.user.byId.get(userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
        <Header />
        <section className="head-page container">
            <h3>{user.name} • {user.username}</h3>
            <p>{user.email}</p>
        </section>

        
        <section className="post-list container">
            <h2>Posts</h2>
            <ul className="post-list__list">
                {user.posts.map((post, i) => (
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

export default UserPage;
