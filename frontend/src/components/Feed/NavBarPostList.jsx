import { NavLink } from "react-router-dom";
import logo from "../../assets/Groupomania Logos/groupomania_transparentr.png";

export default function NavBarPostList({ user }) {
  // State
  const lienPost = "/postlist";
  const windowLoc = window.location.pathname;
  console.log(windowLoc);
  const handleDisconnect = () => {
    localStorage.clear();
  };
  // Comportement

  //Render
  return (
    <nav className="navPostList">
      {windowLoc === lienPost ? (
        <div className="trente"></div>
      ) : (
        <div className="trente">
          {" "}
          <NavLink to="/postlist" className={"lienNavBar"}>
            Back
          </NavLink>
        </div>
      )}
      <div className="trente">
        <img src={logo} alt="Logo" className="logoPostList" />
      </div>
      <div className="trente">
        <ul className="listNavBar">
          <li className="elementNavBar">
            <NavLink to="/profil" user={user} className={"lienNavBar"}>
              Profil
            </NavLink>
          </li>
          <li className="elementNavBar">
            {" "}
            <NavLink to="/postlist" className={"lienNavBar"}>
              Feed
            </NavLink>
          </li>
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
