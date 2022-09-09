import Spinner from "react-bootstrap/Spinner";
import "./HomeSpinner.css";

function HomeSpinner() {
  return (
    <>
      <div className="homeSpinner snapComponent">
        <Spinner animation="border" variant="info" />
        <h6>Loading</h6>
      </div>
    </>
  );
}

export default HomeSpinner;
