import './App.css'
import React,{useEffect,useState} from 'react'
import Login from './Login'
import Signup from './Signup'
import Product from './Product'
import Productid from './Productid'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function App() {
  
   const [users,setUsers] = useState([])

   function DataAdd(){
      const Data =  fetch("https://dummyjson.com/products")
      .then((Data) =>  Data.json())
      .then((data1)=> setUsers(data1.products))
      .catch((err)=>console.log("err",err))
  }
  useEffect(()=>{
    DataAdd()
  },[])
  console.log(users)



  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/product' element={<Product products={users}/>}></Route>
        <Route path='/product/:id' element={<Productid />}></Route>
        
      </Routes>
    </Router>
    
    </>
  )
}

export default App
