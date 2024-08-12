import GridItem from 'components/GridItem/GridItem';
import { GridContainer } from './GridContainer.styled';

const Grid = ({ data }) => {
  return (
    <GridContainer>
      {data.map(({ title, poster_path, release_date, vote_average, id }) => (
        <GridItem
          title={title}
          poster_path={poster_path}
          release_date={release_date}
          vote_average={vote_average}
          key={id}
          id={id}
        />
      ))}
    </GridContainer>
  );
};

export default Grid;
