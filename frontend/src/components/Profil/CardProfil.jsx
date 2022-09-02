import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function CardProfil({ user, navigate }) {
  //State
  const [myPosts, setMyPosts] = useState([]);
  //Comportement
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/publication/${user._id}`)
      .then((res) => {
        setMyPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user._id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/auth/user/`)
      .then((res) => {
        console.log(res);
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Render

  return (
    <div className="container-profil">
      <h1 className="title-profil">Mon profil</h1>
      <div className="user-profil">
        <p className="information-user">
          Nom : <span className="user-name">{user.lastname}</span>
        </p>
        <p className="information-user">
          Prénom : <span className="user-name">{user.firstname}</span>
        </p>
        <div className="container-button">
          <button className="deleteBtn" onClick={handleDelete}>
            Supprimer mon profil
          </button>
          <span className="info-suppression">
            Toute supression est definitive
          </span>
        </div>
      </div>
      <div>
        <h2 className="mypost-title">Mes posts</h2>
        <div className="mypostProfil">
          {myPosts.map((post) => (
            <div key={post._id}>
              <div className="container-user">
                <p className="creator-post">
                  {post.firstName} {post.lastName}
                </p>
                <span className="creationDate">
                  Créé le {post.creationDate}
                </span>
              </div>

              <div className="content-post">
                <p className="postContent-profil">{post.content}</p>
              </div>
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
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
