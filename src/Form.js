import React, { useState } from 'react'

export default function Form() {
    const [to,setTo] = useState("Alice");
    const [message,setMessage] = useState("Salam");


    function handleSubmit(e){
        e.preventDefault();
        setTimeout(()=>{
            alert(`You said ${message} to ${to}`)
        },1000);
    }



  return (
    <form onSubmit={handleSubmit}>
        <h1>Current Sender :  You</h1>
        <h1>Current Receiver :  {to}</h1>
        <label>To : {' '}
        <select value={to} onChange={e=>setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
            <option value="John">John</option>
        </select>
        
        </label>
        <br></br>
        <br></br>
        <textarea placeholder='Message' value={message}
        onChange={e=>setMessage(e.target.value)}>
            
        </textarea>
        <button type='submit'>Send</button>
    </form>
  )
}
