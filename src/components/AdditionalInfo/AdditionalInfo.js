import { Link } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <>
      <h4>Additional information</h4>
      <ul>
        <Link to="cast" className="additional-item">
          Cast
        </Link>
        <Link to="reviews" className="additional-item">
          Reviews
        </Link>
      </ul>
    </>
  );
};
