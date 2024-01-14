"use client";
import { useEffect, useState } from "react";
export default async function Canvas() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="flex w-full max-w-xl">
        <h1 class="truncate">{JSON.stringify(data)}</h1>
      </div>
      <form className="flex flex-row gap-3 max-w-xl">
        <input
          type="text"
          className="w-20 h-20 bg-gray-700 rounded-lg p-2 text-center  text-2xl font-bold uppercase duration-75 outline-none border-2 border-gray-600 focus:border-green-600"
          maxLength={1}
        />
        <input
          type="text"
          className="w-20 h-20 bg-gray-700 rounded-lg p-2 text-center  text-2xl font-bold uppercase duration-75 outline-none focus:border-green-600 border-2 border-gray-600 "
          maxLength={1}
        />
        <input
          type="text"
          className="w-20 h-20 bg-gray-700 rounded-lg p-2 text-center  text-2xl font-bold uppercase duration-75 outline-none border-2 border-gray-600 focus:border-green-600"
          maxLength={1}
        />
        <input
          type="text"
          className="w-20 h-20 bg-gray-700 rounded-lg p-2 text-center  text-2xl font-bold uppercase duration-75 outline-none border-2 border-gray-600 focus:border-green-600"
          maxLength={1}
        />
        <input
          type="text"
          className="w-20 h-20 bg-gray-700 rounded-lg p-2 text-center  text-2xl font-bold uppercase duration-75 outline-none border-2 border-gray-600 focus:border-green-600"
          maxLength={1}
        />
      </form>
    </>
  );
}
