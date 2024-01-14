import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:3002/api/autori';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <h1>Home</h1>
      {data && (
        <div>
          <h2>Data from Backend:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;