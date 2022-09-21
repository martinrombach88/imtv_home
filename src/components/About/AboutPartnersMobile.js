import Arrow from "../Arrow/Arrow";
import { forwardRef } from "react";

const AboutPartnersMobile = forwardRef(({ refFunction }, ref) => {
  return (
    <>
      <div className="snapComponent aboutPartners__MobileContainer">
        <div className="snapComponent__Container">
          <div className="aboutPartners__Mobile">
            <h1>PARTNERS</h1>
            <img
              className="aboutPartners__MobileImage"
              src="/imtv_home/assets/images/partners/images/partners.png"
              alt="partners"
            />
          </div>
        </div>
        <Arrow heightClass={"Mid"} scrollTo={refFunction} ref={ref} />
      </div>
    </>
  );
});

export default AboutPartnersMobile;
