import React, { Component } from 'react';
import "./style.css"

class Succes extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            imageSlider:[],
            currentIamgeSlider:0,
        }
    }
    componentDidMount() {
        fetch('https://picsum.photos/v2/list')
          .then(res => res.json())
          .then(
            (data) => {
              this.setState({
                isLoaded: true,
                imageSlider: data
              });
            },
            // error handler
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      handlePrevButton(){
        let currentIamgeSlider= this.state.currentIamgeSlider;
        if(currentIamgeSlider!==0){
        this.setState({
          currentIamgeSlider:currentIamgeSlider-1
        })}
        
      }
      handleNextButton(){
        let currentIamgeSlider= this.state.currentIamgeSlider;
        if(currentIamgeSlider<=10){
        this.setState({
          currentIamgeSlider:currentIamgeSlider+1
        })
      }
       else{
         this.setState({
           currentIamgeSlider:0
         }) 
       }
      }
      render() {

        const { error, isLoaded, imageSlider, currentIamgeSlider } = this.state;
        if (error) {
          return (
            <div className="col">
              Error: {error.message}
            </div>
          );
        } else if (!isLoaded) {
          return (
            <div className="col">
              Loading...
            </div>
          );
        } else {
          return (
            <div className="container">
              <div>
                <button className="btn btn-primary btn-lg" onClick={ () => this.handlePrevButton() }>Prev</button>
                <img src={imageSlider[currentIamgeSlider].download_url}  alt="123"></img>
                <button className="btn btn-primary btn-lg" onClick={ () => this.handleNextButton() }>Next</button>
                <p>Author: {imageSlider[currentIamgeSlider].author}</p>
                
                
              </div>
            </div>
          );
        }
      }
    }
    

export default Succes;