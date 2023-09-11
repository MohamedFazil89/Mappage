import React, { useState } from 'react';
import './App.css';
import Mystery from './elements/Mystery.png';
import MysteryG from './elements/Mystery box.png';
import Quize from './elements/Quize game.png';
import QuizeG from './elements/quize.png';
import RANDOM from './elements/RANDOM.png';
import RANDOMG from './elements/Random match.png';
import Debug from './elements/Debug.png';
import DebugG from './elements/Debug game.png';
import Challenge from './elements/challenge.png';
import Decode from './elements/Decode.png';

function App() {
  const [challengeI, setChallengeI] = useState(Mystery);
  const [decoded, setDecode] = useState(Quize);
  const [isMultiplayer, setIsMultiplayer] = useState(false);
  const [debugImage, setDebugImage] = useState(Debug);
  const [mysteryImage, setMysteryImage] = useState(Mystery);
  const [quizeImage, setQuizeImage] = useState(Quize);
  const [randomImage, setRandomImage] = useState(RANDOM);

  const handeltextclick = () => {
    setIsMultiplayer((prevIsMultiplayer) => !prevIsMultiplayer);
    setChallengeI((prevSrc) => (prevSrc === Mystery ? Challenge : Mystery));
    setDecode((prevSrc) => (prevSrc === Quize ? Decode : Quize));
   
  };

  const handleclick = () => {
    setDebugImage(DebugG);
    setMysteryImage(Mystery);
    setQuizeImage(Quize);
    setRandomImage(RANDOM);
  };
  const handleclick1 = () => {
    setDebugImage(Debug);
    setMysteryImage(MysteryG);
    setQuizeImage(Quize);
    setRandomImage(RANDOM);
    var img = document.getElementById("debugImage1");
    img.src = challengeI;
  };
  const handleclick2 = () => {
    setDebugImage(Debug);
    setMysteryImage(Mystery);
    setQuizeImage(QuizeG);
    setRandomImage(RANDOM);
    var img = document.getElementById("debugImage");
    img.src = decoded;
  };
  const handleclick3 = () => {
    setDebugImage(Debug);
    setMysteryImage(Mystery);
    setQuizeImage(Quize);
    setRandomImage(RANDOMG);
  };

  const handelsolo = () => {
    setIsMultiplayer((prevIsMultiplayer) => !prevIsMultiplayer);
    setChallengeI((prevSrc) => (prevSrc === Mystery ? Challenge : Mystery));
    setDecode((prevSrc) => (prevSrc === Quize ? Decode : Quize));

    

  };

  return (
    <div>
      <section className="section">
        <section className="text">
          <div className="div11">
            <h3 className="neon-text" onClick={handelsolo} contentEditable="false">
              Solo
            </h3>

            <h3 className="neon-text" onClick={handeltextclick}>
              Multipalyer
            </h3>

           
          </div>
          <div className="neon-box"></div>
        </section>
        <img
          src={mysteryImage}
          className="MystryBox"
          onClick={handleclick1}
          id="debugImage1"
          alt="mys"
        />
         <img
          src={quizeImage}
          className="MystryBox"
          onClick={handleclick2}
          id="debugImage"
          alt="mys"
        />
        {!isMultiplayer && (
          <img
            src={debugImage}
            className="MystryBox"
            onClick={handleclick}
            id="debugImage"
            alt="mysw"
          />
        )}
        <img
          src={randomImage}
          className="MystryBox"
          onClick={handleclick3}
          id="RANDOM"
          alt="mys"
        />
        <button className="click">Set</button>
      </section>
    </div>
  );
}

export default App;
