import { getCast } from 'api/moviesAPI';
import { Cast } from 'components/Cast/Cast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CastPage = () => {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastData = async () => {
      try {
        const { cast } = await getCast(movieId);
        setCastData(cast);
      } catch (error) {
        console.log(error);
      }
    };
    movieId && getCastData();
  }, [movieId]);

  return castData && <Cast data={castData} />;
};
