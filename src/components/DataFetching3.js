import React, { useState } from "react";
import axios from "axios";

function DataFetching3() {
    const [place,setPlace]=useState('')

    const getZip=()=>{

  axios
    .get("http://api.zippopotam.us/GB/AB1")
    .then((res) => {
      console.log(res.data.places);
      setPlace(res.data.places)
    })
    .catch((err) => {
      console.log(err);
    });


    }

  return (
    <div>
      <button onClick={getZip}>Get Zip</button>
    </div>
  );
}

export default DataFetching3;
