import { useLang } from "../Header/LangContext";

const AboutStaffName = ({ name, setProfile }) => {
  const lang = useLang();
  const infoKRSplit = name.infoKR.split("-");
  const infoENGSplit = name.infoENG.split("-");

  const infoListKR = infoKRSplit.map((info, index) => {
    return <li key={index}>{info}</li>;
  });
  const infoListENG = infoENGSplit.map((info, index) => {
    return <li key={index}>{info}</li>;
  });

  const fullProfileKR = (
    <div>
      <h2 className="about__StaffContentHeader">{name.nameKR}</h2>
      <h2>{name.titleKR}</h2>
      <ul className="about__StaffList">{infoListKR}</ul>
    </div>
  );
  const fullProfileENG = (
    <div>
      <h2 className="about__StaffContentHeader">{name.nameENG}</h2>
      <h2>{name.titleENG}</h2>
      <ul className="about__StaffList">{infoListENG}</ul>
    </div>
  );

  return (
    <div
      className="about__StaffName"
      onClick={() => setProfile(lang ? fullProfileKR : fullProfileENG)}
    >
      <h5>{lang ? name.nameKR : name.nameENG}</h5>
      <h6>{lang ? name.titleKR : name.titleENG}</h6>
    </div>
  );
};

export default AboutStaffName;
