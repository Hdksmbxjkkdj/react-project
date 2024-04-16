const Banner = (props) => {
  return (
    <>
      <div class="banner__item mb-20 w-img">
        <a href="product-details.html">
          <img src={props} alt="" />
        </a>
      </div>
    </>
  );
};

export {Banner};