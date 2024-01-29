const Loading = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: '100vh', width: '100vw' }} // Full viewport height and width
      role='status'
    >
      <div className='spinner-grow'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
