import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuoteBox from "../components/QuoteBox";
import axios from "axios";

export default function AuthorQuotes(props) {
  const { author } = useParams();
  const [quoteArray, setQuoteArray] = useState([]);

  useEffect(() => {
    let authorQuotes = async () => {
      await axios
        .get(
          `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
        )
        .then((response) => {
          setQuoteArray(response.data.data);
        });
    };
    authorQuotes();
  }, [author]);

  return (
    <div>
      <Link to="/">
        <div className=" lg:mt-10 mt-6 p-3 hover:bg-slate-200 hover:rounded-md inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </div>
      </Link>

      <h1 className="text-4xl my-4 group-hover:text-white mt-8">{author}</h1>
      <div className="ml-14 lg:ml-[18rem]">
        {quoteArray.map((quote) => {
          return <QuoteBox quote={quote.quoteText} />;
        })}
      </div>
    </div>
  );
}
