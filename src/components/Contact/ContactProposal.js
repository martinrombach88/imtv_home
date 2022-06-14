import Header from "../Header/Header";
import Footer from "../Header/Footer";
import ContactConsent from "./ContactConsent";
import { useForm } from "react-hook-form";
import "./Contact.css";
import { useLang } from "../Header/LangContext";

const ContactProposal = () => {
  const lang = useLang();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formInfo = `Your Submission: \nName: ${data.name}\nDate of Birth: ${
      data.birthday
    }\nGender: ${data.gender} ${
      data.plan[0].name ? "\nPlan: " + data.plan[0].name : null
    } ${data.scenario[0].name ? "\nScenario: " + data.scenario[0].name : null}${
      data.extra[0].name ? "\nAdditional: " + data.extra[0].name : null
    }\nSummary: ${data.summary}\nPersonal Info Consent: ${data.consent}`;
    alert(formInfo);
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
            {lang ? "문서 제출:" : "Submission of documents:"}
          </p>
          <p>
            {lang
              ? "제안 또는 시나리오의 시놉시스 및 대본(필수) ※"
              : "Synopsis and script of a proposal or scenario (required) ※"}
          </p>
          <p>
            {lang
              ? "최대 파일 크기는 10MB입니다. 여러 첨부 파일을 압축하십시오. ※"
              : "Max file size is 10MB. Please compress multiple attachments. ※"}
          </p>
          <p>
            {lang
              ? "접수된 서류는 개별적으로 검토 후 회신드리겠습니다. ※"
              : "Documents received will be reviewed and responded to individually. ※"}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact__formDiv">
            <div className="contact__FormField">
              <p>
                <label htmlFor="formType">
                  {lang ? "제안 또는 시나리오입니다." : "Proposal or Scenario"}
                </label>
              </p>
              <select
                name="formType"
                {...register("formType", { required: true })}
                className="form-select"
              >
                <option selected value="select">
                  {lang ? "옵션을 선택하십시오." : "Please select an option"}
                </option>
                <option value="proposal">{lang ? "제안." : "Proposal"}</option>
                <option value="scenario">
                  {lang ? "시나리오." : "Scenario"}
                </option>
              </select>
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="name">{lang ? "성함." : "Name"}</label>
              </p>
              <input
                type="text"
                name="name"
                className="form-control"
                {...register("name", { required: true })}
              />
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="birthday"> {lang ? "생신." : "Birthday"}</label>
              </p>

              <input
                type="date"
                name="birthday"
                className="form-control"
                {...register("birthday", { required: true })}
              />
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
                  value="Male"
                  className="form-check-input"
                  {...register("gender", { required: true })}
                />
              </div>
              <div className="form-check form-check-inline">
                <label htmlFor="female">{lang ? "여자" : "female"}</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  className="form-check-input"
                  {...register("gender", { required: true })}
                />
              </div>
              <div className="form-check form-check-inline">
                <label htmlFor="neutral">{lang ? "중립적인" : "neutral"}</label>
                <input
                  type="radio"
                  id="neutral"
                  name="gender"
                  value="Neutral"
                  className="form-check-input"
                  {...register("gender", { required: true })}
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
                {...register("email", { required: true })}
              />
            </div>

            <div className="contact__FormField mb-3">
              <label htmlFor="plan">{lang ? "계획" : "Plan"}</label>
              <input
                className="form-control"
                type="file"
                id="plan"
                {...register("plan", { required: false })}
              />
            </div>

            <div className="contact__FormField mb-3">
              <label htmlFor="scenario" class="form-label">
                {lang ? "시나리오" : "Scenario"}
              </label>
              <input
                class="form-control"
                type="file"
                id="scenario"
                {...register("scenario", { required: false })}
              />
            </div>

            <div className="contact__FormField mb-3">
              <label htmlFor="extra" class="form-label">
                {lang ? "추가의" : "Additional"}
              </label>
              <input
                class="form-control"
                type="file"
                id="extra"
                {...register("extra", { required: false })}
              />
            </div>

            <div className="mb-3 contact__FormField">
              <label htmlFor="exampleFormControlTextarea1" class="form-label">
                {lang
                  ? "요약 및 추가 정보입니다."
                  : "Summary and Extra Information"}
              </label>
              <textarea
                className="form-control"
                rows="3"
                {...register("summary", { required: true })}
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
                value=""
                id="flexCheckDefault"
                {...register("consent", { required: true })}
              />

              <label className="form-check-label" for="flexCheckDefault">
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
                value={lang ? "제출해요" : "Submit"}
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
