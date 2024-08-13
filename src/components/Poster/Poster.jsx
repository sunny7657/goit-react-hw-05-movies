import React from 'react';

const Poster = ({ poster_path, width }) => {
  const defaultImg =
    'https://i.pinimg.com/736x/43/40/15/434015fb4a55358e5e14cee3564b9c44.jpg';
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
