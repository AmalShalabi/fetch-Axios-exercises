import React, {useState} from 'react'
import axios from 'axios'

function FetchingDogs() {
const [user,setUser]=useState('')

const getDog=()=>{

    axios
      .get("https://random.dog/woof.json")
      .then((res) => {
        console.log(res.data.url);
        setUser(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });

}


  return (
    <div >
      <h1 style={{
          color: "blue",
          textAzlign: "center",
          margin:"1em 0"}}>API For Random Dogs</h1>
      <img src={user} width="450px" height="450px" />
      <br></br>
      <button  style={{
          color: "white",
          textAzlign: "center",
          backgroundColor: "blue",
          border: "none",
          padding: "0.8em 0.5em",
          cursor: "pointer"
        }} onClick={getDog}>Get Dog</button>
    </div>
  );
}

export default FetchingDogs