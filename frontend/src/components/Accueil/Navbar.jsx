import { NavLink } from "react-router-dom";
import styled from "styled-components";
export default function NavBar() {
  //State
  const StyledUl = styled.ul`
    display: flex;
    justify-content: right;
  `;

  const StyledLien = styled.li`
    position: relative;
    display: flex;
    list-style-type: none;
    color: red;
    font-size: 15px;
    margin-right: 20px;
  `;

  const StyledLink = styled(NavLink)`
    color: #fd2d01;
    text-decoration: none;
    margin-top: 10px;
    border: 1px solid #fd2d01;
    padding: 10px;
    &:hover {
      text-decoration: underline;
    }
  `;
  //Comportement

  //render
  return (
    <nav>
      <StyledUl>
        <StyledLien>
          <StyledLink to="/login">Se connecter</StyledLink>
        </StyledLien>
        <StyledLien>
          <StyledLink to="/signup">S'inscrire</StyledLink>
        </StyledLien>
      </StyledUl>
    </nav>
  );
}
