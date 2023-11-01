
import SearchIcon from "@mui/icons-material/Search"
import React, { useState, useEffect } from "react";
import "./Header.css";
import Product from "./Product";

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import data from "./data";
import { List } from "@mui/material";



//function to filter input data
function filterInput(searchInput, List) {
  
  const InputData = function (value) { return (value.title.toLowerCase().includes(searchInput.toLowerCase())) };
  return List.filter(InputData);


}


//creating a local state varible in react
function Header({ List, setList }) {

  const [{ basket, user }, dispatch] = useStateValue();
  const [searchInput, setSearchInput] = useState("");
  

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <button className="logo_btn"
          onClick={function () {

            setList(data);

          }}>
          <img
            className="header__logo"
            src="../mybzrLogo.png"

          /></button>
      </Link>

      <div className="header__search">

        <input
          className="header__searchInput"
          type="text"
          placeholder="Search"
          value={searchInput}

          onChange={(e) => //onChange fucntion autoamatically gets an event property
            setSearchInput(e.target.value)} //e.target.value is value which is written in serach box.
          onKeyDown={function (event) {
              //need to filter the data of search input
              if (event.key === "Enter") {
                const filteredData2 = filterInput(searchInput, List)
                //update the state of List(item(data))
                setList(filteredData2)
              }
            }}
        />

        <button
          className="header__searchIcon"
          onClick={function () {
            //need to filter the data of search input
            const filteredData1 = filterInput(searchInput, List)
            //update the state of List(item(data))
            setList(filteredData1);
           }}
         
        >
          <SearchIcon />
        </button>


      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/offers">
        <div className="header__option">
          <span className="header__optionLineOne">Offers</span>
          <span className="header__optionLineTwo">For You</span>
        </div>
       </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
