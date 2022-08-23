import NavBar from "../components/Accueil/Navbar";
import styled from "styled-components";
/* import Logo from "../assets/Groupomania Logos/icone_groupomania_color.mini.png"; */
export default function Accueil() {
  //state
  const StyledAll = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const StyledContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  /*   const StyledLogo = styled.img`
    border: 2px solid;
  `; */
  // Comportement

  //render
  return (
    <StyledAll>
      <NavBar />
      <StyledContainer>
        {/*   <StyledLogo src={Logo} alt="Logo Groupomania" /> */}
      </StyledContainer>
    </StyledAll>
  );
}
