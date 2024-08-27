import { Config } from "../../../Utils/config";
import {Link} from "react-router-dom";

export const Banner = ({src,alt,index}) => {
  return <>
      <div className="banner__item mb-20 w-img">
        <Link to={`/product-details/${index+1}`}>
          <img src={Config.banner + src} alt={alt} />
        </Link>
      </div>
    </>
};