import React from "react";

export default function Button({
  title,
  event,
}: {
  title: string;
  event: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className="bg-[#5B4FFF] text-white text-sm py-2 px-8 rounded-lg"
      onClick={event}
    >
      {title}
    </button>
  );
}
