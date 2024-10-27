

// import React, { useEffect, useState } from "react";
// import "./styles.css";
// const Loadmore = () => {
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);

//   async function fetchProducts() {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/products?limit=20&skip=${count === 0? 0:count *20 }`
//       );
//       const data = await response.json();
//       setProducts([...products, ...data.products]);
//       setLoading(false);
//       console.log(data)
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return <div className="container"></div>;
// };

// export default Loadmore;
import React, { useEffect, useState } from "react";
import "./styles.css";

const Loadmore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <p className="rating" >{product.rating}</p>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.warrantyInformation}</p>
            <p className="category"> {product.category}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        disabled={loading}
        className="load-more-btn"
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default Loadmore;
