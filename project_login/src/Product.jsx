import React from 'react'
import { Link } from 'react-router-dom'

function Product({products}){
  // const handleproduct()=>{

  // }
 
return( 

  <div className='card-container'>
  <div className="row">
    {products.map((product)=>(
      
      <div className="col-3" key={product.id} >
      <div className="card" style={{width:"18rem"}}>
      <img src={product.images} className="card-img-top" alt="Show it"/>
      <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-price">${product.price}</p>
      <p className='card-rating'>rate:{product.rating}</p>
      {/* <button onClick={handleproduc} href="#" className="btn btn-primary">view product</button> */}
      <Link to={`/product/${product.id}`}>View Details</Link>

      </div>
      </div>
      </div>
      // {/* // <h1 key={product.id}>{product.title}</h1> */}
    ))}

    </div>
    </div>
)
}


export default Product
