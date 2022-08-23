import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBarPostList from "../components/Feed/NavBarPostList";

export default function Profil() {
  //style

  //State
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  //Comportement

  //Avoir le profil utilisateur
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/user/`)
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
      .delete(`http://localhost:3000/api/auth/user/`)
      .then((res) => {
        console.log(res);
        localStorage.clear();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user);
  //Render
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
