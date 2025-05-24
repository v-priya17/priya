// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Grill from './grill.jpg'
import Pasta from './pasta.jpg'
import Burger from './Burger.jpg'

function App() {

  return (
    <>
      <div>
        {/* <form action="">
          <label htmlFor="">Username</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="number" name="" id="" />
        </form> */}

        {/* <!DOCTYPE html> */}
{/* <html lang="en"> */}
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Crunchy Bites</title>
  <link rel="stylesheet" href="styles.css" />
</head>
{/* <body> */}
  <header>
    <nav>
      <h1><u>Crunchy</u> <u>Bites</u></h1>
      <ul>
        <li><a href="#menu">Menu</a></li><br />
        <li><a href="#about">About</a></li><br />
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div class="hero">
      <h2>Welcome to Crunchy Bites</h2>
      <p>Fresh, tasty meals every day</p>
    </div>
  </header>

  <section id="menu">
    <h2>Our Menu</h2>
    <div id="menu-items">
      <div class="menu-item">
        <img src={Grill} alt="" />
        <h3>Grilled Chicken</h3>
        <p>$12.99</p>
      </div>
      <div class="menu-item">
        <img src={Pasta} style={{width:'220px',height:'150px'}} alt="" />
        <h3>Veggie Pasta</h3>
        <p>$10.49</p>
      </div>
      <div class="menu-item">
        <img src={Burger} alt="" />
        <h3>Burger</h3>
        <p>$11.99</p>
      </div>
    </div>
  </section>

  <section id="about">
    <h2>About Us</h2>
    <p>We are a local restaurant serving freshly made dishes with the finest ingredients.</p>
  </section>

  <section id="contact">
    <h2>Contact Us</h2>
    <form onsubmit="submitForm(event)">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <p id="response"></p>
  </section>

  <footer>
    <p>© 2025 Delicious Bites. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
{/* </body>
</html> */}

      </div>
    </>
  )
}

export default App
