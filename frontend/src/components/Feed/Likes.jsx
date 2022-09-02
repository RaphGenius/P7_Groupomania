import axios from "axios";
export default function Likes({ post, user, getPost }) {
  //Style

  //State
  // Comportement
  const handleLikes = () => {
    axios
      .post(`http://localhost:3000/api/publication/${post._id}/like`)
      .then((res) => {
        getPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Render
  return (
    <div className="like-container">
      <button className="btn hoverpost-post" onClick={handleLikes}>
        J'aime !
      </button>
      {post.usersLiked.includes(user._id) ? (
        <span className="like-count yesLike">{post.likes}</span>
      ) : (
        <span className="like-count noLike">{post.likes}</span>
      )}
    </div>
  );
}
