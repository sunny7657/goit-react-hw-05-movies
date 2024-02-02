import { BtnStyled } from 'components/Button/Button.styled';
import { useState } from 'react';
import * as api from 'api/moviesAPI';

export const MoviesPage = () => {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        required
        placeholder="Search film"
        value={value}
        onChange={handleInputChange}
      />

      <BtnStyled type="submit">Search</BtnStyled>
    </form>
  );
};
