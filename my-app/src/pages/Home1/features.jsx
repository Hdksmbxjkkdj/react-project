import { useEffect, useState } from "react";
import axios from "axios"

const Features = () => {
  const [feature,setFeature] = useState();
  useEffect(()=>{
    axios.get("http://localhost:313/features").then((response)=>{
      setFeature(response);
    })
  },[])
  return (
    <>
      <section className="features__area grey-bg-2 pt-40 pb-20 pl-10 pr-10">
        <div className="container">
          <div className="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
            {feature?.data.map(function (item) {
              return (
                <>
                  <div className="col">
                    <div className="features__item features__item-last d-flex white-bg">
                      <div className="features__icon ml-15">
                        <i className={`fa ${item.icon}`}></i>
                      </div>
                      <div className="features__content">
                        <h6>{item.title}</h6>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export { Features };
