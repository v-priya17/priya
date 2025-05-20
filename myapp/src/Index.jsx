import React from 'react'
import flower from './flower.jpg'
// import './App.css'
import sound from './audio.mp3'
import video from './vedio.mp4'

function index() {
  return (
    <div>
        <h3>Flavour</h3>
        <img className="flower" src={flower} alt="flower" /><br />
        <audio src={sound} alt="no music" controls></audio><br />
        <video className="video" src={video} controls></video>
        
    </div>
    
  )
}

export default index