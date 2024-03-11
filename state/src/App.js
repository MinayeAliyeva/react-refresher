import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [name, setName] = useState("Minaya");
  const [age, setAge] = useState(20);
  const [friends, setFriends] = useState(["Gulu", "Emin", "Fidan"]);
  const [adress, setAdress] = useState({ title: "Istanbul", zip: 1234 });
  return (
    <div className="App">
      <h1>
        Mehraba {name} {age}
      </h1>
      <button onClick={() => setName("Ahmet")}>Click</button>
      <button onClick={() => setAge(24)}>Click</button>
      <hr />
      <br />
      <h2>Friends</h2>
      {friends?.map((friend, i) => (
        <h1 key={i}>{friend}</h1>
      ))}
      <br />
      <div>
        {adress?.title} {adress?.zip}
      </div>
      <button onClick={() => setAdress({...adress, title: "Ankara" })}>
        update object
      </button>
      <br />
      <Counter/>
    </div>
  );
}

export default App;
