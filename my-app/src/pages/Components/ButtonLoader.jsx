export const ButtonLoader = ({bg,children}) => {
    return (
        <button className="btn" type="button" disabled style={{opacity:"1",backgroundColor:bg}}>
        <span className="spinner-border spinner-border-sm" style={{marginRight:".5rem"}} aria-hidden="true"></span>
        <span role="status">{children}</span>
      </button>      
    );
  };
  