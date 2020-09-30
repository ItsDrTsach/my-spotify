module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Songs', [
      {
        id: 1,
        album_id: 1,
        artist_id: 1,
        name: 'Can You Feel My Heart',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'BLA BLA',
        youtube_link: 'https://www.youtube.com/watch?v=QJJYpsA5tv8',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 2,
        album_id: 1,
        artist_id: 1,
        name: 'The House of Wolves',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'BLU BLU',
        youtube_link: 'https://www.youtube.com/watch?v=TN4GjxT1NDQ',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 3,
        album_id: 1,
        artist_id: 1,
        name: 'Empire (Let Them Sing)',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'BLE BLE',
        youtube_link: 'https://www.youtube.com/watch?v=sA5hj7wuJLQ',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 4,
        album_id: 1,
        artist_id: 1,
        name: 'Sleepwalking',
        length: '00:02:36',
        track_number: 4,
        lyrics: 'BLO BLO',
        youtube_link: 'https://www.youtube.com/watch?v=lir3dzYIhz0',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 5,
        album_id: 1,
        artist_id: 1,
        name: "Go to Hell, for Heaben's Sake",
        length: '00:02:36',
        track_number: 5,
        lyrics: 'BLI BLI',
        youtube_link: 'https://www.youtube.com/watch?v=C7cczTyQ4iY',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 6,
        album_id: 1,
        artist_id: 1,
        name: 'Shadow Moses',
        length: '00:02:36',
        track_number: 6,
        lyrics: 'BLA BLA',
        youtube_link: 'https://www.youtube.com/watch?v=-k9qDxyxS3s',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 7,
        album_id: 1,
        artist_id: 1,
        name: 'And The Snakes Start to Sing',
        length: '00:02:36',
        track_number: 7,
        lyrics: 'BLA BLA',
        youtube_link: 'https://www.youtube.com/watch?v=mp3UVX6z9L8',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 8,
        album_id: 1,
        artist_id: 1,
        name: 'Seen It All Before',
        length: '00:02:36',
        track_number: 8,
        lyrics: 'BLA BLA',
        youtube_link: 'https://www.youtube.com/watch?v=Q-_JIH466rg',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 9,
        album_id: 1,
        artist_id: 1,
        name: 'Antivist',
        length: '00:02:36',
        track_number: 9,
        lyrics: 'BLA BLA',
        youtube_link: 'https://www.youtube.com/watch?v=9sZ5xTY8OMY',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 10,
        album_id: 1,
        artist_id: 1,
        name: 'Croocked Young',
        length: '00:02:36',
        track_number: 10,
        lyrics: 'BLA BLA',
        youtube_link: 'https://www.youtube.com/watch?v=niGZ1nrVwqE',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 11,
        album_id: 1,
        artist_id: 1,
        name: 'Hospital for Souls',
        length: '00:02:36',
        track_number: 11,
        lyrics: 'BLA BLA',
        youtube_link: 'https://www.youtube.com/watch?v=HjOSydtI38Q',
        upload_at: new Date(),
        created_at: '2013-08-12',
        updated_at: new Date(),
      },
      {
        id: 12,
        album_id: 2,
        artist_id: 2,
        name: 'Critical Acclaim',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=UM9vgmOR9GU',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 13,
        album_id: 2,
        artist_id: 2,
        name: 'Almost Easy',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=Fi_GN1pHCVc',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 14,
        album_id: 2,
        artist_id: 2,
        name: 'Scream',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=Hg7lIkZdTPk',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 15,
        album_id: 3,
        artist_id: 2,
        name: 'Beast and the Harlot',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=7bDg7n-chhU',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 16,
        album_id: 3,
        artist_id: 2,
        name: 'Burn it Down',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=rNOgvZRzwP4',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 17,
        album_id: 3,
        artist_id: 2,
        name: 'Blinded in Chains',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=TYgxM_suaUw',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 18,
        album_id: 4,
        artist_id: 2,
        name: 'Nightmare',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=94bGzWyHbu0',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 19,
        album_id: 4,
        artist_id: 2,
        name: 'Welcome to the Family',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=iJ-WsnaYDCg',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 20,
        album_id: 4,
        artist_id: 2,
        name: 'Danger Line',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=w77ycjbCDbA',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 21,
        album_id: 5,
        artist_id: 3,
        name: 'YDG',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=Csh496MAD_0',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 22,
        album_id: 5,
        artist_id: 3,
        name: "They Don't Call It the South for Nothing",
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=JirzylJbhvY',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 23,
        album_id: 5,
        artist_id: 3,
        name: 'Second & Sebring',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=qSeiG6qMhaI',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 24,
        album_id: 6,
        artist_id: 3,
        name: 'O.G. Loko',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=9T8Q5Ef2Ql4',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 25,
        album_id: 6,
        artist_id: 3,
        name: 'Ben Threw',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=TVvfzz4-sxY',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 26,
        album_id: 6,
        artist_id: 3,
        name: 'Let Live',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=cwtQxD2eI5g',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 27,
        album_id: 7,
        artist_id: 3,
        name: 'Public Service Announcement',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=u-ZLtwQpKE0',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 28,
        album_id: 7,
        artist_id: 3,
        name: 'Feels Like Forever',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=xCGR9wEcqZs',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 29,
        album_id: 7,
        artist_id: 3,
        name: 'Bones Exposed',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=IO-JbFtgeX4',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 30,
        album_id: 8,
        artist_id: 4,
        name: 'Your Betrayal',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=IHgFJEJgUrg',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 31,
        album_id: 8,
        artist_id: 4,
        name: 'Fever',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=lIQjj944jw0',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 32,
        album_id: 8,
        artist_id: 4,
        name: 'The Last Fight',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=gT3zXBd2ksk',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 33,
        album_id: 9,
        artist_id: 4,
        name: 'Scream Aim Fire',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=gqI-6xag8Mg',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 34,
        album_id: 9,
        artist_id: 4,
        name: 'Waking the Demon',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=q2I0ulTZWXA',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 35,
        album_id: 9,
        artist_id: 4,
        name: 'Say Goodnight',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=q2I0ulTZWXA',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 36,
        album_id: 10,
        artist_id: 4,
        name: 'Temper Temper',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=kuF4YSPxL-E',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 37,
        album_id: 10,
        artist_id: 4,
        name: 'Riot',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=IE9YmOprijk',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 38,
        album_id: 10,
        artist_id: 4,
        name: "Tears Don't Fall (Part 2)",
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=gI7uQHPnq_s',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 39,
        album_id: 11,
        artist_id: 5,
        name: 'Heavydirtysoul',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=r_9Kf0D5BTs',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 40,
        album_id: 11,
        artist_id: 5,
        name: 'Stressed Out',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=pXRviuL6vMY',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 41,
        album_id: 11,
        artist_id: 5,
        name: 'Ride',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=Pw-0pbY9JeU',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 42,
        album_id: 12,
        artist_id: 5,
        name: 'Jumpsuit',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=UOUBW8bkjQ4',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 43,
        album_id: 12,
        artist_id: 5,
        name: 'Morph',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=OmL9TqTFIAc',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 44,
        album_id: 12,
        artist_id: 5,
        name: 'Nico and The Niners',
        length: '00:02:36',
        track_number: 9,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=hMAPyGoqQVw',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 45,
        album_id: 13,
        artist_id: 5,
        name: 'Ode To Sleep',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=2OnO3UXFZdE',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 46,
        album_id: 13,
        artist_id: 5,
        name: 'House of Golds',
        length: '00:02:36',
        track_number: 4,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=mDyxykpYeu8',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 47,
        album_id: 13,
        artist_id: 5,
        name: 'Car Radio',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=92XVwY54h5k',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 48,
        album_id: 14,
        artist_id: 6,
        name: 'January 28th',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=1vInvtJ3WxE',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 49,
        album_id: 14,
        artist_id: 6,
        name: 'Wet Dreamz',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=eCGV26aj-mM',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 50,
        album_id: 14,
        artist_id: 6,
        name: 'No Role Modelz',
        length: '00:02:36',
        track_number: 9,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=2RrhwDKw-j4',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 51,
        album_id: 15,
        artist_id: 6,
        name: 'KOD',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=ciya_AQu25o',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 52,
        album_id: 15,
        artist_id: 6,
        name: 'ATM',
        length: '00:02:36',
        track_number: 5,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=vUTI4bPdlgE',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 53,
        album_id: 15,
        artist_id: 6,
        name: 'Motiv8',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=2hMy0rnHQv0',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 54,
        album_id: 16,
        artist_id: 6,
        name: 'Under the Sun',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=eUUuI--jAlM',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 55,
        album_id: 16,
        artist_id: 6,
        name: 'Down Bad',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=lIM1hejXzhw',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 56,
        album_id: 16,
        artist_id: 6,
        name: 'Middle Child',
        length: '00:02:36',
        track_number: 16,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=e8CLsYzE5wk',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 57,
        album_id: 17,
        artist_id: 7,
        name: "Bitch Don't Kill My Vibe",
        length: '00:02:36',
        track_number: 2,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=GF8aaTu2kg0',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 58,
        album_id: 17,
        artist_id: 7,
        name: 'Money Trees',
        length: '00:02:36',
        track_number: 5,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=Iy-dJwHVX84',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 59,
        album_id: 17,
        artist_id: 7,
        name: 'm.A.A.d city',
        length: '00:02:36',
        track_number: 8,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=KKCSwOVudMo',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 60,
        album_id: 18,
        artist_id: 7,
        name: "Wesley's Theory",
        length: '00:02:36',
        track_number: 1,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=l9fN-8NjrvI',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 61,
        album_id: 18,
        artist_id: 7,
        name: 'King Kunta',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=hRK7PVJFbS8',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 62,
        album_id: 18,
        artist_id: 7,
        name: 'Alright',
        length: '00:02:36',
        track_number: 7,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 63,
        album_id: 19,
        artist_id: 7,
        name: 'DNA.',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=NLZRYQMLDW4',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 64,
        album_id: 19,
        artist_id: 7,
        name: 'HUMBLE.',
        length: '00:02:36',
        track_number: 8,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=tvTRZJ-4EyI',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 65,
        album_id: 19,
        artist_id: 7,
        name: 'DUCKWORTH.',
        length: '00:02:36',
        track_number: 14,
        lyrics: 'LYrics',
        youtube_link: 'https://www.youtube.com/watch?v=Dm-foWGDBF0',
        upload_at: new Date(),
        created_at: '2011-12-31',
        updated_at: new Date(),
      },
      {
        id: 66,
        album_id: 20,
        artist_id: 1,
        name: 'Doomed',
        length: '00:02:36',
        track_number: 1,
        lyrics: 'blabla',
        youtube_link: 'https://www.youtube.com/watch?v=5Oc0ja19_GU',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 67,
        album_id: 20,
        artist_id: 1,
        name: 'Happy Song',
        length: '00:02:36',
        track_number: 2,
        lyrics: 'blibli',
        youtube_link: 'https://www.youtube.com/watch?v=GBRAnuT48qo',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 68,
        album_id: 20,
        artist_id: 1,
        name: 'Throne',
        length: '00:02:36',
        track_number: 3,
        lyrics: 'blublu',
        youtube_link: 'https://www.youtube.com/watch?v=Ow_qI_F2ZJI',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 69,
        album_id: 20,
        artist_id: 1,
        name: 'True Friends',
        length: '00:02:36',
        track_number: 4,
        lyrics: 'bleble',
        youtube_link: 'https://www.youtube.com/watch?v=BpmJh2CjSIA',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 70,
        album_id: 20,
        artist_id: 1,
        name: 'Follow You',
        length: '00:02:36',
        track_number: 5,
        lyrics: 'blsbls',
        youtube_link: 'https://www.youtube.com/watch?v=RqQKhSzThyc',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 71,
        album_id: 20,
        artist_id: 1,
        name: 'What You Need',
        length: '00:02:36',
        track_number: 6,
        lyrics: 'popopo',
        youtube_link: 'https://www.youtube.com/watch?v=k48k3BUdcXQ',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 72,
        album_id: 20,
        artist_id: 1,
        name: 'Avalanche',
        length: '00:02:36',
        track_number: 7,
        lyrics: 'blabla',
        youtube_link: 'https://www.youtube.com/watch?v=33hVOJdVw8E',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 73,
        album_id: 20,
        artist_id: 1,
        name: 'Run',
        length: '00:02:36',
        track_number: 8,
        lyrics: 'blabla',
        youtube_link: 'https://www.youtube.com/watch?v=57F_JVBkyks',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 74,
        album_id: 20,
        artist_id: 1,
        name: 'Drown',
        length: '00:02:36',
        track_number: 9,
        lyrics: 'blabla',
        youtube_link: 'https://www.youtube.com/watch?v=TkV5709EG5M',
        upload_at: new Date(),
        created_at: '2012-06-03',
        updated_at: new Date(),
      },
      {
        id: 75,
        album_id: 20,
        artist_id: 1,
        name: 'Blasphemy',
        length: '00:02:36',
        track_number: 10,
        lyrics: 'blabla',
        youtube_link: 'https://www.youtube.com/watch?v=HYd9B6YvIHM',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
      {
        id: 76,
        album_id: 20,
        artist_id: 1,
        name: 'Oh No',
        length: '00:02:36',
        track_number: 11,
        lyrics: 'blabla',
        youtube_link: 'https://www.youtube.com/watch?v=SEp9Kh0M4f0',
        upload_at: new Date(),
        created_at: '2012-02-03',
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Songs', null, {});
  },
};
