import React from "react";

export default function Table({
  onRowClick,
  data,
}: {
  onRowClick?: (id: number) => void;
  data: { symbol: string; price: string; exchange: string }[];
}) {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="overflow-x-auto w-95/100">
        <table className="table-fixed w-full border-collapse text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="w-16 p-3 font-normal">#</th>
              <th className="p-3 font-normal">Symbol</th>
              <th className="p-3 font-normal">Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                onClick={() => onRowClick?.(index)}
                className="border-b border-gray-300 transition-colors duration-200 hover:bg-gray-100"
              >
                <td className="p-4 font-normal text-gray-400 text-[14px]">
                  {index + 1}
                </td>
                <td className="flex flex-col p-4 font-normal text-[14px]">
                  {item.symbol}

                  {/* <span className="text-gray-400 text-[12px]">{item.slug}</span> */}
                </td>
                <td className="p-4 font-normal text-[14px]">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
