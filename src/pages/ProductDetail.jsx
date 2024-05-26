import axios from "axios";
import { useEffect, useState } from "react";
import "./productDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const getProduct = async () => {
    try {
      const productId = window.location.hash.replace("#", "");
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      <div className="header" onClick={() => setIsExpanded(!isExpanded)}>
        <img src={product.image} alt={product.title} className="imageIcon" />
        <h2 className="title">{product.title}</h2>
        <button className="expandButton">
          {isExpanded ? "Add to Busket" : "Expand"}
        </button>
      </div>
      {isExpanded && (
        <div className="detailsContainer">
          <img src={product.image} alt={product.title} className="image" />
          <p className="description">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <p className="category">Category: {product.category}</p>
          <p className="rating">
            Rating: {product.rating?.rate} ({product.rating?.count} reviews)
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
