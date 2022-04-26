
import { useState } from "react";
import "../App.css";
// import { Main } from "./todolist.jsx"

export const Inventory = () => {
  var [arr,setarr] = useState([])
  const [text,settext] = useState("")
  const addcart = (val) =>{
    if(val==""){
      return
    }
    setarr([...arr,{name : val,
                    status: "notchecked"}])
  }
  const func=(e)=>{
    var arr2 = []
    arr.map((el)=>{
      if(el!==e)
       arr2.push(el)
       else{
         arr2.push({"name":e.name,
       "status":"checked"})
      }

       
  })
  setarr(arr2)
                                    
}
  return (
    <div>
    <div id="main">
      <div id="input">
      <button type="submit" onClick={()=>addcart(text)}>+</button>
      <input type="text" placeholder="enter the text" onChange={(e)=>{
        settext(e.target.value)
      }}></input>
      </div>
      {/* <Main arr={arr}/> */}
      <div id="under">{arr.map((e)=>{
      if(e.status=="notchecked")
        return <div><input id="check" type="checkbox" onClick={()=>func(e)}></input>{e.name}</div>
      })}</div>
    </div>
    <div id="down">
    <div id="color">Show completed task</div>
    <div id="show">{arr.map((e)=>{
      if(e.status=="checked")
        return <div><input id="check"type="checkbox" checked></input>{e.name}</div>
    })}</div>
  </div></div>
  )
}
