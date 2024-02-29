import React, { useState } from "react";
const Dropdown=()=>{

    const statuses = ["In progress", "Done"];
    const [toggle,setToggle]=useState(false);
    const [value,setvalue]=useState("Todo")

    return(
    <div className="dropdown">
    <div className="button_dropdown" onClick={()=>setToggle(!toggle)} role="button"> {value}
     <span>▼</span>
     </div>
    <div className="dropdown_container">
    {
        toggle && statuses && statuses.map((item,key)=>{
            return <div onClick={(e)=>setvalue(e.target.textContent)} className="dropdown_item" key={item}>{item}</div>
        })
     }
    </div>
    


 </div>
    )
}

export default React.memo(Dropdown);