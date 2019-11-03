import React, { Component } from 'react';
import StyledButton from './StyledButton';

const texts = [
    ['Text 1'],
    ['Text 2'],
    ['Text 3'],
    ['Text 4'],
  ];
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clickedText: []
      };
    }
    
    handleClick = (i) => {
          this.setState({ clickedText: texts[i] });
    };
  
    render() {
      const { clickedText } = this.state;
      return (
        <div>
          {texts.map((text, i) => 
            <StyledButton key={i} onClick={() => this.handleClick(i)}>Click me {i + 1}</StyledButton>
          )}
          {clickedText.length > 0 && <p>I clicked on button with text:</p>}
          <ul>
            {clickedText.map((t, i) => (
              <li key={`text-${i}`}>{t}</li>
            ))}
         </ul>
        </div>
      );
    }
  }
  
export default App