import { useEffect } from "react";

const ProgressWrap = () => {
  useEffect(() => {
    window?.$(window).on("scroll", function (event) {
      if (window?.$(this).scrollTop() > 600) {
        window?.$("#scroll").fadeIn(200);
      } else {
        window?.$("#scroll").fadeOut(200);
      }
    });
    window?.$("#scroll").on("click", function (event) {
      event.preventDefault();
      window?.$("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });
  }, []);
  return (
    <div className="progress-wrap" id="scroll">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <i className="fa fa-arrow-up"></i>
    </div>
  );
};

export { ProgressWrap };
