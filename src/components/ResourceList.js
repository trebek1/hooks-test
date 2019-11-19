import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(res => res.data);
      setResources(response);
    })(resource);
  }, [resource]);
  return resources;
};

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
