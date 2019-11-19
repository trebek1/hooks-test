import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(res => res.data);
      setResources(response);
    })(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;
