import React from 'react';

export default function RandomGiphy({ type, id }) {
  return (
    <div className="randomGiphy">
      <p>{type}</p>
      <p>{id}</p>
    </div>
  );
}
