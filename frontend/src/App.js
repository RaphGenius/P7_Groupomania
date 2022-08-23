import Accueil from "./pages/Accueil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Accueil/Login";
import Signup from "./components/Accueil/Signup";
import PostList from "./pages/PostList";
import axios from "axios";
import Profil from "./pages/Profil";
function App() {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
