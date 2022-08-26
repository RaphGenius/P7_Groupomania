import Login from "../components/Accueil/Login";
import Signup from "../components/Accueil/Signup";
import logo from "../assets/Groupomania Logos/groupomania_transparentr.png";
import NavBarAccueil from "../components/Accueil/NavBarAccueil";

export default function Accueil() {
  //state

  // Comportement

  //render
  return (
    <div className="container-acueil">
      <NavBarAccueil />
      <div className="all-accueil">
        <div className="container-infogroupo">
          <div className="container-logoAccueil">
            <img className="image-accueil" src={logo} alt="" />
          </div>
          <h2>
            Groupomania, votre réseau social pour partager avec vos
            collaborateurs
          </h2>
        </div>
        <div className="container-logsign">
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  );
}
