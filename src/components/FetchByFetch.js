import React, {useState,useEffect} from 'react'

function FetchByFetch() {
    
    const [data, setData]=useState([]);
    useEffect(()=>{
        // loadData();
getData();
    },[]);

    // const loadData= async ()=>{
    //    await fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(res=> setData(res))
    // } 
    //    console.log(data);
async function getData() {
    const api = `https://jsonplaceholder.typicode.com/users`;
    const result= await fetch(api);
    const getResult= await result.json();
    setData(getResult)
}
  return (
    <div>
      <p> Fetch/ Async/ Await</p>
      {data.map(record=> (<div key={record.id}>{record.name}, {record.username}</div>))}
    </div>
  );
}

export default FetchByFetch