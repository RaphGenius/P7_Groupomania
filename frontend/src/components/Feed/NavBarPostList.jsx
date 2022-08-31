import { NavLink } from "react-router-dom";
import logo from "../../assets/Groupomania Logos/groupomania_transparentr.png";
export default function NavBarPostList({ user }) {
  // State
  const lienPost = "/postlist";
  const windowLoc = window.location.pathname;
  const handleDisconnect = () => {
    localStorage.clear();
  };
  // Comportement

  //Render
  return (
    <nav className="navPostList">
      <div className="trente"></div>

      <div className="trente">
        <img src={logo} alt="Logo" className="logoPostList" />
      </div>
      <div className="trente">
        <ul className="listNavBar">
          {windowLoc === lienPost ? (
            <li className="elementNavBar">
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
      </div>
    </nav>
  );
}
