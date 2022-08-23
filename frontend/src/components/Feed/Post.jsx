import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../utils/style/colors";
import ModifyPost from "./ModifyPost";
export default function Post({ post, posts, setPosts }) {
  const [isModify, setIsModify] = useState(false);
  const StyleContainer = styled.div`
    border: 2px solid ${colors.primary};
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  `;

  const handleDelete = (id) => {
    // Verifier si on a autorisation
    axios
      .delete(`http://localhost:3000/api/publication/${id}`)
      .then((res) => {
        const newPosts = posts;
        const newData = newPosts.filter((data) => data._id !== id);
        setPosts(newData);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleModify = () => {
    isModify ? setIsModify(false) : setIsModify(true);
  };
  return (
    <StyleContainer>
      {isModify ? (
        <ModifyPost post={post} setIsModify={setIsModify} />
      ) : (
        <div>
          <span>
            Nom :{post.firstName}
            Prénom : {post.lastName}
          </span>
          <p>Contenue : {post.content}</p>
          <br />
          <br />
          <button onClick={() => handleDelete(post._id)}>
            Supprimer le post
          </button>
          <br />
          <br />

          <button onClick={() => handleModify()}>Modifier</button>

          <br />
          <br />
          <span>Créé le {post.creationDate}</span>
          <br />
        </div>
      )}
    </StyleContainer>
  );
}
