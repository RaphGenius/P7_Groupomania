import { useForm } from "react-hook-form";
import axios from "axios";

export default function FormPost({ user, getPost }) {
  //State
  const { register, handleSubmit } = useForm();

  // Comportement

  const onSubmit = (data) => {
    // On défini nom & prénom
    const formdata = new FormData();
    formdata.append("content", data.content);
    formdata.append("image", data.imageUrl[0]);
    formdata.append("firstName", user.firstname);
    formdata.append("lastName", user.lastname);

    // On envoie les informations
    axios
      .post("http://localhost:3000/api/publication", formdata)
      .then((res) => {
        console.log(res);
        getPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Render
  return (
    <div className="container-formpost">
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="formulaire-formpost"
        encType="multipart/form/data"
      >
        <label htmlFor="content"></label>
        <input
          type="text"
          placeholder="Votre message"
          className="message-formpost"
          maxLength={240}
          required
          {...register("content")}
        />
        <label htmlFor="file" className="label-file-upload">
          Telecharger une photo
        </label>
        <input
          type="file"
          name="imageUrl"
          id="file"
          accept=".png, .jpg, .jpeg"
          className="input-file-upload"
          {...register("imageUrl")}
        />

        <button type="submit" className="publish-btn">
          Publier
        </button>
      </form>
    </div>
  );
}
