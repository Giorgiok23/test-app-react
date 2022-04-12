import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import PostModel from "../models/post";
import { Form, FormControl, Modal, Button } from "react-bootstrap";
import PostStore from '../stores/post'
import { useAppContext } from "../app-context";

const Post: FC<{ post: PostModel }> = ({ post }) => {
  const {  store } = useAppContext();
  const [editMode, setEditMode] = useState(false);
  const editModeOn = () => setEditMode(!editMode);

  const [formData, setFormData] = useState(post);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //combined functions edit
  const editAction = () => {
    handleShow();
    editModeOn();
  };

  const onChange = (e:  ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setFormData({...formData, [e.currentTarget.name]:e.currentTarget.value} as PostModel)
  }

  //combined functions save
  const saveAction = (e: any) => {
    e.preventDefault();
    // let data = new FormData(e.target);
    store.post.update(formData,formData.id)

    handleClose();
  };

  return (
    <>
      <article className={`post ${post ? "" : "hidden"} `}>
        <header className="post__header">
          <button
            onClick={editAction}
            className="cta cta--edit"
            tabIndex={0}
            type="button"
          >
            <BsFillPencilFill />
          </button>
          <Link className="post__title" to={`/post/${post.id}`}>
            {post.title}
          </Link>
        </header>
        <div>
          {post.body}

          <div className="cta-wrapper">
            <Link to={`/post/${post.id}`} className="btn btn-primary">
              Read more
            </Link>
          </div>
        </div>
        <footer className="post__footer">
          <div className="post__user">
            <Link to={`/user/${post.userId}`}>{post.user?.name}</Link>
          </div>
          <div className="post__date">
            {/* Publication date: <span>{post.date.toLocaleDateString()}</span> */}
          </div>
        </footer>
      </article>

      {editMode && (
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={saveAction}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormControl
                id="title"
                name="title"
                type="text"
                aria-label="edit title"
                defaultValue={post.title}
                onChange={onChange}
              />
              <FormControl
                id="body"
                name="body"
                as="textarea"
                aria-label="edit body"
                defaultValue={post.body}
                onChange={onChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={saveAction}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default observer(Post);
