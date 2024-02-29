import { useContext, useState } from "react";
import { StatusContext } from "../AppContext";

const Dropdown=()=>{

    const  [toggle,setToggle]=useState(false);
    const [value,setValue]=useState("Todo");
    const statuses=useContext(StatusContext);

    return(
        <div className="dropdown">
            <div role="button"  onClick={()=>setToggle(!toggle)} className="dropdown_button"> {value} <span>▼</span></div>
            <div className="dropdwon_content">
                {
                    toggle && statuses && statuses.length>0 && statuses.map((item,index)=>{
                        return(
                            <div  onClick={(e)=>setValue(e.target.textContent)} key={item}>{item}</div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Dropdown;