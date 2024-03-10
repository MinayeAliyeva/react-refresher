import "./App.css";
import User from "./components/User";

function App() {
  return (
    <>
      <User
      isLoggedin={true}
        name="Minaya"
        sname="Aliyeva"
        isLogdin={true}
        friends={["emin", "fidan", "taleh"]}
        age={12}
        adress={{
          title: "Atasehir",
          zip: 235,
        }}
      />
    </>
  );
  // return React.createElement('div',null,"hello");
}
export default App;
