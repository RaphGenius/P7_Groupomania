import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login({ setIsLogin }) {
  //state
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isLogError, setIsLogError] = useState(false);
  //comportement

  // Permet de se loger
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/postlist");
      })
      .catch((err) => {
        console.log(err);
        setIsLogError(true);
      });
  };
  // Affiche le component login ou signup en fonction de si true ou false
  const handleLogin = () => {
    setIsLogin(false);
  };
  // render

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Se connecter</h1>
        <div className="container-button">
          <label
            htmlFor="email"
            aria-label="email"
            id="email"
            className="info-user-accueil"
          >
            Adresse mail
          </label>
          <input
            type="email"
            placeholder="MonMail@mail.com"
            id="email"
            className="input-accueil"
            required
            {...register("email")}
          />
          <label
            htmlFor="password"
            id="password"
            aria-label="password"
            className="info-user-accueil"
          >
            Mot de passe
          </label>
          <input
            type="password"
            placeholder="Mon mot de passe"
            autoComplete="on"
            id="password"
            className="input-accueil"
            required
            {...register("password")}
          />
        </div>
        <div className="container-btn">
          <button type="submit" id="submitbtn" className="btn-accueil">
            Connexion
          </button>
        </div>
        {isLogError && (
          <p className="errorMsg">Mail et/ou mot de passe incorrecte</p>
        )}
      </form>
      <button
        className="notSign"
        onClick={() => {
          handleLogin();
        }}
      >
        <span className="stillNotSignyp">Pas encore inscrit?</span>
      </button>
    </div>
  );
}
