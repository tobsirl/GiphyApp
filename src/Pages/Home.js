import React, { useState, useEffect } from 'react';
import Giphy from '../Components/Giphy';
import Loading from '../Components/Loading';

export default function Home() {
  const API_KEY = process.env.REACT_APP_GIP_API_KEY;

  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="container">
      {giphy.map((giphy) => (
        <Giphy key={giphy.id} {...giphy} />
      ))}
    </div>
  );
}
