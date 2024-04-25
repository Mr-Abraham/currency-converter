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
          {inputAmount ? convertedAmount : <h1>Nothing Entered Yet !!</h1>}
        </h1>
      </div>
      <div className="flex gap-5 p-3 justify-between items-center ">
        <div>
          {/* <h1 className="font-semibold text-xl mb-2">From</h1> */}
          <select
            name=""
            value={from}
            id=""
            className="w-full h-10 rounded-md p-2 text-xl font-bold"
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          >
            {fromOptions.map((opt) => (
              <option className="uppercase " value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <button className="cursor-pointer" onClick={swap}>
          <AiOutlineSwap className="text-8xl font-extrabold  text-green-400 " />
        </button>
        <div>
          <select
            className="w-full h-10 rounded-md p-2 text-xl font-bold"
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
          className=" rounded-lg border p-2 font-semibold text-xl outline-none w-[100%] border-gray-500"
          onChange={(e) => setInputAmount(e.target.value)}
          value={inputAmount}
        />
      </div>
    </div>
  );
}

export default Currency;
