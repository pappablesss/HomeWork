import React from 'react';
import StyledButton from './StyledButton';


class App extends React.Component{
    constructor(){
        super()
        this.state={
            names:[
            "Name 1","Name 2","Name 3","Name 4"
            ],
            currentName: null
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
         
        const randomIndex = Math.floor(+ Math.random() * (this.state.names.length))
        this.setState({currentName:this.state.names[randomIndex]})
        
    }
    render(){
        return(
            <div>
                <h1>{this.state.currentName}</h1>
                <StyledButton onClick={this.handleClick}>change name!</StyledButton>
            </div>
        )
    }
    
}
export default App