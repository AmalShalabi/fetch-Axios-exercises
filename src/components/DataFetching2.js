import React from "react";
import { useState } from "react";
import axios from "axios";

function DataFetching2() {
    const [joke,setGetJoke]=useState('')
  const getQuote = () => {
    axios
      .get('https://v2.jokeapi.dev/joke/Any')
      .then((res) => {
        console.log(res.data.setup);
        setGetJoke(res.data.setup)
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={getQuote}>Get Joke</button>
      {joke && <p>{joke}</p>}
   
    </div>
  );
}

export default DataFetching2;
