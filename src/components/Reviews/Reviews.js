import React, { useState } from 'react';
import InfoStyled from 'components/MovieDetails/MovieInfo.styled';
import { nanoid } from 'nanoid';

const Reviews = ({ data }) => {
  const [expandedStates, setExpandedStates] = useState(data.map(() => false));

  const toggleExpand = index => {
    setExpandedStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return data.map(({ author, content }, index) => (
    <InfoStyled
      key={nanoid()}
      style={{ padding: '20px', background: '#3bffc514', position: 'relative' }}
    >
      <h4>Author: {author}</h4>
      <p
        style={{
          width: '350px',
          overflow: expandedStates[index] ? 'visible' : 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: expandedStates[index] ? 'none' : '2',
          WebkitBoxOrient: 'vertical',
          textOverflow: expandedStates[index] ? 'unset' : 'ellipsis',
          lineHeight: '1.5em',
          maxHeight: expandedStates[index] ? 'none' : '3em',
          margin: 0,
        }}
      >
        {content}
      </p>
      <button
        style={{
          padding: '5px 10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          maxWidth: '200px',
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
        onClick={() => toggleExpand(index)}
      >
        {expandedStates[index] ? 'Hide' : 'Read Full Review'}
      </button>
    </InfoStyled>
  ));
};

export default Reviews;
