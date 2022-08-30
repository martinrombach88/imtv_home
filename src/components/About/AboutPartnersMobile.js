import Arrow from "../Arrow/Arrow";

const AboutPartnersMobile = () => {
  return (
    <div className="about__PartnersMobile">
      <h1>PARTNERS</h1>
      <img
        className="about__PartnersMobImg"
        src="/imtv_home/assets/images/partners/images/partnerskr1.png"
        alt="partners"
      />
      <img
        className="about__PartnersMobImg"
        src="/imtv_home/assets/images/partners/images/partnersworld.png"
        alt="partners"
      />
      <Arrow heightClass={"VeryLow"} />
    </div>
  );
};

export default AboutPartnersMobile;
