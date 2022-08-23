import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Post from "../components/Feed/Post";
import FormPost from "../components/Feed/FormPost";
export default function PostList() {
  // State
  const [posts, setPosts] = useState([]); //Avoir tous les postes

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

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Creer un post
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
      <h1>Liste de poste</h1> <br />
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
