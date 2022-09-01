import NavBarAccueil from "../components/Accueil/NavBarAccueil";

export default function Error() {
  //state

  //Comportement

  //Render
  return (
    <div>
      <NavBarAccueil />
      <div className="container-error">
        <h1 className="msgError-page error404">Error 404</h1>
        <p className="msgError-page">Cette page n'existe pas encore ! :( </p>
      </div>
    </div>
  );
}
