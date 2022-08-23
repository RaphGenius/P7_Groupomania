import { useState, useEffect } from "react";
import axios from "axios";
const userIdOfUser = localStorage.getItem("userId");
console.log(userIdOfUser);
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

  const handleDelete = () => {};
  //Render

  return (
    <div>
      <h1>Mon profil</h1>
      <p>Prénom : {user.firstname}</p>
      <p>Nom :{user.lastname}</p>
      <button>Supprimer mon profil </button>
    </div>
  );
}
