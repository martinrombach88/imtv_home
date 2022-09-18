import { useLang } from "../Header/LangContext";
import "./About.css";

const AboutStaffName = ({ name, setProfile }) => {
  const lang = useLang();

  const infoListKR = (
    <ul>
      <li>{name.infoKR1}</li>
      <li>{name.infoKR2}</li>
      <li>{name.infoKR3}</li>
      <li>{name.infoKR4}</li>
      <li>{name.infoKR5}</li>
      <li>{name.infoKR6}</li>
      <li>{name.infoKR7}</li>
      <li>{name.infoKR8}</li>
      <li>{name.infoKR9}</li>
      <li>{name.infoKR10}</li>
    </ul>
  );

  const infoListENG = (
    <ul>
      <li>{name.infoENG1}</li>
      <li>{name.infoENG2}</li>
      <li>{name.infoENG3}</li>
      <li>{name.infoENG4}</li>
      <li>{name.infoENG5}</li>
      <li>{name.infoENG6}</li>
      <li>{name.infoENG7}</li>
      <li>{name.infoENG8}</li>
      <li>{name.infoENG9}</li>
      <li>{name.infoENG10}</li>
    </ul>
  );

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
