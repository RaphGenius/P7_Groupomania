import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Post from "../components/Feed/Post";
import FormPost from "../components/Feed/FormPost";
import NavBarPostList from "../components/Feed/NavBarPostList";
export default function PostList() {
  // State
  const [posts, setPosts] = useState([]);
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState([]);
  //Avoir les publications
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/publication")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPosts]);

  //avoir le profil utilisateur
  const userIdOfUser = localStorage.getItem("userId");
  console.log(userIdOfUser);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/user/${userIdOfUser}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Creer un post
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/publication", data)
      .then((res) => {
        console.log(res);
        const newPosts = { posts };
        const newData = { ...newPosts, ...data };
        console.log(newData);
        /* setPosts(newData); */
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Comportement

  //Render
  return (
    <div>
      <NavBarPostList user={user} />
      <h1>Liste de poste</h1> <br />
      <h2>Bienvenue à {user.firstname}</h2>
      <section>
        <FormPost
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
        />
        {posts.map((post) => (
          <Post post={post} posts={posts} setPosts={setPosts} key={post._id} />
        ))}
      </section>
    </div>
  );
}
