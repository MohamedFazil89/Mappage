import React from 'react'
import './App.css'
import Mystery from './elements/Mystery.png'
import Quize from './elements/Quize game.png'
import Debug from './elements/Decode.png'
import decodeG from './elements/Decode game.png'
import MysteryG from './elements/Mystery box.png'
import QuizeG from './elements/quize.png'
import RANDOM from './elements/RANDOM.png'
import RANDOMG from './elements/Random match.png'

function Multipalyer() {
  const handleclick = () => {
    var img = document.getElementById("debugImage");
    img.src = decodeG;
  };
  const handleclick1 = () => {
    var img = document.getElementById("debugImage1");
    img.src = MysteryG;
  };
  const handleclick2 = () => {
    var img = document.getElementById("debugImage2");
    img.src = QuizeG;
  }
  const handleclick3 = () => {
    var img = document.getElementById("RANDOM");
    img.src = RANDOMG;
  }
  return (
   <div>
    <section className='section'>
      <section className='text'>
    <span className='solo'>Solo</span><span className='multi'>Multipalyer</span>
    </section>
    <div className='line'></div>
    <img  src={Mystery} className="MystryBox" onClick={handleclick1} id='debugImage1' alt='mys' />
    <img  src={Quize} className="MystryBox" onClick={handleclick2} id='debugImage2' alt='mys' />
    <img  src={Debug} className="MystryBox" onClick={handleclick} id='debugImage' alt='mys' />
    <img  src={RANDOM} className="MystryBox" onClick={handleclick3} id='RANDOM' alt='mys' />
    </section>




   </div>
  );
}

export default Multipalyer;
