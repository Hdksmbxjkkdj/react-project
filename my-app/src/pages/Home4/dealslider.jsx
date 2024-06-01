const DealSlider = (props) => {
  return <>
      <section className="deal__area pt-35">
        {(props?.title) && <DealHeader title={props.title}></DealHeader>}
        <div className="product__deal-2 t-nav owl-carousel">
            {props.children.map((e)=>{
                console.log(e);
                return <>
                    <div className="product__deal-item border-right-2">
                        {props.children}
                    </div>
                </>
            })}
        </div>
      </section>
    </>
};

const DealHeader = (title) => {
  return <>
      <div className="section__head section__head-2 mb-40">
        <div className="section__title">
          <h3>{title}</h3>
        </div>
      </div>
    </>
};

export { DealSlider };
