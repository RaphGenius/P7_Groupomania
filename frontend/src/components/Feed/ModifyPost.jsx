import axios from "axios";
import { useForm } from "react-hook-form";
import photo from "../../assets/hubble/galaxy.jpg";
export default function ModifyPost({ post, setIsModify, getPost }) {
  //State
  const { register, handleSubmit } = useForm();
  console.log(post);
  //Comportement
  const onModify = (data) => {
    axios
      .put(`http://localhost:3000/api/publication/${post._id}`, data)
      .then((res) => {
        console.log(res);
        getPost();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsModify(false);
      });
  };
  const onBack = () => {
    setIsModify(true);
  };
  //Render
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit(onModify)}>
        <div className="container-user">
          <p className="creator-post">
            {post.firstName} {post.lastName}
          </p>
          <span className="creationDate">Créé le {post.creationDate}</span>
        </div>
        <div className="content-post">
          <label htmlFor="content"></label>
          <input
            className="message-formpost bg-pink"
            type="text"
            maxLength={240}
            required
            placeholder="Votre message"
            {...register("content")}
          />
        </div>
        <div className="picture-post">
          <img className="picture" src={photo} alt="salut" />
        </div>
        <label htmlFor="imageUrl"></label>
        <input
          type="text"
          placeholder="Modifier image"
          {...register("imageUrl")}
        />
        <button type="submit">Confirmer</button>
        <button onClick={() => onBack()}>Annuler</button>
      </form>
    </div>
  );
}
