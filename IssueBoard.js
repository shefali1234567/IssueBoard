import { useContext, useEffect, useState } from "react";
import Issue from "./Issue";
import { SubtaskContext } from "../AppContext";


const IssueBoard=()=>{


    const [issueDetails,setIssuedetails]=useState([]);
  const subtasks=useContext(SubtaskContext);
    const issueObj={
        id: 1,
        title: "sit amet erat nulla tempus vivamus",
        description:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        assignee: "Nelli Bielfeld",
        status: "In progress",
        subtasks: subtasks
      }

    const getIssue = async () =>{
    return Promise.resolve(issueObj);

    }
  
    const fetchIssueData=async ()=>{
     const issueData=await getIssue();
     console.log(issueData);
     setIssuedetails([...issueDetails,issueData]);

    }

    useEffect(()=>{
      fetchIssueData();
    },[])


    return(
        <div className="Main_Conatiner">
            {  issueDetails && issueDetails.length>0 && issueDetails.map((item,index)=>{
               return <Issue item={item} key={item.id}/>
            })

            }

        </div>
    )
}

export default IssueBoard;