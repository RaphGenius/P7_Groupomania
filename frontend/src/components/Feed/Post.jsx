import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../utils/style/colors";
import ModifyPost from "./ModifyPost";
import Likes from "./Likes";
export default function Post({ post, posts, setPosts, getPost, user }) {
  // Style
  const StyleContainer = styled.div`
    border: 2px solid ${colors.primary};
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  `;
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
    <StyleContainer>
      {isModify ? (
        <ModifyPost post={post} setIsModify={setIsModify} getPost={getPost} />
      ) : (
        <div>
          <span>
            Nom :{post.firstName}
            Prénom : {post.lastName}
          </span>
          <p>Contenue : {post.content}</p>
          <br />
          <br />
          {post.userId === user._id && (
            <button onClick={() => handleDelete(post._id)}>
              Supprimer le post
            </button>
          )}

          {post.userId === user._id && (
            <button onClick={() => handleModify()}>Modifier</button>
          )}

          <span>Créé le {post.creationDate}</span>
          <br />
          <Likes post={post} />
        </div>
      )}
    </StyleContainer>
  );
}
