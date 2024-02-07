import { Divider, List } from '@mui/joy';
import { GridItem } from 'components/GridItem/GridItem';

export const Grid = ({ data }) => {
  return (
    <>
      <Divider />
      <List>
        {data.map(({ title, id }) => (
          <GridItem title={title} key={id} id={id} />
        ))}
      </List>
    </>
  );
};
