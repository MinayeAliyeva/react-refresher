import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('Minaya')
  useEffect(() => {
    console.log("State guncellendi");
  });
  //component mount olduqda ve update olduqda calisir componenti sonsuz loopa salar
  //component didmount class componentlerde evvlerde component doma mount oldugu ani yakalamakcin kullaniliyordu
  useEffect(() => {
    console.log("number");
  }, [number]);
  useEffect(() => {
    console.log("mount");
  }, []);
  //useEffectle bele edilir eynisi



  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr/>
      <h1>{name}</h1>
      <button onClick={() => setName('Mete')}>Click</button>
    </div>
  );
}

export default App;
