import { Config } from "../../../Utils/config";
import { useEffect,useState } from "react";
const Banner = (src) => {
  const [img,setimg]=useState("");
  return (
    <>
    {
      useEffect(()=>{
        setimg(src);
      },[])
    }
    {
      // console.log(img)
    }
      <div class="banner__item mb-20 w-img">
        <a href="product-details.html">
          <img src={Config.banner + "banner-1.jpg"} alt="" />
        </a>
      </div>
      {
        // console.log(Config.banner+img)
      }
    </>
  );
};

export { Banner };
