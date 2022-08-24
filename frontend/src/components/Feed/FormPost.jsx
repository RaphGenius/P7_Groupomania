import { useForm } from "react-hook-form";
import axios from "axios";
export default function FormPost({ user, getPost }) {
  const { register, handleSubmit } = useForm();
  console.log(user);
  const onSubmit = (data) => {
    const userInformation = {
      firstName: user.firstname,
      lastName: user.lastname,
    };
    axios
      .post("http://localhost:3000/api/publication", {
        ...data,
        ...userInformation,
      })
      .then((res) => {
        console.log(res);
        getPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form action="submit" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="content"></label>
      <input type="text" placeholder="Votre message" {...register("content")} />

      <label htmlFor="imageUrl"></label>
      <input type="text" placeholder="Votre image" {...register("imageUrl")} />
      <button type="submit">Ajouter un post</button>
    </form>
  );
}
