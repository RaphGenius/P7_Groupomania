import axios from "axios";
import { useForm } from "react-hook-form";

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
  //Render
  return (
    <form action="submit" onSubmit={handleSubmit(onModify)}>
      <label htmlFor="content"></label>
      <input type="text" placeholder="Votre message" {...register("content")} />

      <label htmlFor="imageUrl"></label>
      <input type="text" placeholder="Votre image" {...register("imageUrl")} />
      <button type="submit">Modifier</button>
    </form>
  );
}
