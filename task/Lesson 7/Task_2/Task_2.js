import React from "react"
class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       expanded: false, };
  }

  onToggleButtonClick() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    const {expanded}=this.state
    return (
      <div>
        <button onClick={this.onToggleButtonClick.bind(this)}></button>
        { expanded ? this.renderDrawer():null }
      </div>
    );
  }

  renderDrawer() {
    return (
      <nav>
        <ul>
          <li><a href="#">Some link</a></li>
          <li><a href="#">Another link</a></li>
          <li><a href="#">Just one more link</a></li>
        </ul>
      </nav>
    );
  }
}


export default Drawer