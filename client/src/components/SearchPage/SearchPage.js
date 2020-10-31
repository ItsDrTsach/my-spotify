import React, { useEffect, useState } from "react";
import SquareRow from "../shared_components/squareRow/SquareRow";
import "./search.css";
import network from "../../network/network";
function SearchPage() {
  const [searchResults, setSearchResults] = useState(Array(4).fill([]));
  const [query, setQuery] = useState("");
  useEffect(() => {
    (async () => {
      try {
        let resultsFromServer = await Promise.all([
          network.get(`api/v1/song/byName/${query}`),
          network.get(`api/v1/artist/byName/${query}`),
          network.get(`api/v1/album/byName/${query}`),
          network.get(`api/v1/playlist/byName/${query}`),
        ]);
        setSearchResults(resultsFromServer);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);
  console.log({ searchResults });
  return (
    <div className="searchPage">
      <input
        onChange={(e) => setQuery(e.target.value)}
        id="searchInput"
        className="searchPage__input"
        placeholder="type songs,playlists, artists or albums here...."
      ></input>
      {query !== "" && (
        <div className="searchPage__row">
          {searchResults[0].length !== 0 ? (
            <>
              <p className="searchPage__rowTitle">{`${query} in songs`}</p>
              <SquareRow arrayOfElements={searchResults[0]} type="song" />)
            </>
          ) : (
            <p className="searchPage__rowTitle">{`no results for ${query} in songs`}</p>
          )}
        </div>
      )}
      {query !== "" && (
        <div className="searchPage__row">
          {searchResults[1].length !== 0 ? (
            <>
              <p className="searchPage__rowTitle">{`${query} in artists`}</p>
              <SquareRow arrayOfElements={searchResults[1]} type="artist" />)
            </>
          ) : (
            <p className="searchPage__rowTitle">{`no results for ${query} in artists`}</p>
          )}
        </div>
      )}
      {query !== "" && (
        <div className="searchPage__row">
          {searchResults[2].length !== 0 ? (
            <>
              <p className="searchPage__rowTitle">{`${query} in albums`}</p>
              <SquareRow arrayOfElements={searchResults[2]} type="album" />)
            </>
          ) : (
            <p className="searchPage__rowTitle">{`no results for ${query} in albums`}</p>
          )}
        </div>
      )}
      {query !== "" && (
        <div className="searchPage__row">
          {searchResults[3].length !== 0 ? (
            <>
              <p className="searchPage__rowTitle">{`${query} in playlists`}</p>
              <SquareRow arrayOfElements={searchResults[3]} type="playlist" />)
            </>
          ) : (
            <p className="searchPage__rowTitle">{`no results for ${query} in playlists`}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
