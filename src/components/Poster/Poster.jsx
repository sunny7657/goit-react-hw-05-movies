import React from 'react';

const Poster = ({ poster_path, width }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <img
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : defaultImg
      }
      width={width}
      alt="poster"
    />
  );
};

export default Poster;
