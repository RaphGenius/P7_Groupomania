import axios from "axios";

export default function CardProfil({ user, navigate }) {
  //State

  //Comportement
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
    </div>
  );
}
