import "./style.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
export default function Signup() {
  //State
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/auth/signup", data)
      .then((res) => {
        console.log(res);
        axios
          .post("http://localhost:3000/api/auth/login", data)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            console.log(res);
            navigate("/postList");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Comportement

  //Render

  return (
    <div className="container">
      <NavBar />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="title">Creer un compte</h1>
        <div className="container-button">
          <label htmlFor="email">Adresse mail</label>
          <input type="email" placeholder="Email" {...register("email")} />

          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            {...register("password")}
          />

          <label htmlFor="lastname">Nom de famille</label>
          <input
            type="lastname"
            placeholder="Nom de famille"
            {...register("lastname")}
          />

          <label htmlFor="firstname">Prénom</label>
          <input
            type="firstname"
            placeholder="Prénom"
            {...register("firstname")}
          />
        </div>
        <div className="container-btn">
          <button type="submit">Créer un compte</button>
        </div>
      </form>
    </div>
  );
}
