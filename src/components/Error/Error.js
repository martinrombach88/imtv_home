import Header from "../../components/Header/Header.js";
import Footer from "../Footer/Footer.js";

const Error = () => {
  return (
    <>
      <Header headerStyle={"header"} />
      <div className="error">
        <p>Sorry, but something went wrong.</p>
        <a href="/">Return to Home.</a>
      </div>
      <Footer />
    </>
  );
};

export default Error;
