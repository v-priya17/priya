import "./App.css";
import Child from "./Child";
import { useState, useEffect } from "react";
import Mapp from "./Mapp";
import audio from "./audio.mp3";
import Name1 from "./Name1";
import Name from "./Name";
import Data from "./Data";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 2);
  };

  const loger = [
    { id: 1, name: "priya", depo: "cs", year: 2 },
    { id: 2, name: "deepika", depo: "ca" },
    { id: 3, name: "dhivya", depo: "com" },
    { id: 4, name: "dhina", depo: "ai" },
  ];

  // state in event
  const [name, setName] = useState("");
  function handClick() {
    alert("Call from event");
  }

  // prop pass from parent to child
  const [num, setNum] = useState("");

  // child to parent
  const [nm, setNme] = useState("");
  function haClick(data) {
    setNme(data);
  }
  //useefffect in component mount

  // const [datum, setDatum] = useState([]);

  // function add(){
  //     const Datas =  fetch("https://dummyjson.com/products")
  //     .then((data) =>  data.json())
  //     .then((data1)=> setDatum(data1.products))
  //     .catch((err)=>console.log("err",err))
  // }

  // useEffect(() => {
  //    add()
  //    },[]);
  // console.log(datum);


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
      <Name1 num={num} />
      <Name setNum={setNum} />

      <button onClick={handClick}>Event trigger</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>hello {name}</p>
      <hr />

      {/* props */}
      {/* <Child Name={"Justin"} Age={24} gender={"male"} /> */}
      <hr></hr>
      {/* <Child Name={"Roman reigns"} Age={44} gender={"male"} /> */}
      <hr />

      {/* map function return as array */}
      <Mapp login={loger} />
      <hr />

      {/* state */}
      <div>{count}</div>
      <button onClick={handleClick}>Upgrade Me</button>

      <button onClick={() => setCount(count - 1)}>Degrade Me</button>
      <br />
      <hr />

      <audio src={audio} controls></audio>
      <hr />
      {/* 
    <div className='container'>
    <div className='row at 8'> */}
      {/* <div className='col-12 text-center at-5'> */}
      <div>
        <Data onButtonClick={haClick} nme={nm} />
        <div>{nm}</div>
        {/* { isfalse ? <h4>the condition is true</h4> : <p>the condition is false</p>} */}
      </div>
   
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/child" element={<Child products={users}/>}></Route>
      </Routes>
    </Router>
    </>

    
  );
}

export default App;
