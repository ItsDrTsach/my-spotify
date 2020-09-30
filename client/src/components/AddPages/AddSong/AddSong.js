import React from 'react';
import './addSong.css';
import network from '../../../network/network';
import { useForm } from 'react-hook-form';

function AddSong() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const {
        name,
        artistId,
        albumId,
        trackNumber,
        length,
        lyrics,
        youtubeLink,
      } = data;
      const body = {
        name,
        artistId,
        albumId,
        trackNumber,
        length,
        lyrics,
        youtubeLink,
      };
      await network('post', 'api/song/', body);
    } catch (error) {
      console.log(error);
    }
    //send http to send data to data base...when added display a proper message
  };

  return (
    <form className='addSong' onSubmit={handleSubmit(onSubmit)}>
      <div className='addSong__spacer'></div>
      <h1>Add a Song to our Data base</h1>
      <div className='addSong__row'>
        <label>song name</label>
        <input
          className='addSong__input'
          name='name'
          ref={register({ required: true })}
        />
      </div>
      {errors.name && <p className='addSong__error'>This is required</p>}
      <div className='addSong__row'>
        <label>albumId</label>
        <input
          className='addSong__input'
          name='albumId'
          ref={register({ required: true})}
        />
      </div>
      {errors.albumId && <p className='addSong__error'>This is required</p>}
      <div className='addSong__row'>
        <label>artistId</label>
        <input
          className='addSong__input'
          name='artistId'
          ref={register({ required: true})}
        />
      </div>
      {errors.artistId && <p className='addSong__error'>This is required</p>}
      <div className='addSong__row'>
        <label>youtubeLink</label>
        <input
          className='addSong__input'
          name='youtubeLink'
          ref={register({ required: true})}
        />
      </div>
      {errors.youtubeLink && <p className='addSong__error'>This is required</p>}
      <div className='addSong__row'>
        <label>track number</label>
        <input
          className='addSong__input'
          name='trackNumber'
          ref={register({ required: true})}
        />
      </div>
      {errors.trackNumber && <p className='addSong__error'>This is required</p>}
      <div className='addSong__row'>
        <label>lyrics</label>
        <input
          className='addSong__input'
          name='lyrics'
          ref={register({ required: true})}
        />
      </div>
      {errors.lyrics && <p className='addSong__error'>This is required</p>}
      <input type='submit' className='addSong__submit' />
    </form>
  );
}

export default AddSong;
