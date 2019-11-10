import React from "react";
import List from "./List"
import StyledButton from "./StyledButton"

class App extends React.Component {
    state = {
      term: "",
      items: []
    };
  
    onChangeHandler = e => {
      this.setState({
        term: e.target.value
      });
    };
  
    onFormSubmitHandler = e => {
      e.preventDefault();
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term]
      });
    };
  
    onDeleteHandler = index => {
      const deleteTask = [...this.state.items];
      deleteTask.splice(index, 1);
      this.setState({
        items: deleteTask
      });
    };
    render() {
      return (
        <div className="App">
            <form onSubmit={this.onFormSubmitHandler}>
                <input
                  onChange={this.onChangeHandler}
                  value={this.state.term}
                  type="text"
                  placeholder="Add Task Here..."
                />
                <StyledButton onClick={this.onFormSubmitHandler}>ДОБАВЬ МЕНЯ</StyledButton>
            </form>
          <List deleteTask={this.onDeleteHandler} items={this.state.items} />
        </div>
      );
    }
  }
  
export default App