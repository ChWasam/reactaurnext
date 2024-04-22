"use client";

import React from "react";
import { useState } from "react";

export default function page() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const substractValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <main className="flex flex-col justify-center bg-purple-800 h-screen w-screen  ">
      <div className="mx-auto text-white text-4xl font-extrabold">
        Counter from 0 to 20
      </div>
      <div className="flex mx-auto ">
        <button
          onClick={addValue}
          className="m-4 text-4xl  p-8 text-white bg-green-500 font-extrabold rounded-lg shadow-xl "
        >
          +
        </button>
        <button
          onClick={substractValue}
          className="m-4 p-8 text-4xl  text-white bg-yellow-500 font-extrabold rounded-lg shadow-xl "
        >
          -
        </button>
        <div className="m-4 p-8 text-white text-4xl  bg-red-500 font-extrabold rounded-lg shadow-xl ">
          {" "}
          ={" "}
        </div>
        <div className="m-4 p-8 text-white text-4xl  bg-teal-500 font-extrabold rounded-lg shadow-xl ">
          {counter}
        </div>
      </div>
    </main>
  );
}
