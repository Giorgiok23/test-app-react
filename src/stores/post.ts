import { action, computed, makeObservable, observable } from "mobx";
import postsListData from "../data/posts";
import Post from "../models/post";
import IPost from "../types/post";
import AppStore from "./app";

export default class PostStore {
  byId = observable.map<number, Post>();

  constructor(private store: AppStore) {
    makeObservable(this);
  }

  @action load(posts: IPost[]) {
    posts.forEach((it) => this.byId.set(it.id, new Post(this.store, it)));
  }

  @action update(post: Post, id: number) {
    this.byId.set(id, post);
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }
}
