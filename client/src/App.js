/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SongPage from "./components/SongPage/SongPage";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
// import FourOFour from './components/404/FourOfour';
import AlbumPage from "./components/AlbumPage/AlbumPage";
import ArtistPage from "./components/ArtistPage/ArtistPage";
import AddSong from "./components/AddPages/AddSong/AddSong";
import AddNav from "./components/AddPages/AddNav/AddNav";
import AddArtist from "./components/AddPages/AddArtist/AddAritist";
import AddPlaylist from "./components/AddPages/AddPlaylist/AddPlaylist";
import AddAlbum from "./components/AddPages/AddAlbum/AddAlbum";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { UserContext } from "./components/UserContext";
import network from "./network/network";
import Cookies from "js-cookie";
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userContextValue = useMemo(() => ({ user, setUser }), [user]);
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    (async () => {
      if (accessToken) {
        try {
          const data = await network.get("/users/validateToken");
          setUser(data);
        } catch (error) {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={userContextValue}>
      <Router>
        <div className="app">
          {!user ? (
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          ) : (
            <>
              <Navbar />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/search" exact component={SearchPage} />
                <Route path="/artist/:artistId" exact component={ArtistPage} />
                <Route path="/song/:songId" exact component={SongPage} />
                <Route path="/album/:albumId" exact component={AlbumPage} />
                <Route
                  path="/playlist/:playlistId"
                  exact
                  component={PlaylistPage}
                />
                <Route path="/add/song" exact>
                  <AddNav />
                  <AddSong />
                </Route>
                <Route path="/add/album" exact>
                  <AddNav />
                  <AddAlbum />
                </Route>
                <Route path="/add/artist" exact>
                  <AddNav />
                  <AddArtist />
                </Route>
                <Route path="/add/playlist" exact>
                  <AddNav />
                  <AddPlaylist />
                </Route>
                {/* <Route path="/" component={FourOFour} /> */}
              </Switch>
            </>
          )}
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
