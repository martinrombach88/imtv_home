import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";

function HomeSpinner() {
  return (
    <>
      <div className="loading snapScroll">
        <Spinner animation="border" variant="info" />
        <h6 className="loading__Text">Loading</h6>
      </div>
    </>
  );
}

export default HomeSpinner;
