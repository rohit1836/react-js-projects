import { useState,useEffect,useCallback } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(6);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialCharacters, setIncludeSpecial] = useState(false);

  function generatePassword() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) str += "0123456789";
    if (includeSpecialCharacters) str += `!@#$%^&*()_-+={}[]:;"'<>,./`;
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }

  useCallback(() => {
    generatePassword();
  }, [length,includeNumbers,includeSpecialCharacters])

  useEffect(() => {
    generatePassword();
  }, [length,includeNumbers,includeSpecialCharacters])

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="input-fields">
            <input type="text" placeholder="Password" value={password} readOnly/>
            <button id="copy-button" onClick={
              () => {
                window.navigator.clipboard.writeText(password)
              }
            }>copy</button>
          </div>
          <div className="parameters">
            <input
              type="range"
              min={4}
              max={30}
              defaultValue={length}
              htmlFor="length"
              onChange={(event) => {
                setLength(event.target.value);
                // generatePassword();
              }}
            />
            <label htmlFor="length">Length: {length}</label> <br />
            <input
              type="checkbox"
              name="numbers"
              onClick={() => {
                setIncludeNumbers(!includeNumbers);
                // generatePassword();
              }}
            />
            <label htmlFor="length">Numbers</label> <br />
            <input
              type="checkbox"
              name="special"
              onClick={() => {
                setIncludeSpecial(!includeSpecialCharacters)
                // generatePassword();
              }}
            />
            <label htmlFor="special">Special Characters</label> <br />

            <button onClick={() => generatePassword()}>Genarate</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
