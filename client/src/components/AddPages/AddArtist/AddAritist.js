import React from "react";
import "./addArtist.css";
import { useForm } from "react-hook-form";
import network from "../../../network/network";

function AddArtist() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {},
  });
  const onSubmit = async (data) => {
    try {
      console.table(data)
      await network(
        "post",
        "api/artist/",
        data
      );
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <form className="addArtist" onSubmit={handleSubmit(onSubmit)}>
      <div className="addArtist__spacer"></div>
      <h1>Add an Artist to our Data base</h1>
      {/* {message && <h1>${message}</h1>} */}
      <div className="addArtist__row">
        <label>artist name</label>
        <input
          className="addArtist__input"
          name="name"
          ref={register({ required: true })}
        />
      </div>
      {errors.artist_name && (
        <p className="addArtist__error">This is required</p>
      )}
      <div className="addArtist__row">
        <label>cover_img</label>
        <input
          className="addArtist__input"
          name="coverImg"
          ref={register({ required: true })}
        />
      </div>
      {errors.cover_img && <p className="addArtist__error">This is required</p>}
      <div className="addArtist__row">
        <label>description</label>
        <input
          className="addArtist__input"
          name="description"
          ref={register({ required: true })}
        />
      </div>
      {errors.description && (
        <p className="addArtist__error">This is required</p>
      )}
      <input type="submit" className="addArtist__submit" />
    </form>
  );
}

export default AddArtist;
