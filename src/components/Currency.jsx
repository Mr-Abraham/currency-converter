import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";

function Currency() {
  const [Currencydata, setData] = useState([]);
  const [from, setFrom] = useState("usd");
  const [fromOptions, setfromOptions] = useState([]);
  const [toOptions, settoOptions] = useState([]);
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();
  const [inputAmount, setInputAmount] = useState();
  const getRates = (cur) => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${cur}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data[cur]);
        setfromOptions(Object.keys(data[cur]));
        settoOptions(Object.keys(data[cur]));
        setConvertedAmount(Number(inputAmount * data[cur][to]).toFixed(2));
      });
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  useEffect(() => {
    getRates(from);
  }, [from, to, inputAmount]);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-extrabold text-center mb-6">
          {inputAmount ? convertedAmount : "Nothing Entered Yet !!"}
        </h1>
      </div>
      <div className="flex max-md:gap-1 gap-5 p-2 justify-between items-center ">
        <div className="rounded-lg max-md:w-full max-md:py-0 max-md:px-2 pr-5 py-1 bg-white">
          <select
            name="currencyRates"
            value={from}
            id="currencyRates"
            className="w-full uppercase h-10 rounded-md outline-none p-2 text-xl font-bold bg-transparent max-md:p-0 max-md:text-xs"
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          >
            {fromOptions.map((opt) => (
              <option className="uppercase" key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <button className="cursor-pointer" onClick={swap}>
          <AiOutlineSwap className="text-8xl font-extrabold  text-white" />
        </button>
        <div className="rounded-lg pr-5 max-md:w-[100%] max-md:px-2 max-md:py-0 py-1 bg-white">
          <select
            name="toRates"
            id="toRates"
            className="w-[100%] h-10 bg-transparent outline-none uppercase rounded-md p-2 text-xl max-md:p-0 max-md:text-xs font-bold"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          >
            {toOptions.map((opt) => (
              <option className="uppercase" key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-2 mb-2">
        <input
          type="number"
          name="currencyUnit"
          id="currencyUnit"
          autoFocus
          className=" rounded-lg  p-2 font-semibold text-xl w-[100%] outline-none bg-transparent text-center border-white border-4"
          onChange={(e) => setInputAmount(e.target.value)}
          value={inputAmount}
        />
      </div>
    </div>
  );
}

export default Currency;
