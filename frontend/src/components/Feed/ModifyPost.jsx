import axios from "axios";
import { useForm } from "react-hook-form";

export default function ModifyPost({ post, setIsModify, getPost }) {
  //State
  const { register, handleSubmit } = useForm();

  //Comportement
  const onModify = (data) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append("content", data.content);
    formdata.append("image", data.imageUrl[0]);
    console.log(formdata);
    axios
      .put(`http://localhost:3000/api/publication/${post._id}`, formdata)
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
            className="message-modifyPost bg-pink"
            type="text"
            maxLength={240}
            required
            defaultValue={post.content}
            placeholder="Votre message"
            {...register("content")}
          />
        </div>

        <div className="picture-post">
          <img className="picture" src={post.imageUrl} alt="salut" />
        </div>
        <div className="container-modify-post">
          <button type="submit" className="btn hovermodifypost">
            Confirmer
          </button>
          <label htmlFor="file" className="btn hovermodifypost">
            Modifier image
          </label>
          <input
            type="file"
            name="imageUrl"
            id="file"
            accept=".png, .jpg, .jpeg"
            className="input-file-upload "
            {...register("imageUrl")}
          />
        </div>
      </form>
    </div>
  );
}
