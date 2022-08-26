import { useForm } from "react-hook-form";
import axios from "axios";
/* import { useState } from "react"; */
export default function FormPost({ user, getPost }) {
  //State
  const { register, handleSubmit } = useForm();
  /*   const [file, setFile] = useState({}); */

  // Comportement

  const onSubmit = (data) => {
    // On défini nom & prénom
    const userInformation = {
      firstName: user.firstname,
      lastName: user.lastname,
    };
    /*     const picture = {
      imageUrl: file.name,
    }; */
    // On envoie les informations
    axios
      .post("http://localhost:3000/api/publication", {
        ...data,
        ...userInformation,
        /*         ...picture, */
      })
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
        <label htmlFor="imageUrl"></label>
        <input
          type="text"
          placeholder="Votre image"
          {...register("imageUrl")}
        />
        {/*  <label htmlFor="imageUrl"></label>
        <input
          type="file"
          name="imageUrl"
          accept=".png, .jpg, .jpeg"
          {...register("imageUrl")}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        /> */}
        <button type="submit">Publier</button>
      </form>
    </div>
  );
}
