import React from "react";

class ReportCard extends React.Component{
  constructor(){
      super()
      this.state = {
        score: 0,
      };
   
      this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    if(this.state.score===10){
      this.setState({score:0})
    }
    else{
    const scoreIncrement = this.state.score + 1
    this.setState({score:scoreIncrement})}
  }
  render(){
    let res=""
    const score=this.state.score
    if(score>=1&&score<=4){res=" Your result is poor"}
    if(score>=5&&score<=7){res=" Your result is average"}
    if(score>=8&&score<=10){res=" Your result is excellent"}
    return(
      <div>
        <p>{this.state.score}</p>
        <button type="button" className="btn btn-primary btn-sm" onClick={this.handleClick}>SCORE</button>
        <p>{res}</p>
      </div>
    )
  }
}
export default ReportCard
