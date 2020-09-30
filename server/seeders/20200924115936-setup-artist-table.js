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
    await queryInterface.bulkInsert('Artists', [
      {
        id: 1,
        name: 'Bring me The Horizon',
        description: 'artist description',
        cover_img: 'https://i.pinimg.com/736x/3e/01/16/3e01165a11fd19d65338b088d132b531.jpg',
        uploaded_at: new Date(),
        created_at: '2015-07-08',
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Avenged Sevenfold',
        description: 'artist description',
        cover_img:
          'https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/414781',
        uploaded_at: new Date(),
        created_at: '2015-07-08',
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'Of Mice & Men',
        description: 'artist description',
        cover_img:
          'https://images.kerrangcdn.com/Austin-Carlile-Of-Mice-And-Men.jpg?auto=compress&fit=crop&w=1200',
        uploaded_at: new Date(),
        created_at: '2015-07-08',
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'Bullet For My Valentine',
        description: 'artist description',
        cover_img:
          'https://www.exposedmagazine.co.uk/wp-content/uploads/2016/11/bullet-for-my-valentine.jpg',
        uploaded_at: new Date(),
        created_at: '2015-07-08',
        updated_at: new Date(),
      },
      {
        id: 5,
        name: '21 Pilots',
        description: 'artist description',
        cover_img:
          'https://arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/SA3DSTDIINFITMPNFFARARYCGE.jpg',
        uploaded_at: new Date(),
        created_at: '2015-07-08',
        updated_at: new Date(),
      },
      {
        id: 6,
        name: 'J cole',
        description: 'artist description',
        cover_img: 'https://static.onecms.io/wp-content/uploads/sites/20/2020/07/21/j-cole.jpg',
        uploaded_at: new Date(),
        created_at: '2015-07-08',
        updated_at: new Date(),
      },
      {
        id: 7,
        name: 'Kendrick Lamar',
        description: 'artist description',
        cover_img: 'https://compote.slate.com/images/d9a99820-5841-4b90-bc20-cb3b86af7f65.jpg',
        uploaded_at: new Date(),
        created_at: '2015-07-08',
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
    await queryInterface.bulkDelete('Artists', null, {});
  },
};
