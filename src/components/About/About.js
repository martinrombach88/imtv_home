import "./About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutOverview from "./AboutOverview";
import AboutPartners from "./AboutPartners.js";
import AboutPartnersMobile from "./AboutPartnersMobile";
import AboutPartnersMobile2 from "./AboutPartnersMobile2";
import AboutStaff from "./AboutStaff.js";

const About = ({ staffList }) => {
  return (
    <>
      <div className="snapScroll">
        <Header headerStyle={"header"} />
        <AboutOverview />
        <AboutPartners />
        <AboutPartnersMobile />
        <AboutPartnersMobile />

        {/* <SnapScroll
          hCase="component"
          object={aboutList[1]}
          changeClass={"snapScroll about__StaffColor"}
          component={<AboutStaff staffList={staffList} />}
        /> */}
      </div>
      <Footer fixed={true} />
    </>
  );
};

export default About;
