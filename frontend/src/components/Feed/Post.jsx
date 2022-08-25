import axios from "axios";
import photo from "../../assets/hubble/galaxy.jpg";
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
            <span className="creationDate">Créé le {post.creationDate}</span>
          </div>

          <div className="content-post">
            <p>{post.content}</p>
          </div>

          {/* <p>Mon image : {post.imageUrl}</p> */}
          <div className="picture-post">
            <img className="picture" src={photo} alt="salut" />
          </div>
          <div className="container-interact-post">
            {(post.userId === user._id || user.admin === true) && (
              <button className="btn" onClick={() => handleModify()}>
                Modifier
              </button>
            )}
            <div className="likeBox">
              <Likes post={post} user={user} getPost={getPost} />
            </div>
            {(post.userId === user._id || user.admin === true) && (
              <button className="btn" onClick={() => handleDelete(post._id)}>
                Supprimer le post
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
