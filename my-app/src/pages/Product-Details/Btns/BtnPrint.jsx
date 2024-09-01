
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
      <a href="#" title="پرینت">
        <FontAwesomeIcon
          icon={faPrint}
          onClick={handlePrint}
        ></FontAwesomeIcon>
      </a>
    </>
  );
};
