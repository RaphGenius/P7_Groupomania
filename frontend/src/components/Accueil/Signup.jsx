import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup({ setIsLogin }) {
  //State
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  //Comportement

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
            navigate("/postlist");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.error);
        setErrorMsg(err.response.data.error);
      });
  };
  const handleLogin = () => {
    setIsLogin(true);
  };
  //Render

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="title">Creer un compte</h1>
        <div className="container-button">
          <label htmlFor="email" className="info-user-accueil">
            Adresse mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
            className="input-accueil"
            required
            {...register("email")}
          />

          <label htmlFor="password" className="info-user-accueil">
            Mot de passe
          </label>
          <div
            className="infobox"
            title=" Votre mot de passe doit contenir entre 8 et 20 caractères, au moins
            une lettre majuscule et un caractère spécial(@,-,_,...) et aucun
            espace!"
          >
            <span className="interogationPoint">?</span>
          </div>
          <input
            id="password"
            type="password"
            placeholder="Mot de passe"
            autoComplete="off"
            className="input-accueil"
            required
            {...register("password")}
          />
          <label htmlFor="lastname" className="info-user-accueil">
            Nom de famille
          </label>
          <input
            id="lastname"
            type="lastname"
            placeholder="Nom de famille"
            className="input-accueil"
            required
            {...register("lastname")}
          />

          <label htmlFor="firstname" className="info-user-accueil">
            Prénom
          </label>
          <input
            id="firstname"
            type="firstname"
            placeholder="Prénom"
            className="input-accueil"
            required
            {...register("firstname")}
          />
        </div>
        <div className="container-btn">
          <button type="submit" className="btn-accueil">
            Créer un compte
          </button>
        </div>
      </form>
      {errorMsg !== "" ? <p className="errorMsg">{errorMsg} </p> : null}
      <button
        className="notSign"
        onClick={() => {
          handleLogin();
        }}
      >
        <span className="stillNotSignyp">J'ai déjà un compte !</span>
      </button>
    </div>
  );
}
