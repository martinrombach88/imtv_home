import { useLang } from "../Header/LangContext";
import "./About.css";

const AboutStaffName = ({ name, setProfile }) => {
  const lang = useLang();

  const fullProfile =
    <div>
      <h2 className="aboutStaff__ContentHeader">{lang ? name?.nameKR : name?.nameENG}</h2>
      <h2>{lang ? name.titleKR : name.titleENG}</h2>
      <ul>{lang ? name.infoKR.map((item) => <li>{item}</li>) :  name.infoENG.map((item) => <li>{item}</li>)}</ul>
    </div>
  

  return (
    <div
      className="aboutStaff__Name"
      onClick={() => setProfile(fullProfile)}
    >
      <h5>{lang ? name.nameKR : name.nameENG}</h5>
      <h6>{lang ? name.titleKR : name.titleENG}</h6>
    </div>
  );
};

export default AboutStaffName;
