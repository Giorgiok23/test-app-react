import PostStore from "./post";
import userStore from "./user";

export default class AppStore {
  user = new userStore(this);
  post = new PostStore(this);
}
