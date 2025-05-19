import { use, useState } from "react";
import "./App.css";

function App() {

  const [color, setColor] = useState()
  const [colors, setColors] = useState([
    '#a52a2a',
    '#a52a2a',
    '#a52a2a',
    '#a52a2a',
    '#a52a2a',
    '#a52a2a'
  ])

  function generateRandomColor() {
    let hex = '0123456789ABCDEF';
    let colorCode = '#';
    for(let i=0; i<6; i++){
      colorCode += Math.floor(Math.random() * 6)
    }
    return colorCode;
  }

  function generateColors(){
    setColors([
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor()
    ])
  }

  return (
    <>
      <div className="container" style={{backgroundColor: color}}>
        <div className="button-container">
          <button onClick={() => setColor("violet")} style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=>setColor("indigo")} style={{backgroundColor: "indigo"}}>Indigo</button>
          <button onClick={()=>setColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=>setColor("green")} style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=>setColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={()=>setColor("orange")} style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={()=>setColor("red")} style={{backgroundColor: "red"}}>Red</button>
        </div>

        <div className="boxes-container">
          <div className="boxes" style={{backgroundColor: colors[0]}} onClick={() => setColor(colors[0])}>{colors[0]}</div>
          <div className="boxes" style={{backgroundColor: colors[1]}} onClick={() => setColor(colors[1])}>{colors[1]}</div>
          <div className="boxes" style={{backgroundColor: colors[2]}} onClick={() => setColor(colors[2])}>{colors[2]}</div>
          <div className="boxes" style={{backgroundColor: colors[3]}} onClick={() => setColor(colors[3])}>{colors[3]}</div>
          <div className="boxes" style={{backgroundColor: colors[4]}} onClick={() => setColor(colors[4])}>{colors[4]}</div>
          <div className="boxes" style={{backgroundColor: colors[5]}} onClick={() => setColor(colors[5])}>{colors[5]}</div>

          <button onClick={generateColors}>Generate Color</button>
        </div>
        

      </div>
    </>
  );
}

export default App;
