import { useState } from "react";
import "./App.css";
const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "Pleaseee",
  "You're breaking my heart ;(",
];

function App() {
  const [nocount, setNoCount] = useState(0);
  const [yesPressed , setYesPressed] = useState((false));
  const yesButtonSize = nocount * 20 + 16;

  function handleNoClick(){
    setNoCount(nocount +1);
  }
  
 function getNoButtonText(){
  return phrases[Math.min(nocount,phrases.length - 1)];
  // return phrases[Math.floor(Math.random() * phrases.length )];
 }

  return (
    <div className="container">
    {yesPressed ?(
      <>
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear kissing" />
      <div className="text">Yayy!!!! </div>
      </>
    ):(
      <>
      <img src="https://media1.tenor.com/m/hnqwiqhkSy0AAAAC/hearts-flowers.gif" alt="Bear with flower" />
      <div>
        <h3 className="ask" >Will you be my valentine?</h3>
      </div>
      <div className="btn">
        <button className="Yesbtn" style={{fontSize: yesButtonSize}} onClick={()=>setYesPressed(true)} >Yes</button>
        <button className="Nobtn" onClick={handleNoClick}>{getNoButtonText()}</button>
      </div>
      </>
    )
  }
    </div>
  );
}

export default App;
