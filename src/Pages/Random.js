import React, { useState, useEffect } from 'react';
import RandomGiphy from '../Components/RandomGiphy';
import Loading from '../Components/Loading';
import Navbar from '../Components/Navbar';

export default function Random() {
  const API_KEY = process.env.REACT_APP_GIP_API_KEY;
  const randomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=`;

  const [randomGiphy, setRandomGiphy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roll, setRoll] = useState(false);

  async function fetchRandom() {
    const response = await fetch(`${randomEndpoint}${API_KEY}`);

    const randomData = await response.json();

    setRandomGiphy(randomData.data);
  }

  useEffect(() => {
    fetchRandom();
    setLoading(false);
  }, [roll]);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <div className="container flex">
        <h1>Random</h1>
        <RandomGiphy data={randomGiphy} rollDice={setRoll} roll={roll} />
      </div>
    </>
  );
}
