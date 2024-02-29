import { useState } from "react";
import Dropdown from "./Dropdown";
import Subtask from "./Subtask";


const Issue=({item})=>{

    return(
        <>
         <div className="container">
         <h2>{item.title}</h2>
         <Dropdown item={item} />
         </div>
         <Subtask/>
        </>
    )
}

export default Issue;