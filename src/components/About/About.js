import "./About.css";
import Header from "../Header/Header";
import Footer from "../Header/Footer";
import AboutPartners from "./AboutPartners.js";
import AboutPartnersMobile from "./AboutPartnersMobile";
import AboutPartnersMobile2 from "./AboutPartnersMobile2";
import AboutStaff from "./AboutStaff.js";
import SnapScroll from "../SnapScroll/SnapScroll.js";
import aboutList from "./aboutList";

const About = ({ staffList }) => {
  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <SnapScroll
        hCase="showcaseText"
        object={aboutList[0]}
        image={true}
        changeClass={"snapScroll snapScroll__Change"}
      />

      <SnapScroll
        hCase="showcaseText"
        object={aboutList[0]}
        image={false}
        changeClass={"snapScroll snapScroll__ChangeMobile"}
      />

      <SnapScroll
        hCase="component"
        component={<AboutPartners />}
        changeClass={"snapScroll snapScroll__Change"}
        image={false}
      />
      <SnapScroll
        hCase="component"
        component={<AboutPartnersMobile />}
        changeClass={"snapScroll snapScroll__ChangeMobile"}
        image={false}
      />

      <SnapScroll
        hCase="component"
        component={<AboutPartnersMobile2 />}
        changeClass={"snapScroll snapScroll__ChangeMobile"}
      />
      <SnapScroll
        hCase="component"
        object={aboutList[1]}
        changeClass={"snapScroll about__StaffColor"}
        component={<AboutStaff staffList={staffList} />}
      />
      <Footer fixed={true} />
    </div>
  );
};

export default About;
