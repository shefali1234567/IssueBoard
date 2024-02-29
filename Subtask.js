import { useContext, useState } from "react";
import { StatusContext, SubtaskContext } from "../AppContext";

const Subtask=()=>{
    const [subtaskDetails,setSubtaskDetails]=useState([]);
    const [toggle,setToggle]=useState(false);
    const subtasks=useContext(SubtaskContext);
    const statuses=useContext(StatusContext);

    const sleep = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      };

      
      
    const getSubtasks = async () => {
        await sleep(500);
      
        return subtasks.map(id => ({
          id,
          title: `Subtask ${id}`,
          description: `Description for subtask ${id}`,
          assignee: `User ${id}`,
          status: statuses[id % 3]
        }));
      };
      const fetchButtonData=async ()=>{
        const subtaskData=await getSubtasks();
        setSubtaskDetails(subtaskData);
      }

      const hanldeButton=()=>{
        setToggle(!toggle)
        fetchButtonData();

      }

    return(
        <>
        <div className="subtasks" onClick={hanldeButton}> <span>▶</span>Show subtasks</div>
         { toggle &&  subtaskDetails && subtaskDetails.length>0 && subtaskDetails.map((item,index)=>{
            return(
                <div>{item.title}</div>
            )
         })

         }
         </>
    )
}

export default Subtask;