import { useLang } from "../Header/LangContext";
import "./About.css";

const AboutStaffName = ({ name, setProfile }) => {
  const lang = useLang();

  const infoListKR = <ul>
{name.infoKR.map((item) => <li>{item}</li>)}
  </ul>

  const infoListENG = <ul>
  {name.infoENG.map((item) => <li>{item}</li>)}
    </ul>

  const fullProfileKR = (
    <div>
      <h2 className="aboutStaff__ContentHeader">{name.nameKR}</h2>
      <h2>{name.titleKR}</h2>
      {infoListKR}
    </div>
  );
  const fullProfileENG = (
    <div>
      <h2 className="aboutStaff__ContentHeader">{name.nameENG}</h2>
      <h2>{name.titleENG}</h2>
      {infoListENG}
    </div>
  );

  return (
    <div
      className="aboutStaff__Name"
      onClick={() => setProfile(lang ? fullProfileKR : fullProfileENG)}
    >
      <h5>{lang ? name.nameKR : name.nameENG}</h5>
      <h6>{lang ? name.titleKR : name.titleENG}</h6>
    </div>
  );
};

export default AboutStaffName;
