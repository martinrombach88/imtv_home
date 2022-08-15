// import { useRef } from "react";
// import { useLang } from "../Header/LangContext";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import ContactConsent from "./ContactConsent";

// import "./Contact.css";

// const ContactInquiry = () => {
//   const lang = useLang();
//   const form = useRef();

//   return (
//     <div className="scroll">
//       <Header headerStyle={"header initialPos"} />
//       <div className="contact">
//         <div className="contact__FormHeader">
//           <h2>{lang ? "제휴 문의" : "PARTNERSHIP INQUIRY"}</h2>
//         </div>

//         <div className="contact__FormInfo">
//           <p>
//             {lang
//               ? "비디오 제작 비즈니스의 파트너가 되고 싶으십니까?"
//               : "Interested in becoming a partner in the video production business?"}
//           </p>
//           <p>
//             {lang
//               ? "아래 양식을 작성하고 회사에 대해 알려주십시오."
//               : "Please fill out the form below and tell us about your company."}
//           </p>
//         </div>
//         {/* ref={form} onSubmit={sendEmail} */}
//         <form>
//           <div className="contact__formDiv">
//             <div className="contact__FormField">
//               <p>
//                 <label htmlFor="company">
//                   {lang ? "회사 이름." : "Company Name"}
//                 </label>
//               </p>
//               <input type="text" name="company" className="form-control" />
//             </div>
//             <div className="contact__FormField">
//               <p>
//                 <label htmlFor="name">{lang ? "성함." : "Your Name"}</label>
//               </p>
//               <input type="text" name="name" className="form-control" />
//             </div>
//             <div className="contact__FormField">
//               <p>
//                 <label htmlFor="title">{lang ? "제목" : "title"}</label>
//               </p>
//               <p className="contact__Label">
//                 {lang
//                   ? "회사 내 직위를 입력하세요."
//                   : "Please enter your title in the company"}
//               </p>
//               <input type="title" name="title" className="form-control" />
//             </div>

//             <div className="contact__FormField">
//               <p>
//                 <label htmlFor="phone">
//                   {lang ? "연락처" : "Contact Number"}
//                 </label>
//               </p>
//               <input type="phone" name="phone" className="form-control" />
//             </div>
//             <div className="contact__FormField">
//               <p>
//                 <label htmlFor="email">{lang ? "이메일" : "Email"}</label>
//               </p>
//               <input type="email" name="email" className="form-control" />
//             </div>
//             <div className="contact__FormField">
//               <p>
//                 <label htmlFor="field">
//                   {lang ? "협력 관계" : "Partnership"}
//                 </label>
//               </p>
//               <p className="contact__Label">
//                 {lang
//                   ? "파트너가 되고 싶은 분야를 선택하세요."
//                   : "Please choose the field you would like to partner with"}
//               </p>
//               <select name="field" className="form-select">
//                 <option selected value="select">
//                   {lang ? "옵션을 선택해주세요" : "Please select an option"}
//                 </option>
//                 <option value="drama">{lang ? "드라마" : "drama"}</option>
//                 <option value="documentary">
//                   {lang ? "다큐멘터리" : "documentary"}
//                 </option>
//                 <option value="television">
//                   {lang ? "테레비전" : "television"}
//                 </option>
//                 <option value="other">{lang ? "다른" : "other"}</option>
//               </select>
//             </div>
//             <div className="contact__FormField mb-3">
//               <label for="attachment" class="form-label">
//                 {lang ? "첨부 파일입니다." : " Attachment"}
//               </label>
//               <input class="form-control" type="file" name="attachment" />
//             </div>
//           </div>

//           <div className="contact__Data">
//             <div className="overflow-auto contact__DataPolicy">
//               <ContactConsent />
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 name="consent"
//                 value=""
//                 id="flexCheckDefault"
//                 required
//               />

//               <label className="form-check-label" for="flexCheckDefault">
//                 {lang
//                   ? "개인정보 수집 및 이용에 동의합니다."
//                   : "I agree to the collection and use of personal information."}
//               </label>
//             </div>
//           </div>
//           <div>
//             <div className="contact__FormSubmit">
//               <input
//                 className="btn btn-secondary"
//                 type="submit"
//                 value={lang ? "제출해요" : "Submit"}
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactInquiry;
