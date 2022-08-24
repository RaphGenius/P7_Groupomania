import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../components/Feed/Post";
import FormPost from "../components/Feed/FormPost";
import NavBarPostList from "../components/Feed/NavBarPostList";
export default function PostList() {
  // State
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);
  //Avoir les publications
  const getPost = () => {
    axios
      .get("http://localhost:3000/api/publication")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPost();
    axios
      .get(`http://localhost:3000/api/auth/user`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Comportement

  //Render
  return (
    <div className="containerPostlist">
      <NavBarPostList user={user} />
      <div className="allPost">
        <h2>
          Souhaite tu écrire un gentil mot à tes collègues {user.firstname} ?
        </h2>
        <section>
          <FormPost user={user} getPost={getPost} />
          {posts.map((post) => (
            <Post post={post} key={post._id} getPost={getPost} user={user} />
          ))}
        </section>
      </div>
    </div>
  );
}
