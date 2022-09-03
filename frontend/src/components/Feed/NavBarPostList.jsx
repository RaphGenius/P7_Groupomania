import { NavLink } from "react-router-dom";
import logo from "../../assets/Groupomania Logos/groupomania_transparentr.png";
export default function NavBarPostList({ user }) {
  // State

  // Affiche le bouton back ou profil en fonction de la page sur laquelle on se trouve
  const lienPost = "/postlist";
  const windowLoc = window.location.pathname;
  const handleDisconnect = () => {
    localStorage.clear();
  };
  // Comportement

  //Render
  return (
    <nav className="navPostList">
      <img src={logo} alt="Logo" className="logoPostList trente" />

      <ul className="listNavBar trente">
        {windowLoc === lienPost ? (
          <li className="elementNavBar backArrow">
            <NavLink to="/profil" user={user} className={"lienNavBar"}>
              Profil
            </NavLink>
          </li>
        ) : (
          <li className="elementNavBar">
            <NavLink to="/postlist" className={"lienNavBar"}>
              Back
            </NavLink>
          </li>
        )}

        <li className="elementNavBar">
          <NavLink to="/" onClick={handleDisconnect} className={"lienNavBar"}>
            Deconnexion
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
