import Index from "./index"
import './App.css'
import background from './chakra.jpg'
import Form from './form'


function App() {


  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <h2>Ice Cream</h2>
         <Form/>
    </div>
    
  )
}

export default App
