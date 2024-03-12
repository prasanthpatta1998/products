import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpecificProduct = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductData({ ...data });
    };

    getProductDetails();
  }, [id]); 

  return (
    <>
      <h1>Individual Product</h1>
      {Object.keys(productData)?.length > 0 ? (
        <div className="product-item">
          <div className="product-image">
            <img
              src={productData.image}
              alt={productData.title}
              className="image"
            />
          </div>
          <div style={{width: '78%'}}>
            <h3>{productData.title}</h3>
            <strong>{productData.price}</strong>
            <p>{productData.description}</p>
            <p>
              Available: <strong>{productData?.rating?.count}</strong>
            </p>
            <p className="rating">
              {productData.rating.rate}
              <span>&#9733;</span>
            </p>
          </div>
        </div>
      ) : (
        <p>...Loading</p>
      )}
    </>
  );
};

export default SpecificProduct;
