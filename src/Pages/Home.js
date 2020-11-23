import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Giphy from '../Components/Giphy';
import Loading from '../Components/Loading';

export default function Home() {
  const API_KEY = process.env.REACT_APP_GIP_API_KEY;
  const trendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=`;
  const searchEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=`;

  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  function handleOnChange(event) {
    setSearchTerm(event.target.value);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    if (searchTerm) {
      const response = await fetch(
        `${searchEndpoint}${API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`
      );

      const giphyData = await response.json();

      setGiphy(giphyData.data);

      setSearchTerm('');
    }
  }

  // fetch data from the api
  async function fetchGiphy() {
    const response = await fetch(`${trendingEndpoint}${API_KEY}&limit=25`);

    const giphyData = await response.json();

    setGiphy(giphyData.data);
  }

  // useEffect runs once like componentDidMount
  useEffect(() => {
    fetchGiphy();
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <header className="header">
        <h1>Giphy App</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </ul>
      </header>
      <div className="container">
        {giphy.map((giphy) => (
          <Giphy key={giphy.id} {...giphy} />
        ))}
      </div>
    </>
  );
}
