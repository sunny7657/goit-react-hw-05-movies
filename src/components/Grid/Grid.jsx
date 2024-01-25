import { GridItem } from 'components/GridItem/GridItem';

export const Grid = ({ trendCountries }) => {
  return trendCountries.map(({ original_title }) => (
    <GridItem title={original_title} />
  ));
};
