import { useLang } from "../Header/LangContext";

const ContactConsent = () => {
  const lang = useLang();
  if (lang) {
    return (
      <>
        <p> 개인정보 수집 및 이용 동의 </p>
        <p>
          본인은 귀사에 기획안/시나리오를 제출함에 따라 [개인정보 보호법]제15조
          및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데
          동의합니다.
        </p>
        <p>수집하는 개인정보항목 </p>
        <p>
          {" "}
          ■ 개인정보의 수집 및 이용목적 (주)아이엠티브이는 수집한 개인정보를
          다음의 목적을 위해 활용합니다.- 기획안/시나리오 검토를 위한 상담용
          이외 정보 활용은 없습니다 - 개인정보 수집방법 : 홈페이지
        </p>
        <p>
          ■ 개인정보의 보관 및 이용 기간 - 귀하의 개인정보를 다음과 같이
          보관하며, 수집, 이용 및 제공목적이 달성된 경우 [개인정보 보호법]
          제21조에 따라 처리합니다.{" "}
        </p>{" "}
      </>
    );
  } else {
    return (
      <>
        <p> Consent to allow collection and use of personal information: </p>
        <p>
          In accordance with Articles 15 and 17 of the Personal Information
          Protection Act, I submit a proposal/scenario to IMTV and I agree to
          the collection and use of provided personal information with the
          contents below.
        </p>
        <p>Personal information items that we collect: </p>
        <p>
          IMTV Co., Ltd. is collecting the following personal information to
          receive planning proposals/scenarios. - Collection items: name, date
          of birth, gender, contact information, e-mail, service usage history,
          access log, cookie, access IP information - Personal information
          collection method: homepage
        </p>
        <p>
          ■ Purpose of collecting and using personal information IMTV Co., Ltd.
          utilizes the collected personal information for the following
          purposes. - There is no use of information other than consultation for
          planning/scenario review.
        </p>
        <p>
          ■ Period of storage and use of personal information - Your personal
          information will be kept as follows, and if the purpose of collection,
          use, and provision is achieved, it will be processed in accordance
          with Article 21 of the Personal Information Protection Act.
        </p>
      </>
    );
  }
};

export default ContactConsent;
