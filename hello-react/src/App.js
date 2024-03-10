import "./App.css";
import User from "./components/User";

function App() {
  return (
    <>
      <User
        name="Minaya"
        sname="Aliyeva"
        isLogdin={true}
        friends={["emin", "fidan", "taleh"]}
      />
    </>
  );
  // return React.createElement('div',null,"hello");
}
export default App;
