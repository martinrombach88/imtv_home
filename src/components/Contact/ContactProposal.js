import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactConsent from "./ContactConsent";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import { useRef } from "react";
import "./Contact.css";

const ContactProposal = () => {
  const lang = useLang();
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_09p1a4j",
        "template_g3bos26",
        form.current,
        "FYYZqMNi8ET9baB-j"
      )
      .then(
        (result) => {
          navigate("/submitted");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="scroll">
      <Header headerStyle={"header initialPos"} />
      <div className="contact">
        <div className="contact__FormHeader">
          <h2>{lang ? "기획안·시나리오 접수" : "PROJECT/SCENARIO PROPOSAL"}</h2>
        </div>

        <div className="contact__FormInfo">
          <p className="contact__InfoHeader">
            {lang ? "서류 제출:" : "Submission of documents:"}
          </p>
          <p>
            {lang
              ? "제안 또는 시나리오의 시놉시스 및 대본(필수) ※"
              : "Synopsis and script of a proposal or scenario (required) ※"}
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="contact__formDiv">
            <div className="contact__FormField">
              <p>
                <label htmlFor="formType">
                  {lang ? "제안 또는 시나리오입니다." : "Proposal or Scenario"}
                </label>
              </p>
              <select name="formType" className="form-select">
                <option defaultValue="select">
                  {lang ? "옵션을 선택하십시오." : "Please select an option"}
                </option>
                <option defaultValue="proposal">
                  {lang ? "제안" : "Proposal"}
                </option>
                <option defaultValue="scenario">
                  {lang ? "시나리오" : "Scenario"}
                </option>
              </select>
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="name">{lang ? "성함." : "Name"}</label>
              </p>
              <input type="text" name="name" className="form-control" />
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="birthday">
                  {lang ? "생년월일." : "Birthday"}
                </label>
              </p>

              <input type="date" name="birthday" className="form-control" />
            </div>

            <div className="contact__FormField form-check">
              <div className="contact__GenderField">
                <label htmlFor="gender">{lang ? "성별" : "Gender"}</label>
              </div>
              <div className="form-check form-check-inline">
                <label htmlFor="male">{lang ? "남자" : "male"}</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  defaultValue="Male"
                  className="form-check-input"
                />
              </div>
              <div className="form-check form-check-inline">
                <label htmlFor="female">{lang ? "여자" : "female"}</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  defaultValue="Female"
                  className="form-check-input"
                />
              </div>
              <div className="form-check form-check-inline">
                <label htmlFor="neutral">{lang ? "중립" : "neutral"}</label>
                <input
                  type="radio"
                  id="neutral"
                  name="gender"
                  defaultValue="Neutral"
                  className="form-check-input"
                />
              </div>
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="email"> {lang ? "이메일" : "Email"}</label>
              </p>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>

            <div className="contact__FormField mb-3">
              <label htmlFor="plan">{lang ? "계획안" : "Plan"}</label>
              <textarea
                className="form-control"
                name="plan"
                id="plan"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="contact__FormField mb-3">
              <label htmlFor="scenario" className="form-label">
                {lang ? "시나리오" : "Scenario"}
              </label>
              <textarea
                className="form-control"
                name="scenario"
                id="scenario"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="contact__FormField mb-3">
              <label htmlFor="extra" className="form-label">
                {lang ? "기타" : "Additional"}
              </label>
              <textarea
                className="form-control"
                name="extra"
                id="extra"
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div className="mb-3 contact__FormField">
              <label htmlFor="summary" className="form-label">
                {lang ? "요약 및 PR." : "Summary and Extra Information"}
              </label>
              <textarea
                className="form-control"
                rows="3"
                name="summary"
              ></textarea>
            </div>
          </div>
          <div className="contact__Data">
            <div className="overflow-auto contact__DataPolicy">
              <ContactConsent />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="consent"
                defaultValue=""
                id="flexCheckDefault"
              />

              <label className="form-check-label" htmlFor="flexCheckDefault">
                {lang
                  ? "개인정보 수집 및 이용에 동의합니다."
                  : "I agree to the collection and use of personal information."}
              </label>
            </div>
          </div>
          <div>
            <div className="contact__FormSubmit">
              <input
                className="btn btn-secondary"
                type="submit"
                defaultValue={lang ? "제출" : "Submit"}
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactProposal;
