import { NavLink } from "react-router-dom";
import logo from "../../assets/Groupomania Logos/groupomania_transparentr.png";
export default function NavBarAccueil() {
  // State

  // Comportement

  //Render
  return (
    <nav className="navPostList">
      <div className="nav-accueil">
        <div className="container-logo-accueil">
          <img src={logo} alt="Logo" className="logoAccueil" />
        </div>
        <div>
          <img src={logo} alt="Logo" className="logoAccueil" />
        </div>
        <div>
          <img src={logo} alt="Logo" className="logoAccueil" />
        </div>
        <div>
          <img src={logo} alt="Logo" className="logoAccueil" />
        </div>
        <div>
          <img src={logo} alt="Logo" className="logoAccueil" />
        </div>
      </div>
    </nav>
  );
}
