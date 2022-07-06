import Arrow from "../Arrow/Arrow";

const AboutPartners = () => {
  const generateImages = (num) => {
    let url = "/assets/images/partners/";
    let urlArray = [];
    for (let i = 1; i <= num; i++) {
      urlArray.push(url + "p" + i + ".png");
    }
    const renderedImages = urlArray.map((url, index) => {
      return <img src={url} key={index} alt="partner" />;
    });
    return renderedImages;
  };
  const renderedImages = generateImages(41);

  return (
    <>
      <div className="about__Container about__PartnersContainer">
        <div className="about__Partners">
          <h1>PARTNERS</h1>
          <div className="about__PartnersCycler">
            <div>{renderedImages}</div>
          </div>
        </div>
        <Arrow heightClass={"MidBottom"} />
      </div>
    </>
  );
};

export default AboutPartners;
