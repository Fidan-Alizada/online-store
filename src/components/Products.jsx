import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import styles from "./ProductItem/product.module.css";

const Products = ({ setRoute }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 className={styles.header}>Product List</h1>
      <div className={styles.container}>
        {products.map((product) => (
          <ProductItem item={product} key={product.id} setRoute={setRoute} />
        ))}
      </div>
    </>
  );
};

export default Products;