import axios from "axios";

import { useState } from "react";

import ModifyPost from "./ModifyPost";
import Likes from "./Likes";
export default function Post({ post, getPost, user }) {
  // State
  const [isModify, setIsModify] = useState(false);
  // Comportement
  const handleDelete = (id) => {
    // Verifier si on a autorisation
    axios
      .delete(`http://localhost:3000/api/publication/${id}`)
      .then((res) => {
        console.log(res);
        getPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleModify = () => {
    isModify ? setIsModify(false) : setIsModify(true);
  };

  // Render

  return (
    <div className="container-post">
      {isModify ? (
        <ModifyPost post={post} setIsModify={setIsModify} getPost={getPost} />
      ) : (
        <div>
          <div className="container-user">
            <p className="creator-post">
              {post.firstName} {post.lastName}
            </p>
            <span>Créé le {post.creationDate}</span>
          </div>

          <div className="content-post">
            <p>{post.content}</p>
          </div>

          <p>Mon image : {post.imageUrl}</p>
          <br />
          <div className="container-interact-post">
            {" "}
            <Likes post={post} user={user} />
            {(post.userId === user._id || user.admin === true) && (
              <button onClick={() => handleModify()}>Modifier</button>
            )}
            {(post.userId === user._id || user.admin === true) && (
              <button onClick={() => handleDelete(post._id)}>
                Supprimer le post
              </button>
            )}
          </div>

          <br />
        </div>
      )}
    </div>
  );
}
