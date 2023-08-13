import React from "react";


function List(props) {
    return (<ul className="second">


        {props.st.map(st => { return (<li >{st.name}   <br/><br/> Author Name: {st.author}</li> ); })}

    </ul>);
}
export default List