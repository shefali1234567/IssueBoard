import { useEffect, useState } from "react";
import Issue from "./Issue";

const IssueBoard=()=>{

    const [issueData,setIssueData]=useState([]);
    const subtasks = [11, 12, 13, 14, 15, 16, 17, 18];
 
    const issueDataObj={
    id: 1,
    title: "sit amet erat nulla tempus vivamus",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    assignee: "Nelli Bielfeld",
    status: "In progress",
    subtasks: subtasks
  
    }
   const issueObj={...issueDataObj
   }
const getIssue = async () =>
  Promise.resolve(issueObj,);

  const fetchIssueData=async ()=>{
    const issueD=await getIssue();
    console.log("issueD",issueD);
    setIssueData([...issueData,issueD] );
  }

  useEffect( ()=>{
    fetchIssueData();
        
  },[])
  console.log(issueData);

    return(
        <div className="MainContainer">
           { issueData.map((item)=>{
                       return  <Issue key={item.id} item={item} />   

           })
            
           }
        </div>
    )
}

export default IssueBoard;