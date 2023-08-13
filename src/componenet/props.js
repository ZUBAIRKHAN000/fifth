import React, { useState } from "react";

const Props = (props)=>
{
    const [enteredname,setenteredname]=useState('');
    const [enteredtext,setenteredtext]=useState('');
   
    const handlesubmit = event =>{
        event.preventDefault();

        const newgoal={
        name: enteredname,
        author: enteredtext
        }
        setenteredtext('');
        setenteredname('');

        props.s(newgoal);

    }
    const handletext=(event)=>
    {
        setenteredtext(event.target.value);
       

    }
    const handletextt=(event)=>
    {
        setenteredname(event.target.value);

    }



return (<form className="first" onSubmit={handlesubmit}>
    <div   >
        <label>Book Name:</label> 
    <input className="f" type="text" value={enteredname} onChange={handletextt}/>
    <label>Aurthor Name:</label> 
<input className="f" type="text" value={enteredtext} onChange={handletext}/>

</div>
<button className="f" type="submit">add new book</button>
</form>
);

}
export default Props