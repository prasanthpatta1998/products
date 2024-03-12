import React from "react";
import { Link } from "react-router-dom";
import "./products.css";

const SingleProduct = (props) => {
  const { product } = props;

  return (
    <Link to={`product/${product.id}`} className="link-element">
      <div className="product">
        <div className="products-image">
        <img style={{width:'50%', height: '31vh'}} src={product?.image} alt={product?.title} />
        </div>
        <h3>{product.title}</h3>
        <strong>Rs.{product.price}</strong>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p>
            Available : <strong>{product.rating.count}</strong>
          </p>
          <p className="rating">
            {product.rating.rate} <span>&#9733;</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
