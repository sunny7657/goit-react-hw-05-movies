import Loader from 'react-js-loader';

const AppLoader = () => {
  return (
    <div
      className="Loader"
      style={{
        position: 'fixed',
        zIndex: '1000',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <Loader
        type="spinner-cub"
        bgColor="transparent"
        color="black"
        size={100}
      />
    </div>
  );
};

export default AppLoader;
