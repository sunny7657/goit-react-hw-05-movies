import { BtnStyled } from 'components/Button/Button.styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const FormSearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(searchParams);
    setSearchParams({ query: searchQuery });
    setSearchQuery('');
  };

  // useEffect(() => {
  //   const query = searchParams.get('query');

  //   query && setSearchQuery(query);
  // }, [searchParams, searchQuery]);

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="search"
        type="text"
        placeholder="Search film"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <BtnStyled type="submit">Search</BtnStyled>
    </form>
  );
};
