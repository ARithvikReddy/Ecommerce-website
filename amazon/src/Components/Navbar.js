import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { useStateValue } from "../Stateprovider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [{ basket, user },dispatch] = useStateValue();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({
      type:'SET_USER',
      item:null
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };

  return (
    <nav className="navbar navbar-dark bg-dark" onSubmit={handleSubmit}>
      <div className="container">
        <a className="navbar-brand" href="/">
          Amazon
        </a>
        <form className="d-flex text-white">
          <div className="d-flex bg-dark">
            <i className="fa-solid fa-magnifying-glass text-white d-inline-block align-text-top me-2 mt-2"></i>
            <input
              className="form-control me-2"
              style={{ width: "300px" }}
              type="search"
              id="search"
              placeholder="Search..."
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
          {user ? (
            <div className="mt-2 text-white">
              <span style={{ marginRight: "1rem", marginLeft: "2rem" }}>
                Welcome, {user.email.split("@")[0]}
              </span>
              <button
            style={{
              marginLeft: "2rem",
              backgroundColor: "black",
              color: "white",
              border:'none'
            }}
            onClick={() => handleLogout()} // Replace with your logout function
          >
            Logout
          </button>{" "}
            </div>
          ) : (
            <>
              <a
                href="/signin"
                className="mt-2 text-white"
                style={{ marginLeft: "2rem", textDecoration: "none" }}
              >
                Sign in
              </a>
              <a
                href="/signup"
                className="mt-2 text-white"
                style={{ marginLeft: "2rem", textDecoration: "none" }}
              >
                Sign up
              </a>
            </>
          )}
          <Badge
            badgeContent={basket.length}
            color="primary"
            className="mt-3"
            style={{ marginLeft: "2rem", cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <i
              className="fa-solid fa-cart-shopping"
              style={{ cursor: "pointer" }}
            ></i>
          </Badge>
          
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
