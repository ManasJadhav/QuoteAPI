import React, { useState } from "react";
import { Link } from "react-router-dom";
import RandomButton from "../components/RandomButton";
import axios from "axios";

export default function QuotePage() {
  const [quote, setquote] = useState("");
  const [author, setauthor] = useState("");
  const [genre, setgenre] = useState("");
  const [loading, setLoading] = useState("Random");
  const [refreshed, setRefreshed] = useState(true);

  let RandomQuote = async () => {
    setRefreshed(false);
    setLoading("....");
    await axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => {
        setquote(response.data.data[0].quoteText);
        setauthor(response.data.data[0].quoteAuthor);
        setgenre(response.data.data[0].quoteGenre);
      });
    setLoading("Random");
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {refreshed ? (
        <h1> Click on Random to generate a new Quote</h1>
      ) : (
        <div className=" w-full lg:w-1/2 p-6 pl-12 flex">
          <div className="w-3 bg-blue-800 mr-4"></div>
          <div>{quote}</div>
        </div>
      )}
      {refreshed ? null : (
        <div className="w-full lg:w-1/3 p-6 mt-4 cursor-pointer group hover:bg-black hover:rounded-md">
          <Link to={`authorquote/${author}`}>
            <h1 className="text-5xl mb-4 group-hover:text-white">{author}</h1>
            <h3 className="text-xl text-slate-700 group-hover:text-slate-200">
              {genre}
            </h3>
          </Link>
        </div>
      )}
      <button onClick={RandomQuote}>
        <div className="mt-4 cursor-pointer">
          <RandomButton loading={loading} />
        </div>
      </button>
    </div>
  );
}
