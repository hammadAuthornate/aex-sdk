import React,{ useEffect, useState } from "react";
import ThemeBlue from "../ui/buttons";
import CreateForm from "./CreateForm";
const details = [
  { label: "Symbol", value: "BTCUSDT" },
  { label: "High 24H", value: "24445.5" },
  { label: "Open", value: "3241.9" },
  { label: "Low 24H", value: "1234.567" },
  { label: "Last PR", value: "344134.1" },
  { label: "Quote Volume", value: "0" },
  { label: "USDT Volume", value: "0" },
  { label: "Bid PR", value: "0" },
  { label: "Ask PR", value: "0" },
  { label: "Bid SZ", value: "0.0663" },
  { label: "Ask SZ", value: "0.01922" },
  { label: "Open UTC", value: "233487.72" },
  { label: "TS", value: "123456723" },
  { label: "Change UTC 24H", value: "0.00361" },
  { label: "Change 24H", value: "0.000069" },
];
const orderbookRed = [
  {
    title: "Price ( USDT )",
    values: [
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
    ],
    textColor: "text-rose-600",
  },
  {
    title: "Size ( BTC )",
    values: [
      "2,000",
      "2,000",
      "2,000",
      "2,000",
      "2,000",
      "2,000",
      "2,000",
      "2,000",
    ],
    textColor: "text-gray-400",
  },
  {
    title: "Sum ( BTC )",
    values: [
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
    ],
    textColor: "text-gray-400",
  },
];
const orderbookGreen = [
  {
    values: [
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
      "43,234.1",
    ],
    textColor: "text-green-500 px-5",
  },
  {
    values: [
      "2,000",
      "2,000",
      "2,000",
      "2,000",
      "2,000",
      "2,000",
      "2,000",
      "2,000",
    ],
    textColor: "text-gray-400",
  },
  {
    values: [
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
      "16:23:19",
    ],
    textColor: "text-gray-400 px-3",
  },
];
type SidebarProps = {
  onClose: () => void;
};

export default function Sidebar({ onClose }: SidebarProps) {
  const [animateIn, setAnimateIn] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [formOpen, setFormOpen] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimateIn(true), 20);
    return () => clearTimeout(timeout);
  }, []);

  const closeSidebar = () => {
    setAnimateIn(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex justify-end items-end md:items-stretch"
      onClick={closeSidebar}
    >
      {formOpen && <CreateForm onClose={() => setFormOpen(false)} />}
      <div
        className={`
                bg-white w-full h-[50%] md:h-full md:w-96 p-4 shadow-lg
                transition-transform duration-300 ease-in-out transform
                ${
                  animateIn
                    ? "translate-y-0 md:translate-x-0"
                    : "translate-y-full md:translate-x-full"
                }
            `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={closeSidebar}
            className="text-sm text-gray-500 p-2 rounded-full w-7 h-7 flex items-center justify-center bg-gray-100 transition-colors duration-200"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-around items-center">
          <p className="text-2xl">Ethereum</p>
          <ThemeBlue title="Create" event={() => setFormOpen(true)} />
        </div>
        <div className="flex items-center mt-4 w-full justify-start">
          <button
            className={` ${
              activeTab === "details"
                ? "text-black font-semibold"
                : "text-gray-300"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={`ml-6 ${
              activeTab === "history"
                ? "text-black font-semibold"
                : "text-gray-300"
            }`}
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
          <button
            className={`ml-6 ${
              activeTab === "orders"
                ? "text-black font-semibold"
                : "text-gray-300"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            Open Orders
          </button>
        </div>
        <div className="w-full border-t border-gray-200 mt-4" />
        <div className="h-[80vh] scrollbar overflow-y-auto scrollbar-hide">
          <div className="text-sm">
            {activeTab === "details" ? (
              <div className="">
                <div className="mt-4">
                  {details.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between pt-1.5"
                    >
                      <p className="text-gray-400 w-full">{item.label}</p>
                      <span className="text-black whitespace-nowrap">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeTab === "history" ? (
              <div className="py-4 text-gray-400 flex justify-between">
                <div className="flex flex-col items-center">
                  <p>Price ( USDT )</p>
                  <p className="pt-3 text-green-500">43,234.1</p>
                  <p className="text-green-500">43,234.1</p>
                  <p className="text-green-500">43,234.1</p>
                  <p className="text-rose-600">43,234.1</p>
                  <p className="text-rose-600">43,234.1</p>
                  <p className="text-green-500">43,234.1</p>
                  <p className="text-rose-600">43,234.1</p>
                  <p className="text-rose-600">43,234.1</p>
                </div>
                <div className="flex flex-col items-center">
                  <p>Amount ( BTC )</p>
                  <p className="pt-3 text-green-500">2,000</p>
                  <p className="text-green-500">2,000</p>
                  <p className="text-green-500">2,000</p>
                  <p className="text-rose-600">2,000</p>
                  <p className="text-rose-600">2,000</p>
                  <p className="text-green-500">2,000</p>
                  <p className="text-rose-600">2,000</p>
                  <p className="text-rose-600">2,000</p>
                </div>
                <div className="flex flex-col items-center">
                  <p>Time</p>
                  <p className="pt-3 text-green-500">16:23:19</p>
                  <p className="text-green-500">16:23:19</p>
                  <p className="text-green-500">16:23:19</p>
                  <p className="text-rose-600">16:23:19</p>
                  <p className="text-rose-600">16:23:19</p>
                  <p className="text-green-500">16:23:19</p>
                  <p className="text-rose-600">16:23:19</p>
                  <p className="text-rose-600">16:23:19</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex w-full">
                  <div className="flex flex-col w-1/3 px-4">
                    <p className="text-gray-400">Buy</p>
                    <p className="pt-3 text-cyan-400">43,234.1</p>
                    <p className="text-green-500">42,000.1</p>
                    <p className="text-green-500">42,000.1</p>
                    <p className="text-rose-600">42,000.1</p>
                  </div>
                  <div className="flex flex-col w-1/3 px-4 text-gray-400">
                    <p className="text-end  pr-6">QTY</p>
                    <p className="pt-3 text-end pr-5">2,000</p>
                    <p className="text-end  pr-5">2,000</p>
                    <p className="text-end pr-5">2,000</p>
                    <p className="text-end pr-5">2,000</p>
                  </div>
                  <div className="flex flex-col w-1/3 px-4 text-gray-400">
                    <p className="text-gray-400 text-end pr-2">Type</p>
                    <p className="pt-3 text-end">Limit</p>
                    <p className="text-end">Take Profit</p>
                    <p className="text-end">Stop Loss</p>
                    <p className="text-end">Limit</p>
                  </div>
                </div>
                <p className="text-gray-400 pl-4 mt-3">Sell</p>
                <div className="flex w-full">
                  <div className="flex flex-col w-1/3 px-4">
                    <p className="pt-3 text-rose-600">42,234.1</p>
                    <p className="text-rose-600">42,000.1</p>
                    <p className="text-green-500">42,000.1</p>
                    <p className="text-green-500">42,000.1</p>
                  </div>
                  <div className="flex flex-col w-1/3 px-4 text-gray-400">
                    <p className="pt-3 text-end pr-5">2,000</p>
                    <p className="text-end  pr-5">2,000</p>
                    <p className="text-end pr-5">2,000</p>
                    <p className=" text-end pr-5">2,000</p>
                  </div>
                  <div className="flex flex-col w-1/3 px-4 text-gray-400">
                    <p className="pt-3 text-end">Limit</p>
                    <p className="text-end">Take Profit</p>
                    <p className="text-end">Stop Loss</p>
                    <p className="text-end">Limit</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between w-full">
            <p className="mt-4 font-semibold pb-3">Order Book</p>
            <div className="flex gap-1 items-center">
              <img
                src="/icons/bybit.svg"
                alt="bybit"
                className="w-[20px] h-[20px]"
              />
              <img
                src="/icons/bitget.svg"
                alt="bybit"
                className="w-[20px] h-[20px]"
              />
              <img
                src="/icons/mexc.svg"
                alt="bybit"
                className="w-[25px] h-[25px]"
              />
              <img
                src="/icons/binance.svg"
                alt="bybit"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
          <div className="w-full border-t border-gray-200" />

          <div className="flex w-full justify-end gap-2 my-1.5">
            <img
              src="/icons/both-nofilter.svg"
              alt="all"
              className="w-[15px] h-[15px]"
            />
            <img
              src="/icons/green-filter.svg"
              alt="all"
              className="w-[15px] h-[15px] opacity-40"
            />
            <img
              src="/icons/red-filter.svg"
              alt="all"
              className="w-[15px] h-[15px] opacity-40"
            />
          </div>
          <div className="flex justify-between h-[150px] overflow-x-scroll text-sm">
            {orderbookRed.map((column, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${column.textColor}`}
              >
                <p className="text-gray-400 py-4">{column.title}</p>
                {column.values.map((value, idx) => (
                  <p key={idx}>{value}</p>
                ))}
              </div>
            ))}
          </div>
          <p className="py-4 text-gray-400">Bids</p>
          <div className="flex justify-between h-[100px] overflow-x-scroll text-sm">
            {orderbookGreen.map((column, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${column.textColor}`}
              >
                {column.values.map((value, idx) => (
                  <p key={idx}>{value}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
