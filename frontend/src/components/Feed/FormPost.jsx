import { useForm } from "react-hook-form";
import axios from "axios";
export default function FormPost({ user, getPost }) {
  //State
  const { register, handleSubmit, reset } = useForm();

  // Comportement

  //Permet de creer un poste avec les informations nécessaires
  const onSubmit = (data) => {
    const formdata = new FormData();
    formdata.append("content", data.content);
    formdata.append("image", data.imageUrl[0]);
    formdata.append("firstName", user.firstname);
    formdata.append("lastName", user.lastname);
    // On envoie les informations
    axios
      .post("http://localhost:3000/api/publication", formdata)
      .then(() => {
        getPost();
        handleReset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Permet de reset le formulaire
  const handleReset = () => {
    reset(
      {
        content: "",
      },
      {
        keepErrors: true,
        keepDirty: true,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      }
    );
  };
  // Render
  return (
    <div className="container-formpost">
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="formulaire-formpost"
        encType="multipart/form/data"
        name="formulaire de post"
      >
        <label
          htmlFor="content"
          aria-label="Votre message"
          className="infoAvantPost"
        >
          <span>Partagez avec vos collègues!</span>
        </label>
        <input
          id="content"
          type="text"
          name="content"
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
