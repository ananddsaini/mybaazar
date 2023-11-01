import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./Orders";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import data from "./data";
import Payment from "./Payment";
import Footer from "./Footer";



function App() {
  const [{ }, dispatch] = useStateValue();
const[Item,setItem]=useState(data);
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {          //use to track history of 'who has logged in'.
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/orders" element={<><Header /><Orders /></>} />
         
          <Route exact path="/login" element={<Login />} />
          

          <Route exact path="/checkout" element={<> <Header /> <Checkout /></>} />
          
          <Route exact path="/" element={<><Header List={Item} setList={setItem} /><Home List={Item}  setList={setItem}/> <Footer/></>} />
          <Route exact path="/payment"  element={<><Header/> <Payment/> </>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;