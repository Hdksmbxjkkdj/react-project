
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
export const BtnPrint = () => {
    // function PrintPage(){
        function handlePrint(){
            window.print()
        }

    // }
  return (
    <>
    <li  onClick={handlePrint} >
      <a href="javascript:void(0)" title="پرینت"
      >
        <FontAwesomeIcon
          icon={faPrint}
        ></FontAwesomeIcon>
      </a>
      </li>
    </>
  );
};
