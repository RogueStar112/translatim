import "./App.css";
import { useState } from 'react'
import axios from "axios";

function App() {

  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("es");

  const [word, setWord] = useState("")
  const [translation, setTranslation] = useState({})
  
  
  // store the word we want to translate in state


  // on submit function

  async function handleTranslate(event) {
    event.preventDefault();
    
    const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`

    const res = await axios.get(API);
    
    setTranslation(res.data.translation)

  }



  return (
       <form onSubmit={handleTranslate}>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input placeholder="Translate" onChange={(event) => setWord(event.target.value)} />
        </div>

        <div className="container">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          {/* <input placeholder="Translate" onChange={(event) => setTranslation(event.target.value)} /> */}
          <div className="output">{translation.translation}</div>
        </div>

        <button type="submit" />
      </form>

  );
}

export default App;

