export const Box = (props) => {
    console.log(props);
  return (
    <>
      <div className="box">
        <div className="box-body">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <p className="mb-5 fs-18 text-fade l-h-n">{props.item.title}</p>
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
