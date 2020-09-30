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
    await queryInterface.bulkInsert('Albums', [
      {
        id: 1,
        artist_id: 1,
        name: 'Sempiternal',
        cover_img:
          'https://images-na.ssl-images-amazon.com/images/I/91Z82BKqrSL._AC_SL1500_.jpg',
        created_at: '2013-03-31',
        updated_at: new Date(),
      },
      {
        id: 2,
        artist_id: 2,
        name: 'Avenged Sevenfold',
        cover_img:
          'https://upload.wikicover_img.org/wikipedia/he/7/76/Avenged_Sevenfold_cover_2007.jpg',
        created_at: '2007-08-13',
        updated_at: new Date(),
      },
      {
        id: 3,
        artist_id: 2,
        name: 'City of Evil',
        cover_img:
          'https://upload.wikicover_img.org/wikipedia/he/7/7b/City_of_Evil_album_cover.jpg',
        created_at: '2008-06-05',
        updated_at: new Date(),
      },
      {
        id: 4,
        artist_id: 2,
        name: 'Nightmare',
        cover_img:
          'https://cdn.shopify.com/s/files/1/0042/9119/9076/products/product-image-981338485_650x.jpg?v=1571731781',
        created_at: '2010-08-05',
        updated_at: new Date(),
      },
      {
        id: 5,
        artist_id: 3,
        name: 'Of Mice & Men',
        cover_img:
          'https://i.pinimg.com/originals/69/b8/5e/69b85e03f4570ba9bd87b090d775b396.jpg',
        created_at: '2012-03-06',
        updated_at: new Date(),
      },
      {
        id: 6,
        artist_id: 3,
        name: 'The Flood',
        cover_img:
          'https://upload.wikicover_img.org/wikipedia/en/3/35/Of_Mice_%26_Men_The_Flood_cover.jpg',
        created_at: '2013-04-22',
        updated_at: new Date(),
      },
      {
        id: 7,
        artist_id: 3,
        name: 'Restoring Force',
        cover_img:
          'https://upload.wikicover_img.org/wikipedia/en/b/b7/Restoring_Force.jpg',
        created_at: '2014-01-15',
        updated_at: new Date(),
      },
      {
        id: 8,
        artist_id: 4,
        name: 'Fever',
        cover_img:
          'https://images-na.ssl-images-amazon.com/images/I/51-tHNr5nRL.jpg',
        created_at: '2010-02-09',
        updated_at: new Date(),
      },
      {
        id: 9,
        artist_id: 4,
        name: 'Scream Aim Fire',
        cover_img:
          'https://images-na.ssl-images-amazon.com/images/I/81QKcS%2BvqcL._SL1500_.jpg',
        created_at: '2008-02-05',
        updated_at: new Date(),
      },
      {
        id: 10,
        artist_id: 4,
        name: 'Temper Temper',
        cover_img:
          'https://images-na.ssl-images-amazon.com/images/I/71rzjxT3xrL._SL1500_.jpg',
        created_at: '2013-08-05',
        updated_at: new Date(),
      },
      {
        id: 11,
        artist_id: 5,
        name: 'Blurryface',
        cover_img:
          'https://i.pinimg.com/originals/7c/77/d0/7c77d047d98d3e3699efd08993bc6e1e.png',
        created_at: '2015-04-05',
        updated_at: new Date(),
      },
      {
        id: 12,
        artist_id: 5,
        name: 'Trench',
        cover_img:
          'https://upload.wikicover_img.org/wikipedia/he/e/ef/TOP_Trench_Album_Cover.jpg',
        created_at: '2018-04-22',
        updated_at: new Date(),
      },
      {
        id: 13,
        artist_id: 5,
        name: 'Vessel',
        cover_img:
          'https://upload.wikicover_img.org/wikipedia/he/2/20/Vessel_by_Twenty_One_Pilots.jpg',
        created_at: '2013-11-10',
        updated_at: new Date(),
      },
      {
        id: 14,
        artist_id: 6,
        name: '2014 Forest Hills Drive',
        cover_img:
          'https://www.beatnik.co.il/wp-content/uploads/2019/01/J.-COLE-2014-FOREST-HILLS-DRIVE.jpg',
        created_at: '2014-08-17',
        updated_at: new Date(),
      },
      {
        id: 15,
        artist_id: 6,
        name: 'KOD',
        cover_img:
          'https://upload.wikicover_img.org/wikipedia/he/d/d3/JColeKOD.jpg',
        created_at: '2018-12-24',
        updated_at: new Date(),
      },
      {
        id: 16,
        artist_id: 6,
        name: 'Revenge Of The Dreams III',
        cover_img:
          'https://images-na.ssl-images-amazon.com/images/I/61KvrR9sBhL._SL1200_.jpg',
        created_at: '2019-01-31',
        updated_at: new Date(),
      },
      {
        id: 17,
        artist_id: 7,
        name: 'good kid, m.A.A.d city',
        cover_img:
          'https://www.helicon.co.il/wp-content/uploads/2020/02/0602537192267.jpg',
        created_at: '2012-06-07',
        updated_at: new Date(),
      },
      {
        id: 18,
        artist_id: 7,
        name: 'To Pimp A Butterfly',
        cover_img:
          'https://www.beatnik.co.il/wp-content/uploads/2018/07/KENDRICK-PIMP.jpg',
        created_at: '2015-02-11',
        updated_at: new Date(),
      },
      {
        id: 19,
        artist_id: 7,
        name: 'DAMN.',
        cover_img:
          'https://www.helicon.co.il/wp-content/uploads/2017/04/klDAMN-600x600.jpg',
        created_at: '2010-08-05',
        updated_at: new Date(),
      },
      {
        id: 20,
        artist_id: 1,
        name: "That's the Spirit",
        cover_img:
          'https://images-na.ssl-images-amazon.com/images/I/516HOT7Vj3L._AC_SX466_.jpg',
        created_at: '2015-07-23',
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
    await queryInterface.bulkDelete('Albums', null, {});
  },
};
