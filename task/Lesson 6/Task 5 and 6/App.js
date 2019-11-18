import React, { Component } from 'react';
import Test from "./Test"
class Succes extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            profile:[],
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(
            (data) => {
              this.setState({
                isLoaded: true,
                profile: data
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
      render() {

        const { error, isLoaded, profile } = this.state;
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
            <div className="col">
              <h1>TEST</h1>
              <div className="Тест мепа">{profile.map(profile => 
              <Test
              key={profile.id}
              userId={profile.userId}
              title={profile.title}
              body={profile.body}
              />
              )}</div>
            </div>
          );
        }
      }
    }
    

export default Succes;