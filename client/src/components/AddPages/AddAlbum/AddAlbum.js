import React from "react";
import "./addAlbum.css";
import network from "../../../network/network";
import { useForm } from "react-hook-form";

function AddAlbum() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      //send http to send data to data base...when added display a proper message
      const { name, artistId, coverImg } = data;
      const body = {
        name,
        artistId,
        coverImg,
      };
      const { message } = await network("post", "api/album", body);
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="addAlbum" onSubmit={handleSubmit(onSubmit)}>
      <div className="addAlbum__spacer"></div>
      <h1>Add an album to our Data base</h1>
      <div className="addAlbum__row">
        <label>name</label>
        <input
          className="addAlbum__input"
          name="name"
          ref={register({ required: true })}
        />
      </div>
      {errors.name && <p className="addAlbum__error">This is required</p>}

      <div className="addAlbum__row">
        <label>artist id</label>
        <input
          className="addAlbum__input"
          name="artistId"
          ref={register({ required: true })}
        />
      </div>
      {errors.artistId && <p className="addAlbum__error">This is required</p>}
      <div className="addAlbum__row">
        <label>description</label>
        <input
          className="addAlbum__input"
          name="description"
          ref={register({ required: true })}
        />
      </div>
      {errors.description && (
        <p className="addAlbum__error">This is required</p>
      )}
      <div className="addAlbum__row">
        <label>coverImg</label>
        <input
          className="addAlbum__input"
          name="coverImg"
          ref={register({ required: true })}
        />
      </div>
      {errors.coverImg && <p className="addAlbum__error">This is required</p>}

      <input type="submit" className="addAlbum__submit" />
    </form>
  );
}

export default AddAlbum;
