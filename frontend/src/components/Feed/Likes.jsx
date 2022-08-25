import axios from "axios";
export default function Likes({ post, user, getpost }) {
  //Style

  //State
  // Comportement
  const handleLikes = () => {
    axios
      .post(`http://localhost:3000/api/publication/${post._id}/like`)
      .then((res) => {
        getpost();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Render
  return (
    <div className="like-container">
      <button className="btn" onClick={handleLikes}>
        Likes
      </button>
      <span className="like-count">{post.likes}</span>
    </div>
  );
}
