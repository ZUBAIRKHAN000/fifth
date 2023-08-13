
import "./App.css"
import Props from "./componenet/props";
import List from "./componenet/list";
import { useState } from "react";


function App() {
  
 const [student,setstudent]=useState([
  {name:'A girl in room no 105', author: "Chetan Bhagat"},
     ])


  const goals=(newgoal)=>
  {
   setstudent(student.concat(newgoal));

  }

  return (
    <div className="name" >


      
      <List st={student} />
      <Props s={goals}/>
     

    </div>
  );
}

export default App;
