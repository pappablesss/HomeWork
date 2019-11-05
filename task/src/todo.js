import React from "react";

class Todo extends React.Component{

    render(){
        return(
            <div className="note" onCLick={this.props.deleteField}>
                {this.props.text}
            </div>
        )
    };
}

export default Todo