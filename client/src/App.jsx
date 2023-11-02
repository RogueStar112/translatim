import "./App.css";
import { useState } from 'react'
import axios from "axios";

function App() {

  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("es");

  const [word, setWord] = useState("")
  const [translation, setTranslation] = useState("")
  
  
  // store the word we want to translate in state


  // on submit function

  async function handleTranslate(event) {
    event.preventDefault();
    
    const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`

    const res = await axios.get(API);
    
    setTranslation(res.data.translation)

    console.log("RDT", res.data.translation)

  }



  return (
      <div className="w-screen h-screen bg-sky-700">
        <h1 className="text-white">Translate App!</h1>
        <form onSubmit={handleTranslate} className="flex max-w-md mx-auto my-auto">
          <div className="flex">
            <select className="rounded-tl-lg rounded-bl-lg" onChange={(event) => setFrom(event.target.value)}>
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="pl">Polish</option>
              <option value="es">Spanish</option>
              <option value="tr">Turkish</option>
            </select>
            <input className="text-center" placeholder="Translate" onChange={(event) => setWord(event.target.value)} />
          </div>

          <p className="bg-white">
          to
          </p>

          <div className="">
            <select className="rounded-br-lg rounded-tr-lg" onChange={(event) => setTo(event.target.value)}>
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="pl">Polish</option>
              <option value="es">Spanish</option>
              <option value="tr">Turkish</option>
            </select>
            {/* <input placeholder="Translate" onChange={(event) => setTranslation(event.target.value)} /> */}
          
          </div>

          <button className="w-16 h-4" type="submit">Submit</button>
        </form>

        <div className="output"><p>{translation}</p></div>
      </div>
  );
}

export default App;

