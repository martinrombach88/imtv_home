import Arrow from "../Arrow/Arrow";
import { useRef, forwardRef } from "react";

const AboutPartnersMobile = forwardRef(({ refFunction }, ref) => {
  return (
    <>
      <div className="snapComponent aboutPartners__MobileContainer">
        <div className="snapComponent__Container">
          <div className="aboutPartners__Mobile">
            <h1>PARTNERS</h1>
            <img
              className="aboutPartners__MobImg"
              src="/imtv_home/assets/images/partners/images/partnerskr1.png"
              alt="partners"
            />
            <img
              className="aboutPartners__MobImg"
              src="/imtv_home/assets/images/partners/images/partnersworld.png"
              alt="partners"
            />
            <Arrow heightClass={"VeryLow"} />
          </div>
        </div>
      </div>
      <div className="snapComponent aboutPartners__MobileContainer">
        <div className="snapComponent__Container">
          <div className="aboutPartners__Mobile">
            <h1>PARTNERS</h1>
            <img
              className="aboutPartners__MobImg"
              src="/imtv_home/assets/images/partners/images/partnerskr2.png"
              alt="partners"
            />
            <img
              className="aboutPartners__MobImg"
              src="/imtv_home/assets/images/partners/images/partnersasia.png"
              alt="partners"
            />
            <Arrow heightClass={"VeryLow"} scrollTo={refFunction} ref={ref} />
          </div>
        </div>
      </div>
    </>
  );
});

export default AboutPartnersMobile;
