const Subtask=()=>{
    // const getSubtasks = async () => {
      
    //     return subtasks.map(id => ({
    //       id,
    //       title: `Subtask ${id}`,
    //       description: `Description for subtask ${id}`,
    //       assignee: `User ${id}`,
    //       status: statuses[id % 3]
    //     }));
    //   };

    return(
        <div className="subtask">
              <span>▶</span>Show subtasks 
        </div>
    )
}

export default Subtask;