import Arrow from "../Arrow/Arrow";

const AboutPartnersMobile = () => {
  return (
    <div className="snapScroll">
      <div className="snapScroll__ComponentContainer">
        <div className="about__PartnersMobile">
          <h1>PARTNERS</h1>
          <img
            className="about__PartnersMobImg"
            src="/imtv_home/assets/images/partners/images/partnerskr2.png"
            alt="partners"
          />
          <img
            className="about__PartnersMobImg"
            src="/imtv_home/assets/images/partners/images/partnersasia.png"
            alt="partners"
          />
          <Arrow heightClass={"VeryLow"} />
        </div>
      </div>
    </div>
  );
};

export default AboutPartnersMobile;
