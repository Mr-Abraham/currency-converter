import React from "react";
import Currency from "./components/Currency";

function App() {
  return (
    <div className="grid place-items-center h-[100vh] bg-gradient-to-b from-teal-400 to-yellow-200">
      <section className="p-10 rounded-2xl shadow-2xl shadow-neutral-600 max-md:w-[90%] ">
        <h1 className="text-6xl font-semibold mb-10 text-center">
          <span className="max-md:text-white inline-block mb-2">Currency</span>{" "}
          Converter
        </h1>
        <div>
          <Currency />
        </div>
      </section>
    </div>
  );
}

export default App;
