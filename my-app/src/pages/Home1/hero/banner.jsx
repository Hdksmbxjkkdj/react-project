import { Config } from "../../../Utils/config";

export const Banner = ({src}) => {
  return <>
      <div className="banner__item mb-20 w-img">
        <a href="product-details.html">
          <img src={Config.banner + src} alt="" />
        </a>
      </div>
    </>
};