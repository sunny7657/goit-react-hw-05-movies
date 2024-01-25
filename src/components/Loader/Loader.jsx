import Loader from 'react-js-loader';

export const AppLoader = () => {
  return (
    <div className="Loader">
      <Loader
        type="spinner-cub"
        bgColor="transparent"
        color="black"
        size={100}
      />
    </div>
  );
};
