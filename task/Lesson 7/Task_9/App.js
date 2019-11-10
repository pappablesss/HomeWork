import React from "react"
const users = [
    {
      key: 1,
      name: 'Joe',
      isAdmin: true
    },
    {
      key: 2,
      name: 'Kolia',
      isAdmin: false
    },
    {
      key: 3,
      name: 'Vlad',
      isAdmin: true
    },
    {
      key: 4,
      name: 'Sergey',
      isAdmin: true
    },
    {
      key: 5,
      name: 'Kolawole',
      isAdmin: false
    },
    {
      key: 6,
      name: 'Bill Gates',
      isAdmin: false
    },
  ];
  
  const User = (props) => {
    /* =============== TASK 2 ====================
      Display the name of the user in a <p> tag. However for each user check the value of isAdmin, if true then add this emoji '👑' to the name.
    */
   return(
   <div>
       <p>{props.name} {props.isAdmin ?'👑':null}</p>
   </div>
   )
  }
  
  class App extends React.Component {
    render() {
      return (
        <div>
          <h2>User List</h2>
          { /* =============== TASK 1 ====================
             Loop over array of users and pass them as props into <User />
          */}
          {
              users.map((props)=> <User key={props.key} name={props.name} isAdmin={props.isAdmin} />)    
          }
        </div>
      )
    }
  }
  export default App

  