import "./App.css";
import Form from './Form';
import Gallery from "./Gallery";
import Person from "./Person";
// import { useState } from "react";
// import ToolBar from "./ToolBar";
function App() {

  // Testing Of State

  // let data = 100;
  // const [score, setScore] = useState(0);

  // function increment() {
  //   setScore(score + 1);
  // }
  // function increment3() {
  //   setScore(score + 3);
  // }

  return (
    <div className="App">

      {/* <Form></Form> */}


      {/* <ToolBar
        onPlayMovie={() => alert("playing")}
        onUploadImage={() => alert("Success")}
      ></ToolBar> */}

      {/* <button onClick={() => increment()}>+1</button>
      <button
        onClick={() => {
          increment3();
        }}
      >
        +3
      </button>

      <h1>Score : {score}</h1>
      <h1>Data : {data}</h1> */}

      {/* <Gallery></Gallery> */}

      <Person></Person>

    </div>
  );
}

export default App;
