import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = {
    resources: []
  };
  async componentDidUpdate({ resource }) {
    if (resource !== this.props.resource) {
      const resources = await axios
        .get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        .then(res => res.data);

      this.setState({
        resources
      });
    }
  }
  async componentDidMount() {
    const resources = await axios
      .get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      .then(res => res.data);

    this.setState({
      resources
    });
  }
  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
