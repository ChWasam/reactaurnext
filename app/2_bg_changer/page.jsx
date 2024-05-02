"use client";

import React from "react";
import { useState } from "react";

export default function page() {
  const [bgColor, setBgColor] = useState(
    "flex flex-col justify-start h-screen w-screen bg-emerald-500"
  );
  const greenBG = () => {
    setBgColor("justify-start bg-green-800");
  };
  const yelloBG = () => {
    setBgColor("justify-center bg-yellow-500");
  };
  const blueBG = () => {
    setBgColor("justify-end bg-blue-800");
  };
  const blackBG = () => {
    setBgColor("justify-center bg-black");
  };
  const purpleBG = () => {
    setBgColor("justify-start bg-purple-800");
  };
  const limeBG = () => {
    setBgColor("justify-center  bg-lime-400");
  };
  const orangeBG = () => {
    setBgColor("justify-end bg-orange-500");
  };
  const redBG = () => {
    setBgColor("justify-center  bg-red-500");
  };
  const pinkBG = () => {
    setBgColor(" justify-start bg-pink-500");
  };

  return (
    <main className={`flex flex-col justify-start h-screen w-screen ${bgColor}`}>
      <div className="flex gap-x-4 mx-auto bg-white rounded-3xl shadow-lg ">
        <button
          className="bg-green-800  px-4   rounded-3xl m-2"
          onClick={greenBG}
        >
          Green
        </button>
        <button
          className="bg-yellow-500  px-4  rounded-3xl m-2"
          onClick={yelloBG}
        >
          Yellow
        </button>
        <button className="bg-blue-800  px-4  rounded-3xl m-2" onClick={blueBG}>
          Blue
        </button>
        <button
          className="bg-black text-white  px-4  rounded-3xl m-2"
          onClick={blackBG}
        >
          black
        </button>
        <button
          className="bg-purple-800  px-4  rounded-3xl m-2"
          onClick={purpleBG}
        >
          Purple
        </button>
        <button className="bg-lime-400  px-4  rounded-3xl m-2" onClick={limeBG}>
          Lime
        </button>
        <button
          className="bg-orange-500  px-4  rounded-3xl m-2"
          onClick={orangeBG}
        >
          Orange
        </button>
        <button className="bg-red-500  px-4  rounded-3xl m-2" onClick={redBG}>
          Red
        </button>
        <button className="bg-pink-500  px-4  rounded-3xl m-2" onClick={pinkBG}>
          Pink
        </button>
      </div>
    </main>
  );
}
