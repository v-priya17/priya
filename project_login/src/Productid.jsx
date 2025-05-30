import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      {product.map((item)=>(
        <>
        <h2 key={item.id}>{item.title}</h2>
      {/* <img src={product.image}  /> */}
      <img src={item.images} className="card-img-top" alt="Show it" style={{width:"400px"}}/>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Rating: {item.rating}</p>
      {/* <button>buy now</button> */}
        </>
                
      ))}
    
    </div>
  );
}

export default ProductDetail;
