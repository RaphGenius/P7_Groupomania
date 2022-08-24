import { NavLink } from "react-router-dom";
import logo from "../../assets/Groupomania Logos/icone_groupomania_color.mini.png";
import styled from "styled-components";

export default function NavBarPostList({ user }) {
  //Style

  const StyledLogo = styled.img`
    width: 150px;
    height: 100px;
  `;
  const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid orange;
    border-radius: 10px;
    padding: 0px;
  `;
  // State

  const handleDisconnect = () => {
    localStorage.clear();
  };
  // Comportement

  //Render
  return (
    <StyledNav>
      <div>
        <StyledLogo src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/profil" user={user}>
            Profil
          </NavLink>
          <NavLink to="/postlist">Feed</NavLink>
          <NavLink to="/" onClick={handleDisconnect}>
            Deconnexion
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}
