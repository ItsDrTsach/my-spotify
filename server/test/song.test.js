//import server instance
const server = require('../server');
//import testing library
const request = require('supertest');
// import ORM model
const { Song } = require('../models');
const userRouter = require('../Routes/user');

//create a mock song
const songMock = {
  name: 'fake song mock',
  albumId: 1,
  artistId: 1,
};
const userMock = {
  email: 'fake@gmail.com',
  password: '123456',
};

//define a test groupS
let header;
describe('Song endpoint', () => {
  //close the temporary connection to the Database after test is over
  // beforeAll(async () => {
  //   const response = await request(server)
  //     .post('users/login')
  //     .send(userMock)
  //     .expect(200);
  //   header = response.header;
  //   console.log(header);
  // });

  afterAll(async () => {
    await Song.destroy({ truncate: true, force: true });
    await server.close();
    //let jest know that the test is over
    done();
  });
  //reset all data before each test suit
  beforeEach(async () => {
    await Song.destroy({ truncate: true, force: true });
  });
  it('can add a song ', async () => {
    //send a post request with the mock i created
    expect(true).toBe(true);
    const newSong = await request(server).post('api/v1/song').send(songMock);
    expect(newSong.name).toBe(songMock.name);
  });
});
