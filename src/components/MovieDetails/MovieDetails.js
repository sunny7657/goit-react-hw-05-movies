export const MovieDetails = ({ data }) => {
  const { title, vote_average, overview, genres } = data;

  return (
    <>
      <div>
        <img src="" alt="" />
        <div>
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};
