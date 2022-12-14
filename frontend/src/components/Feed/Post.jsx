import axios from "axios";
import { useState } from "react";

import ModifyPost from "./ModifyPost";
import Likes from "./Likes";
export default function Post({ post, getPost, user }) {
  // State
  const [isModify, setIsModify] = useState(false);
  // Comportement

  // Permet de supprimer le post
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/publication/${id}`)
      .then((res) => {
        getPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Verifie la state pour afficher la fonction de modification de poste
  const handleModify = () => {
    isModify ? setIsModify(false) : setIsModify(true);
  };

  // Render

  return (
    <div className="container-post">
      {isModify ? (
        <ModifyPost
          post={post}
          setIsModify={setIsModify}
          getPost={getPost}
          user={user}
        />
      ) : (
        <div>
          <div className="container-user">
            <p className="creator-post">
              {post.firstName} {post.lastName}
            </p>
            <span className="creationDate">Créé le {post.creationDate}</span>
          </div>

          <div className="content-post">
            <p>{post.content}</p>
          </div>
          {post.imageUrl ? (
            <div className="picture-post">
              <img
                onClick={() => {
                  window.open(`${post.imageUrl}`, "_blank");
                }}
                className="picture"
                src={post.imageUrl}
                alt="salut"
              />
            </div>
          ) : null}

          <div className="container-interact-post">
            {(post.userId === user._id || user.admin === true) && (
              <button
                className="btn hoverpost-post"
                onClick={() => handleModify()}
              >
                Modifier
              </button>
            )}
            <div className="likeBox">
              <Likes post={post} user={user} getPost={getPost} />
            </div>
            {(post.userId === user._id || user.admin === true) && (
              <button
                className="btn hoverpost-post"
                onClick={() => handleDelete(post._id)}
              >
                Supprimer le post
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
