import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simlate a delay
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (

    <div>
      {loading ? (
        <div className="loader__spinner">Loading...</div>
      ) : (
        <div>
          <h1>Content loaded!</h1>
          <p>Lorem ipsum laurel bla bla bla</p>
        </div>
      )}
    </div>
  );
};

export default Loader;