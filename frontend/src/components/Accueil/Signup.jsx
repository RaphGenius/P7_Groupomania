import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup({ isLogin, setIsLogin }) {
  //State
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

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
            type="email"
            placeholder="Email"
            autoComplete="off"
            className="input-accueil"
            {...register("email")}
          />

          <label htmlFor="password" className="info-user-accueil">
            Mot de passe
          </label>
          <input
            type="password"
            placeholder="Mot de passe"
            autoComplete="off"
            className="input-accueil"
            {...register("password")}
          />

          <label htmlFor="lastname" className="info-user-accueil">
            Nom de famille
          </label>
          <input
            type="lastname"
            placeholder="Nom de famille"
            className="input-accueil"
            {...register("lastname")}
          />

          <label htmlFor="firstname" className="info-user-accueil">
            Prénom
          </label>
          <input
            type="firstname"
            placeholder="Prénom"
            className="input-accueil"
            {...register("firstname")}
          />
        </div>
        <div className="container-btn">
          <button type="submit" className="btn-accueil">
            Créer un compte
          </button>
        </div>
      </form>
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
