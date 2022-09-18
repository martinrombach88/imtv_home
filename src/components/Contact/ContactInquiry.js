import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactConsent from "./ContactConsent";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import { useRef } from "react";
import "./Contact.css";

const ContactInquiry = () => {
  const lang = useLang();
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_09p1a4j",
        "template_hf14dkg",
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
          <h2>{lang ? "제휴 문의" : "INQUIRIES ABOUT PARTNERSHIP"}</h2>
        </div>

        <div className="contact__FormInfo">
          <p>
            {lang
              ? "(주)아이엠티브이와 드라마, 영화 등 ‌영상물 제작사업에 제휴를 원하시는 기업은 문의주시기 바랍니다."
              : "If you want to partner in the video production business, please contact us."}
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="contact__formDiv">
            <div className="contact__FormField">
              <p>
                <label htmlFor="company">
                  {lang ? "회사명." : "Company Name"}
                </label>
              </p>
              <input type="text" name="company" className="form-control" />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="name">{lang ? "성함." : "Your Name"}</label>
              </p>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="position">
                  {lang ? "직함" : "Company Position"}
                </label>
              </p>
              <input type="text" name="position" className="form-control" />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="phone">
                  {lang ? "연락처" : "Contact Number"}
                </label>
              </p>
              <input type="phone" name="phone" className="form-control" />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="email">{lang ? "이메일" : "Email"}</label>
              </p>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="field">
                  {lang ? "제휴분야" : "Partnership"}
                </label>
              </p>
              <p className="contact__Label">
                {lang
                  ? "파트너가 되고 싶은 분야를 선택하세요."
                  : "Please choose the field you would like to partner with"}
              </p>
              <select name="field" className="form-select">
                <option value="select" defaultValue>
                  {lang ? "옵션을 선택해주세요" : "Please select an option"}
                </option>
                <option value="drama">{lang ? "드라마" : "drama"}</option>
                <option value="documentary">
                  {lang ? "다큐멘터리" : "documentary"}
                </option>
                <option value="television">
                  {lang ? "텔레비전" : "television"}
                </option>
                <option value="other">{lang ? "다른" : "other"}</option>
              </select>
            </div>
            <div className="contact__FormField mb-3">
              <label htmlFor="extra" className="form-label">
                {lang
                  ? "요약 및 추가 정보입니다."
                  : "Summary/Extra Information"}
              </label>
              <textarea
                className="form-control"
                name="extra"
                id="extra"
                cols="30"
                rows="5"
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

export default ContactInquiry;
