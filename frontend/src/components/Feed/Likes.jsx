import { useState } from "react";
import axios from "axios";
export default function Likes({ post }) {
  //Style

  //State
  const [nmbLikes, setNmbLikes] = useState(0);
  const [userIdLikes, setUserIdLikes] = useState([]);
  // Comportement
  const handleLikes = () => {
    setNmbLikes(nmbLikes + 1);
    axios
      .post(`http://localhost:3000/api/publication/${post._id}/like`, {
        likes: 1,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(post);
  //Render
  return (
    <div>
      <button onClick={handleLikes}>Likes</button>
      <span>{post.likes}</span>
    </div>
  );
}
