import React, { useState } from 'react';
import InfoStyled from 'components/MovieDetails/MovieInfo.styled';
import { nanoid } from 'nanoid';
import { Button } from '@mui/joy';

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
      style={{
        padding: '20px',
        background: 'rgb(248 251 253)',
        position: 'relative',
        marginBottom: '16px',
      }}
    >
      <h4>
        <span style={{ fontWeight: 'normal' }}>Author:</span> {author}
      </h4>
      <p
        style={{
          maxWidth: '80%',
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
      <Button
        onClick={() => toggleExpand(index)}
        variant={'soft'}
        size="sm"
        style={{
          position: 'absolute',
          right: '20px',
          bottom: '20px',
        }}
      >
        {expandedStates[index] ? 'Hide' : 'Read full review'}
      </Button>
    </InfoStyled>
  ));
};

export default Reviews;
