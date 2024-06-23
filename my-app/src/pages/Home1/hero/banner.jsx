import { Config } from "../../../Utils/config";
import {Link} from "react-router-dom";

export const Banner = ({src}) => {
  return <>
      <div className="banner__item mb-20 w-img">
        <Link to="/product-details/5">
          <img src={Config.banner + src} alt="" />
        </Link>
      </div>
    </>
};