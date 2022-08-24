import { useEffect, useState } from "react";
import axios from "axios";
export default function Likes({ post, user }) {
  //Style

  //State
  const [userIdLikes, setUserIdLikes] = useState([]);
  useEffect(() => {
    setUserIdLikes(post.usersLiked);
  }, [post.usersLiked]);

  // Comportement
  const handleLikes = () => {
    axios
      .post(`http://localhost:3000/api/publication/${post._id}/like`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /*   console.log(post.usersLiked); */

  //Render
  return (
    <div>
      <button onClick={handleLikes}>Likes</button>
      <span>{post.likes}</span>
    </div>
  );
}
