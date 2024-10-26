import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hex.length);
      hexColor += hex[randomIndex];
    }
    console.log("Generated Hex Color:", hexColor);
    setColor(hexColor); // Update color to change background
  }

  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r},${g},${b})`;
    console.log("Generated RGB Color:", rgbColor);
    setColor(rgbColor); // Update color to change background
  }

  return (
    <div
      style={{ width: "100vw", height: "100vh", background: color }}
      className="container"
    >
      <button
        onClick={() => {
          console.log("Color Type Selected: Hex");
          setTypeOfColor("hex");
        }}
      >
        Create Hex Color
      </button>
      <button
        onClick={() => {
          console.log("Color Type Selected: RGB");
          setTypeOfColor("rgb");
        }}
      >
        Get RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div style={{
        display:'flex ',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'25px',
        marginTop:'10px'
      }}
       className="showcolor">
        <h1>{color}</h1>
        <h3>Color Type Selected :{typeOfColor==='rgb'?'RGB ':"HEX "}</h3>
    
      </div>
    </div>
  );
}
