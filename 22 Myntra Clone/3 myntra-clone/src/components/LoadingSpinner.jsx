const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center sppiner">
      <div className="spinner-border" style={{ width: "4rem", height: "4rem", margin: "20%" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
