import Arrow from "../Arrow/Arrow";

const AboutPartnersMobile = () => {
  return (
    <div className="snapScroll aboutPartners__MobileContainer">
      <div className="snapScroll__ComponentContainer">
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
  );
};

export default AboutPartnersMobile;
