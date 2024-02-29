import Dropdown from "./Dropdown";
import Subtask from "./Subtask";

const Issue=({item})=>{
    return(
        <>
        <div className="container">
          <h2 className="heading">{item.title}</h2>  
          <Dropdown />
        </div>
        <Subtask/>
        </>
    )
}

export default Issue;