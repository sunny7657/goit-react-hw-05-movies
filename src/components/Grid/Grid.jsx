import { List } from '@mui/joy';
import GridItem from 'components/GridItem/GridItem';

const Grid = ({ data }) => {
  return (
    <>
      <List>
        {data.map(({ title, id }) => (
          <GridItem title={title} key={id} id={id} />
        ))}
      </List>
    </>
  );
};

export default Grid;
