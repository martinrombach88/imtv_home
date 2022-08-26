import Header from "../Header/Header";
import "./Work.css";
import WorkItem from "./WorkItem";
import WorkItemMobile from "./WorkItemMobile";
import Footer from "../Footer/Footer.js";
const Work = ({ workList }) => {
  const filteredList = [];
  for (let work of workList) {
    if (work.inProduction !== "1") {
      filteredList.push(work);
    }
  }
  let webList = filteredList.map((work, index) => {
    return <WorkItem work={work} key={index} />;
  });

  let mobileList = filteredList.map((work, index) => {
    return <WorkItemMobile work={work} key={index} />;
  });

  return (
    <div className="scroll scroll__Padded">
      <Header headerStyle={"header initialPos"} />
      {webList}
      {mobileList}
      <Footer />
    </div>
  );
};

export default Work;
