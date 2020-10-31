import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./guitar.png";
import person from "./person.png";
import "./navbar.css";
import Cookies from "js-cookie";
import { UserContext } from "../UserContext";
import network from "../../network/network";
function Navbar() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const handleLogout = async () => {
    network
      .post("users/logout", { token: Cookies.get("refreshToken") })
      .then((res) => {
        history.push("/");
        setUser(null);
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        Cookies.remove("name");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__link">
          <img className="navbar__logo" src={logo} alt="music-logo" />
          <p>music Fullstack project</p>
        </Link>
      </div>
      <div className="navbar__container">
        <Link to="/search" className="navbar__link">
          <p>Search</p>
        </Link>
        <Link to="/add/song" className="navbar__link" disabled>
          <p>Add</p>
        </Link>
      </div>
      <div className="navbar__container">
        <button className="navbar__logout" onClick={handleLogout}>
          logout
        </button>
        <Link to="/" className="navbar__link navbar__link--end">
          <img className="navbar__logo" src={person} alt="music-logo" />
          <p>Hello {Cookies.get("name") || "Guest"}</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
