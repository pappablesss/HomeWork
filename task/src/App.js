import React, { Component } from 'react';
import StyledButton from './StyledButton';

class App extends Component {
  constructor(props){
   super(props);
   this.state = {
     step: { answer: '' },
   };
   this.markAs = this.markAs.bind(this);
  }

  markAs() {
   this.setState({ step: { answer: 'done' } });
  }

  render(){
   return (
     <StyledButton
       variant="raised"
       color={(this.state.step.answer === 'done' ? 'primary' : 'default')}
       onClick={this.markAs}
      > Done
      </StyledButton>
   );
  }
}

export default App