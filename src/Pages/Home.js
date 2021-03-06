import React, { useState, useEffect } from 'react';
import Giphy from '../Components/Giphy';
import Loading from '../Components/Loading';
import Navbar from '../Components/Navbar';

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
      <Navbar />
      <div className="search">
        <form onSubmit={handleOnSubmit}>
          <input
            className="search__input"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </div>
      <div className="container flex">
        {giphy.map((giphy) => (
          <Giphy key={giphy.id} {...giphy} />
        ))}
      </div>
    </>
  );
}
