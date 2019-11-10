import React from "react"
import "./style.css"
const notifications = [
    {
      key: 1,
      text: 'Welcome user101',
      notificationType: 'info'
    },
    {
      key: 2,
      text: 'You have been banned',
      notificationType: 'error'
    },
    {
      key: 3,
      text: 'New friend request',
      notificationType: 'info'
    },
    {
      key: 4,
      text: 'You are about to exceed your usage limit',
      notificationType: 'warning'
    },
    {
      key: 5,
      text: 'Free trial will soon expire',
      notificationType: 'warning'
    },
    {
      key: 6,
      text: 'Token expired',
      notificationType: 'error'
    },
  ];
  
  
  const Info = ({ text }) => <p className="info">{text}</p>;
  const Warning = ({ text }) => <p className="warning">{text}</p>;
  const Error = ({ text }) => <p className="error">{text}</p>;
  
  function Notification({ notificationType, text }) {
    switch (notificationType) {
      case 'info':
        return <Info text={text} />;
      case 'warning':
        return <Warning text={text} />;
      case 'error':
        return <Error text={text} />;
      default:
        return null;
    }
  }

  
  
  
  class App extends React.Component {
    render() {
      return (
        <div>
          <h2>User List</h2>
          { /* =============== TASK 1 ====================
             Loop over the array of notifications and pass them as props into <Notification />
          */}
           {
              notifications.map((props)=> <Notification key={props.key} text={props.text} notificationType={props.notificationType} />)    
          }
        </div>
      )
    }
  }
  
  
export default App