import React, { useEffect, useState } from 'react';

const MyComponent = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Client-side only code
      fetch('/api/data')
        .then(response => response.json())
        .then(fetchedData => setData(fetchedData));
    }
  }, []);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default MyComponent;
