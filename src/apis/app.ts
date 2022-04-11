import axios from "axios";
import AppStore from "../stores/app";
import PostApi from "./post";
import userApi from "./user";

export default class AppApi {
  client = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

  user: userApi;
  post: PostApi;

  constructor(store: AppStore) {
    this.user = new userApi(this, store);
    this.post = new PostApi(this, store);
  }
}
