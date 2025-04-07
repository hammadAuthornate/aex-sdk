import React, { useEffect, useState } from "react";

export default function CreateForm({ onClose }: { onClose: () => void }) {
  const [isBuy, setIsBuy] = useState<boolean>(true);
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-50 bg-black/20 backdrop-blur-sm flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold">Ethereum</h2>

        <input
          type="text"
          placeholder="Enter value"
          className="border border-gray-200 px-4 h-10 rounded-xl w-full"
        />
        <input
          type="text"
          placeholder="Another input"
          className="border border-gray-200 px-4  h-10 rounded-xl w-full"
        />

        <select
          className="border border-gray-200 px-4 h-10 rounded-xl w-full"
          defaultValue=""
        >
          <option value="" disabled className="text-gray-400">
            Select an option
          </option>
          <option value="create">Limit</option>
          <option value="whatever">Whatever</option>
        </select>

        <div className="flex justify-between border border-gray-200 rounded-xl h-12 relative">
          <div
            className={`absolute top-0 bottom-0 w-49/100 ml-[4px] bg-[#5B4FFF] h-10 mt-[3px] rounded-lg transition-transform duration-300 ${
              isBuy ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>
          <button
            className={`px-3 py-2 rounded relative z-10 w-1/2 ${
              isBuy ? "text-white" : "text-gray-500"
            }`}
            onClick={() => setIsBuy(true)}
          >
            Buy
          </button>
          <button
            className={`px-4 py-2 rounded relative z-10 w-1/2 ${
              !isBuy ? "text-white" : "text-gray-500"
            }`}
            onClick={() => setIsBuy(false)}
          >
            Sell
          </button>
        </div>

        <button className="bg-[#5B4FFF] text-white px-4 py-2 rounded-xl w-full">
          Create
        </button>
        <p className=" w-full text-center text-sm text-gray-400 mt-10">
          Powered by AEX
        </p>
      </div>
    </div>
  );
}
