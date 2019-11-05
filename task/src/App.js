import React from "react";
import Todo from "./todo"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            textField:'',
            todos:[],
        };
    }
    
    updateTextField(textField){
        this.setState({ textField: textField.target.value})
    }


    render(){
        return(
            <div className="container">
                <div className="Header">Todo App</div>
                <div className="btn">++</div>
                <input type="text"
                className="textField"
                value={this.state.textField}
                onChangeField={textField => this.updateTextField(textField)}
                />
            </div>

        );
    }
   
    

  
    

}
export default App