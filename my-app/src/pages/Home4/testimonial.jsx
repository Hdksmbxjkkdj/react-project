import { Config } from "../../Utils/config";
const Testimonial = (props) => {
    console.log(props.name);
  return (
    <>
      <div class="testimonial__item">
        <div class="testimonial__des">
          <div class="testimonial__quote">
            <span>
              <i class="fas fa-quote-left"></i>
            </span>
          </div>
          <p>
            {props.text}
          </p>
        </div>
        <div class="testimonial__info">
          <div class="testimonial__avater">
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