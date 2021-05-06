import React, { useState, useEffect } from 'react';
import Tourism from './Components/Tourism';
import Loading from './Components/Loading';
import Error from './Components/Error';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tourism, setTourism] = useState([]);

  const removeId = (id) => {
    const removeIds = tourism.filter((tours) => tours.id !== id);
    // update
    setTourism(removeIds);
  };

  const tourismApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      // update state
      setTourism(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    tourismApi();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <Error />
      </main>
    );
  }

  if (tourism.length === 0) {
    return (
      <main>
        <div className='title'>
          <h1>your already remove tours</h1>
          <button className='btn' onClick={tourismApi}>
            refresh page
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <Tourism tourism={tourism} removeId={removeId} />
      </main>
    </>
  );
}

export default App;
