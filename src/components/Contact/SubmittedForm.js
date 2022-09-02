import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Contact.css";
const SubmittedForm = () => {
  return (
    <>
      <Header headerStyle={"header"} />
      <div className="submitted">
        <p>Form Submitted</p>
        <a href="/imtv_home/">Return To Home</a>
      </div>

      <Footer />
    </>
  );
};

export default SubmittedForm;
