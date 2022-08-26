import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ isLogin, setIsLogin }) {
  //state
  const navigate = useNavigate();
  //comportement
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/auth/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("token", res.data.token);
        console.log(res);
        navigate("/postList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            className="info-user-acueil"
          >
            Adresse Mail
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            {...register("email")}
          />
          <label
            htmlFor="password"
            id="password"
            aria-label="password"
            className="info-user-acueil"
          >
            Mot de passe
          </label>
          <input
            type="password"
            placeholder="Mot de passe"
            autoComplete="on"
            id="password"
            {...register("password")}
          />
        </div>
        <div className="container-btn">
          <button type="submit" id="submitbtn">
            Connexion
          </button>
        </div>
      </form>
      <button
        className="notSign btn"
        onClick={() => {
          handleLogin();
        }}
      >
        Pas encore inscrit?
      </button>
    </div>
  );
}
