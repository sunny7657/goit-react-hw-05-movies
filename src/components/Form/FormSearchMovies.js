import { Button, Input } from '@mui/joy';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FormSearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [, setSearchParams] = useSearchParams();

  const handleInputChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    setSearchQuery('');
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{ width: '50%', minWidth: '250px' }}
    >
      <Input
        name="search"
        type="text"
        placeholder="Search film"
        value={searchQuery}
        onChange={handleInputChange}
        endDecorator={
          <Button variant={'soft'} size="sm" type="submit">
            Search
          </Button>
        }
      />
    </form>
  );
};

export default FormSearchMovies;
