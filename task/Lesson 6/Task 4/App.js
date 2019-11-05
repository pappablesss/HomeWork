import React, { Component } from 'react';
import StyledButton from './StyledButton';


class App extends React.Component{
    constructor(){
        super()
        this.state={
            min: 1,
            max: 100,
            randomBetween: null,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const{min,max}=this.state
        let randomNumber = Math.floor(min + Math.random()*(max + 1 - min))

        this.setState({randomBetween:randomNumber})
      
    }

    shouldComponentUpdate(nextProps, nextState) {
        const{randomBetween}=this.state
     if (nextState.randomBetween % 2 === 0){
         this.setState({randomBetween:++nextState.randomBetween})
         return true
        }
    else if (nextState.randomBetween % 2 === 1){
         return true
     }
        return false
    }
        
    render(){
        return(
            <div>
                <h1>{this.state.randomBetween}</h1>
                
                <StyledButton onClick={this.handleClick} >change me!</StyledButton>
                
            </div>
        )
    }
    
}
export default App


