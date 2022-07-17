import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost]=useState({});
    const [id,setId]=useState(1)
    const [idFromButtonClick, setFromButtonClick]=useState(1)

    const HandelClick=()=>{
        setFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
  return (
    <div>
        <input value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={HandelClick}>Fetch Post</button>
        <div>{post.title}</div>
{/* <ul>
    {
        post.map(post=> <li key={post.id}>{post.title}</li>)
    }
</ul> */}
    </div>
  )
}

export default DataFetching