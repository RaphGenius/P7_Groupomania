import { useState } from "react";
export default function Likes() {
  //Style

  //State
  const [nmbLikes, setNmbLikes] = useState(0);
  // Comportement
  const handleLikes = () => {
    setNmbLikes(nmbLikes + 1);
  };
  //Render
  return (
    <div>
      <button onClick={handleLikes}>Likes</button>
      <span>{nmbLikes}</span>
    </div>
  );
}
