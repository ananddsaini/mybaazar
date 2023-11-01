import React from "react";
import "./Home.css";
import Product from "./Product";
import SimpleSlider from "./crousel/imageSlider";
import data from "./data";

function Home({List}) {
  
  return (
    <div className="home">
       <SimpleSlider />
    <div className="home_container">
        
        {
          List.map(function (value) {
            return (<Product 
              itemDetail={value} />)
            })

        }
        </div>
          
    </div>
  );
}

export default Home;
