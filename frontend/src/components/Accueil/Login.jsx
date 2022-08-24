import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
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

  // render

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Se connecter</h1>
        <div className="container-button">
          <label htmlFor="email">Adresse mail</label>
          <input type="email" placeholder="Email" {...register("email")} />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            {...register("password")}
          />
        </div>
        <div className="container-btn">
          <button type="submit" id="submitbtn">
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}
