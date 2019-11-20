import request from "../Requests/axiosRequest";
import React from "react";

const url = "https://jsonplaceholder.typicode.com/photos";

export default (Component) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filtered: []
      };
    }
    componentDidMount() {
        request(url)
          .then((response) => {
            const filter = response.filter((photo) => photo.albumId === 1);
            this.setState({
              filtered: filter,
            });
          });
      }

      render() {
        const { filtered } = this.state;
        return (
          <Component {...this.props} filtered={filtered} />
        );
      }
    };