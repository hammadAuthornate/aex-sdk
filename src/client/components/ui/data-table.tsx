import React from 'react';

export default function Table({
  onRowClick,
}: {
  onRowClick?: (id: number) => void;
}) {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="overflow-x-auto w-95/100">
        <table className="table-fixed w-full border-collapse text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="w-16 p-3 font-normal">#</th>
              <th className="p-3 font-normal">Name</th>
              <th className="p-3 font-normal">Price</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: "Ethereum", slug: "ETH", price: "$7,890" },
              { id: 2, name: "Bitcoin", slug: "BTC", price: "$45,000" },
              { id: 3, name: "Solana", slug: "SOL", price: "$140" },
            ].map((item) => (
              <tr
                key={item.id}
                onClick={() => onRowClick?.(item.id)}
                className="border-b border-gray-300 transition-colors duration-200 hover:bg-gray-100"
              >
                <td className="p-4 font-normal text-gray-400 text-[14px]">
                  {item.id}
                </td>
                <td className="flex flex-col p-4 font-normal text-[14px]">
                  {item.name}

                  <span className="text-gray-400 text-[12px]">{item.slug}</span>
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
