const HomeWrapper = (props) => {
  return (
    <>
      <div className="col-xl-2 col-lg-3 d-none d-lg-block">
        {props.children}
      </div>
    </>
  );
};

export { HomeWrapper };
