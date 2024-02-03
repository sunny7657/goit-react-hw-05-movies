import { GridItem } from 'components/GridItem/GridItem';

export const Grid = ({ trendCountries }) => {
  return (
    <ul className="TrendFilmsGallery">
      {trendCountries.map(({ original_title, id }) => (
        <GridItem title={original_title} key={id} id={id} />
      ))}
    </ul>
  );
};
