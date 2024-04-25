import React from "react";
import Currency from "./components/Currency";

function App() {
  return (
    <div className="grid place-items-center h-[100vh]">
      <section className="p-10 rounded-xl shadow-2xl ">
        <h1 className="text-6xl font-semibold mb-10 text-center">
          Currency Converter
        </h1>
        <div>
          <Currency />
        </div>
      </section>
    </div>
  );
}

export default App;
