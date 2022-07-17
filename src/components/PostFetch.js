import React , {useState, useEffect} from 'react'

function PostFetch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <div>
      <h1>Post API EXAMPLE</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br />
      <br />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
      <br />
      <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} /> <br />
      <br />
      <button type="button">Save New User</button>
    </div>
  );
}

export default PostFetch