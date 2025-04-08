import React from 'react';
import binanceIcon from '../../icons/binance.svg';
import bitGetIcon from '../../icons/bitget.svg';
import bybit from "../../icons/bybit.svg";
import mexc from "../../icons/mexc.svg";




export default function AuthPopup() {
  return (
    <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col w-[400px]">
        <p className="font-bold text-2xl my-10">Connect with Exchanges</p>
        <div className="flex justify-between items-center px-4 py-2 m-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-500">
          <div>
            <img
              src={binanceIcon}
              alt="Binance"
              className="w-5 h-5 inline-block mr-2"
            />
            Connect with Binance
          </div>
          <button className="text-sm text-gray-400 ml-2">Connect</button>
        </div>
        <div className="flex justify-between items-center px-4 py-2 m-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-500">
          <div>
            <img
              src={bitGetIcon}
              alt="Bitget"
              className="w-5 h-5 inline-block mr-2"
            />
            Connect with Bitget
          </div>
          <button className="text-sm text-gray-400 ml-2">Connected</button>
        </div>
        <div className="flex justify-between items-center px-4 py-2 m-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-500">
          <div>
            <img
              src={bybit}
              alt="bybit"
              className="w-5 h-5 inline-block mr-2"
            />
            Connect with Bybit
          </div>
          <button className="text-sm text-gray-400 ml-2">Connect</button>
        </div>
        <div className="flex justify-between items-center px-4 py-2 m-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-500">
          <div>
            <img
              src={mexc}
              alt="MEXC"
              className="w-5 h-5 inline-block mr-2"
            />
            Connect with MEXC
          </div>
          <button className="text-sm text-gray-400 ml-2">Connect</button>
        </div>
        <p className="text-sm text-gray-400 mt-10">Powered by AEX</p>
      </div>
    </div>
  );
}
