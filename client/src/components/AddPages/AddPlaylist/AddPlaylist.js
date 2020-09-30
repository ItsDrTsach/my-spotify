import React from "react";
import "./addPlaylist.css";
import { useForm } from "react-hook-form";
import network from "../../../network/network";

function AddPlaylist() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const { name, coverImg, description, likes } = data;
      const body = {
        name,
        coverImg,
        description,
        likes,
      };
      await network(
        "post",
        "api/playlist/",
        body
      );
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form className="addPlaylist" onSubmit={handleSubmit(onSubmit)}>
      <div className="addPlaylist__spacer"></div>
      <h1>Add a Playlist to our Data base</h1>
      <div className="addPlaylist__row">
        <label>playlist name</label>
        <input
          className="addPlaylist__input"
          name="name"
          ref={register({ required: true })}
        />
      </div>
      {errors.name && <p className="addPlaylist__error">This is required</p>}
      <div className="addPlaylist__row">
        <label>description</label>
        <input
          className="addPlaylist__input"
          name="description"
          ref={register({ required: true })}
        />
      </div>
      {errors.description && (
        <p className="addPlaylist__error">This is required</p>
      )}


      <div className="addPlaylist__row">
        <label>coverImg</label>
        <input
          className="addPlaylist__input"
          name="coverImg"
          ref={register({ required: true })}
        />
      </div>
      {errors.coverImg && (
        <p className="addPlaylist__error">This is required</p>
      )}
      <input type="submit" className="addPlaylist__submit" />
    </form>
  );
}

export default AddPlaylist;
