import { GridItem } from 'components/GridItem/GridItem';

export const Grid = ({ data }) => {
  return (
    <ul className="TrendFilmsGallery">
      {data.map(({ title, id }) => (
        <GridItem title={title} key={id} id={id} />
      ))}
    </ul>
  );
};
