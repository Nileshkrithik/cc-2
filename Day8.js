

import React,{useState}from "react";
import { useEffect } from "react";


export default function Day81() {
    const[msg,setmsg]=useState("Hello User,learning React...?")
  
   useEffect(()=>{
        console.log('use Effect hook called..');
        setTimeout(()=>{
            setmsg("GOOD LEARN HOOKS");
        },2000)
    })
    return (
    <div><p><b>{msg}</b></p></div>
  )
}
