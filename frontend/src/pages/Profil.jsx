import { useState, useEffect } from "react";
import axios from "axios";
import NavBarPostList from "../components/Feed/NavBarPostList";
const userIdOfUser = localStorage.getItem("userId");
export default function Profil() {
  //style

  //State
  const [user, setUser] = useState([]);
  //Comportement

  //Avoir le profil utilisateur
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/user/${userIdOfUser}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/auth/user/${userIdOfUser}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Render
  console.log(user);
  return (
    <div>
      <NavBarPostList />
      <h1>Mon profil</h1>
      <p>Prénom : {user.firstname}</p>
      <p>Nom :{user.lastname}</p>
      <button onClick={handleDelete}>Supprimer mon profil </button>
    </div>
  );
}
