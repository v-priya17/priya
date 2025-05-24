import React from 'react'

// import {useEffect} from 'react'

// function Child({Name,Age,gender}) {

//   return (
//     <>
//     <div>Name :{Name}</div>
//     <div>Age: {Age}</div>
//     <div>Gender: {gender}</div>

    
//     </>
//   )
// }


function Child({products}){
  // useEffect(()=>{
  //   console.log("Enter from child component")
  // },[users])



return( 

  <div className='card-container'>
  <div className="row">
    {products.map((product)=>(
      
      <div className="col-3" key={product.id} ><div className="card" style={{width:"18rem"}}>
      <img src={product.images} className="card-img-top" alt="Show it"/>
      <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      </div>
      // {/* // <h1 key={product.id}>{product.title}</h1> */}
    ))}

    </div>
    </div>
)
}


export default Child
