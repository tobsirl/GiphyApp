import React, { useState, useEffect } from 'react';
import Giphy from '../Components/Giphy';
import Loading from '../Components/Loading';

export default function Home() {
  const API_KEY = process.env.REACT_APP_GIP_API_KEY;

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
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`
      );

      const giphyData = await response.json();

      setGiphy(giphyData.data);

      setSearchTerm('');
    }
  }

  // fetch data from the api
  async function fetchGiphy() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25`
    );

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
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="container">
        {giphy.map((giphy) => (
          <Giphy key={giphy.id} {...giphy} />
        ))}
      </div>
    </>
  );
}
