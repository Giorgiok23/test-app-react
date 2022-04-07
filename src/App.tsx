import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import PostList from "./components/post-list/postList";
import "./App.scss";

// import { observable, computed, action } from "mobx";

const postsListData = [
  {
    postID: "id01",
    isVisible: true,
    permalink: "/article/spider-man/",
    title: "Spider-Man: No Way Home Writer Responds to Peter Parker",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate diam, quis molestie nibh. Donec molestie nulla sit amet sollicitudin dignissim.",
    author: {
      name: "Peter Parker",
      url: "/author/peter-parker",
    },
    date: new Date(2021, 12, 27),
  },
  {
    postID: "id02",
    isVisible: true,
    permalink: "/article/batman-vs-superman/",
    title: "Batman v Superman: Dawn of Justice",
    content:
      "Curabitur tincidunt convallis augue ut auctor. Pellentesque a velit sollicitudin, imperdiet enim eu, gravida arcu. Maecenas eget quam id nisi vestibulum ullamcorper.",
    author: {
      name: "Clark Kent",
      url: "/author/clark-kent",
    },
    date: new Date(2021, 11, 15),
  },
  {
    postID: "id03",
    isVisible: true,
    permalink: "/article/flash-gordon/",
    title: "Flash Gordon - Rotten Tomatoes",
    content:
      "Donec molestie nulla sit amet sollicitudin dignissim. Curabitur tincidunt convallis augue ut auctor. Pellentesque a velit sollicitudin, imperdiet enim eu, gravida arcu.",
    author: {
      name: "Flash Gordon",
      url: "/author/flash-gordon",
    },
    date: new Date(2021, 10, 20),
  },
  {
    postID: "id04",
    isVisible: true,
    permalink: "",
    title: "Batman v Superman: Dawn of Justice",
    content:
      "Curabitur tincidunt convallis augue ut auctor. Pellentesque a velit sollicitudin, imperdiet enim eu, gravida arcu. Maecenas eget quam id nisi vestibulum ullamcorper.",
    author: {
      name: "Clark Kent",
      url: "/author/clark-kent",
    },
    date: new Date(2021, 11, 15),
  },
  {
    postID: "id05",
    isVisible: true,
    permalink: "",
    title: "Flash Gordon - Rotten Tomatoes",
    content:
      "Donec molestie nulla sit amet sollicitudin dignissim. Curabitur tincidunt convallis augue ut auctor. Pellentesque a velit sollicitudin, imperdiet enim eu, gravida arcu.",
    author: {
      name: "Flash Gordon",
      url: "/author/flash-gordon",
    },
    date: new Date(2021, 10, 20),
  },
  {
    postID: "id06",
    isVisible: true,
    permalink: "",
    title: "Spider-Man: No Way Home Writer Responds to Peter Parker",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate diam, quis molestie nibh. Donec molestie nulla sit amet sollicitudin dignissim.",
    author: {
      name: "Peter Parker",
      url: "/author/peter-parker",
    },
    date: new Date(2021, 12, 27),
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <PostList posts={postsListData} />
    </div>
  );
}

export default App;
