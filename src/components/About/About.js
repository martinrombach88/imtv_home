import "./About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutOverview from "./AboutOverview";
import AboutOverviewMobile from "./AboutOverviewMobile";
import AboutPartners from "./AboutPartners.js";
import AboutPartnersMobile from "./AboutPartnersMobile";
import AboutStaff from "./AboutStaff.js";
import { useRef } from "react";

const About = ({ staffList }) => {
  const overviewRef = useRef();
  const partnersRef = useRef();
  const staffRef = useRef();

  const scrollToOverview = () => {
    overviewRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPartners = () => {
    partnersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToStaff = () => {
    staffRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="snapScroll">
        <Header headerStyle={"header"} />
        <div ref={overviewRef}>
          <AboutOverview refFunction={scrollToPartners} ref={partnersRef} />
          <AboutOverviewMobile
            refFunction={scrollToPartners}
            ref={partnersRef}
          />
        </div>
        <div ref={partnersRef}>
          <AboutPartners refFunction={scrollToStaff} ref={staffRef} />
          <AboutPartnersMobile refFunction={scrollToStaff} ref={staffRef} />
        </div>
        <div ref={staffRef}>
          <AboutStaff
            staffList={staffList}
            refFunction={scrollToOverview}
            ref={overviewRef}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
