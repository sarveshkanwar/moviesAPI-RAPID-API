import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [endPoint, setEndPoints] = useState('');
  const [container, setContainer] = useState([]);
  const [finalPoint, setFinalPoint] = useState('');

  const fetchMe = () => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '3205a14b9cmsh5b199fa367bac03p136b8fjsn5aa1b65a4731',
        'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
      },
    };
    fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${finalPoint}&page=1`, options)
      .then((response) => response.json())
      .then((data) => {
        setContainer(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Use finalPoint as a dependency to trigger fetch when the form is submitted
  useEffect(() => {
    if (finalPoint) {
      fetchMe();
    }
  }, [finalPoint]);

  const onChangeHandler = (e) => {
    setEndPoints(e.target.value);
  };

  const submitHandler = (e) => {
     e.preventDefault();
    setFinalPoint(endPoint); // Triggers the useEffect
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type="submit">Submit</button>
      </form>

      {container.map((item, index) => (
        <div className="sarvesh" key={index}>
          <img src={item.backdrop_path} alt="" style={{ width: '400px', height: '400px' }} />
          <p className='colorAdding'>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
