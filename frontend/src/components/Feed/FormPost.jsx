import { useForm } from "react-hook-form";
export default function FormPost({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  return (
    <form action="submit" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName"></label>
      <input type="text" placeholder="Nom" {...register("firstName")} />

      <label htmlFor="lastName"></label>
      <input type="text" placeholder="Prénom" {...register("lastName")} />

      <label htmlFor="content"></label>
      <input type="text" placeholder="Votre message" {...register("content")} />

      <label htmlFor="imageUrl"></label>
      <input type="text" placeholder="Votre image" {...register("imageUrl")} />
      <button type="submit">Ajouter un post</button>
    </form>
  );
}
