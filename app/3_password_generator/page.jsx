"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export default function page() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [specialCharacterAllowed, setSpecialCharacter] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordReference = useRef(null);

  let passwordGenerator = useCallback(() => {
    let char = "";
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "123456789";
    const specialCharacters = "~!@#$%^&*()_-+={[}]|:;'<,>.?/";
    if (numberAllowed && specialCharacterAllowed) {
      alphabets += numbers;
      alphabets += specialCharacters;
    } else if (specialCharacterAllowed) {
      alphabets += specialCharacters;
    } else if (numberAllowed) {
      alphabets += numbers;
    }

    for (let i = 0; i < passwordLength; i++) {
      let randomValue = Math.floor(Math.random() * alphabets.length + 1);
      char += alphabets.charAt(randomValue);
      console.log(char);
    }
    setPassword(char);
  }, [passwordLength, numberAllowed, specialCharacterAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordReference.current?.select();
    passwordReference.current?.setSelectionRange(0,6);
    let passwordValue = ""
    for(let i=0 ; i<6; i++){
    passwordValue += Password[i]
    }
    window.navigator.clipboard.writeText(passwordValue);
  }, [Password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, numberAllowed, specialCharacterAllowed]);

  return (
    <main className=" flex flex-col bg-gradient-to-tr from-purple-700 to-red-700 w-screen h-screen  ">
      <div className="flex flex-col  rounded-xl p-8 gap-y-4  shadow-2xl m-auto ">
        <div className="text-white font-extrabold text-6xl">
          Welcome to Password Generator
        </div>
        <div className=" flex self-center w-full   ">
          <input
            type="text"
            value={Password}
            placeholder="password"
            className="rounded-l-lg px-4 outline-none w-full text-lime-600 font-extrabold py-2"
            readOnly
            ref={passwordReference}
          />
          <button
            onClick={copyPassword}
            className="bg-lime-400 text-white px-4 rounded-r-lg py-2"
          >
            Copy
          </button>
        </div>
        <div className=" flex gap-x-4">
          <div className="flex gap-x-1 ">
            <input
              type="range"
              min={6}
              max={80}
              value={passwordLength}
              onChange={(e) => {
                setPasswordLength(e.target.value);
              }}
              className="cursor-pointer "
              id="Password Range"
            />
            <label
              htmlFor="Password Range"
              className="text-lime-400 font-extrabold"
            >
              {" "}
              Password: {passwordLength}
            </label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
              id="Number Checkbox"
            />
            <label
              htmlFor="Number Checkbox"
              className="text-lime-400 font-extrabold"
            >
              Number
            </label>
          </div>

          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={specialCharacterAllowed}
              onChange={() => {
                setSpecialCharacter((prev) => !prev);
              }}
              id="special Character checkbox"
            />
            <label
              htmlFor="Special Character checkbox"
              className="text-lime-400 font-extrabold"
            >
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}

//  Got an error
//Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
// Too many re-renders ka matlab yeh ha kah buhat sari cheezain asi han jin ka tabdeel hona sa result tabdeel ho ga
// to han useCallback hook use karain ga ta kah thori si cheezain h=jo wo cache/ memory me yad rakh saka wo rakh la aur baqi to ausa karni hi para ge
// is sa code optimise ho jai ga
