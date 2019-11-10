import React from "react"

const List = (props) => (
<ul>
    {props.items.map((item, id) => (
   <li 
   key={id}
   onClick={props.deleteTask.bind(this,id)}
   >
    {item}
   </li>
    ))}
   
</ul>
)
export default List