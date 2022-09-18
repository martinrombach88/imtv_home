import "./About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutOverview from "./AboutOverview";
import AboutOverviewMobile from "./AboutOverviewMobile";
import AboutPartners from "./AboutPartners.js";
import AboutPartnersMobile from "./AboutPartnersMobile";
import AboutStaff from "./AboutStaff.js";

const About = ({ staffList }) => {
  return (
    <>
      <div className="snapScroll">
        <Header headerStyle={"header"} />
        <AboutOverview />
        <AboutOverviewMobile />
        <AboutPartners />
        <AboutPartnersMobile />
        <AboutStaff staffList={staffList} />
      </div>
      <Footer fixed={true} />
    </>
  );
};

export default About;
