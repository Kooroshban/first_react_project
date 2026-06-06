import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-green-700 text-center ">
      <h1 className="text-3xl font-bold">React Counter</h1>
      <div className="rounded-xl bg-bg-200 flex flex-col items-center gap-3 p-9">
        <h2 className="font-semibold text-3xl w-162.5">{count}</h2>
        <div className="flex gap-3 flex-wrap ">
          <button
            onClick={() => {
              setCount(count - 5);
            }}
            className="w-32.5 h-12.5 rounded-lg border border-border"
          >
            -5
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="w-32.5 h-12.5 rounded-lg border border-border"
          >
            ➖ Decrement
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="w-32.5 h-12.5 rounded-lg border border-border"
          >
            ➕ Increment
          </button>
          <button
            onClick={() => {
              setCount(count + 5);
            }}
            className="w-32.5 h-12.5 rounded-lg border border-border"
          >
            +5
          </button>
        </div>
        <button
          onClick={()=>setCount(0)}
          className="w-32.5 h-12.5 rounded-lg border border-border"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default App;
