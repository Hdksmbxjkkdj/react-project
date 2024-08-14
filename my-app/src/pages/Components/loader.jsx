export const Loader = ({size=4,className="spinner-border text-primary"}) => {
  return (
    <div className="text-center my-5">
      <div className={className} style={{width:`${size}rem`,height:`${size}rem`}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
