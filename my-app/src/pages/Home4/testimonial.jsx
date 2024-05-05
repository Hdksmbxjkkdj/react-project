import { Config } from "../../Utils/config";
const Testimonial = (props) => {
    console.log(props.name);
  return (
    <>
      <div className="testimonial__item">
        <div className="testimonial__des">
          <div className="testimonial__quote">
            <span>
              <i className="fas fa-quote-left"></i>
            </span>
          </div>
          <p>
            {props.text}
          </p>
        </div>
        <div className="testimonial__info">
          <div className="testimonial__avater">
            <img src={Config.testimonial+props.pic} alt="" />
          </div>
          <h4>{props.name}</h4>
          <span>{props.job}</span>
        </div>
      </div>
    </>
  );
};

export {Testimonial};