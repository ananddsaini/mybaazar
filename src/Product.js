import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

 function Product(props) {        //you can also write fucntion Product({itemDetail}) or itemDetail={title,pride }
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
       id: props.itemDetail.id,
        title: props.itemDetail.title,
        image:props.itemDetail. image,
        price:props.itemDetail. price,
        rating:props.itemDetail. rating,
      },
    });
  };

  return (
    <div className="product">
      
      <div className="product__info">
        <a className="title" href="">{props.itemDetail.title}</a>
        
        <p className="product__price">
          <small>$</small>
          <strong>{props.itemDetail.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.itemDetail.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.itemDetail.image} alt="image not found" />

      

      <button className="add_btn" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
