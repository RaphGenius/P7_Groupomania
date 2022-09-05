import Accueil from "./pages/Accueil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import Error from "./pages/Error";
import axios from "axios";
import Profil from "./pages/Profil";
function App() {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
