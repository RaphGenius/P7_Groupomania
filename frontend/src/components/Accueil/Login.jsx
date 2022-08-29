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
        navigate("/postlist");
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
            className="info-user-accueil"
          >
            Adresse Mail
          </label>
          <input
            type="email"
            placeholder="MonMail@mail.com"
            id="email"
            className="input-accueil"
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
            {...register("password")}
          />
        </div>
        <div className="container-btn">
          <button type="submit" id="submitbtn" className="btn-accueil">
            Connexion
          </button>
        </div>
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
