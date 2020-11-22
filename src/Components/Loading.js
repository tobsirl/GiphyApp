import React, { useState, useEffect } from 'react';

export default function Loading({ text = 'Loading' }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    let id = window.setTimeout(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${text}.`;
      }, 300);
    });

    return () => {
      window.clearTimeout(id);
    };
  }, [text]);

  return (
    <div className="container">
      <h1 className="text-center">{content}</h1>
    </div>
  );
}
