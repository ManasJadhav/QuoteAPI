import React from "react";

export default function QuoteBox(props) {
  return (
    <div className="w-3/4 p-6 pl-12 flex">
      <div className="w-2 bg-blue-800 mr-4"></div>
      <div className="text-start">{props.quote}</div>
    </div>
  );
}
