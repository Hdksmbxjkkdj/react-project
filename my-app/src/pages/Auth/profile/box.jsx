export const Box = (props) => {
  return (
    <>
      <div className={`box show-cart ${props.item.bg}`}>
        <div className="box-body">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <div className="date mb-5"><p className=" mb-0 fs-18 text-fade l-h-n text-light">{props.item.title}</p></div>
              <h2 className="my-0 fw-700">{props.item.number}</h2>
            </div>
            <div className="text-center">
              <input
                className="knob"
                data-width="90"
                data-height="90"
                data-angleOffset={props.item.val}
                data-linecap="round"
                data-fgColor={props.item.clr}
                value={props.item.val}
                data-displayInput="false"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
