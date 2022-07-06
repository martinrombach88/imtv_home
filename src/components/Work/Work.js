import Header from "../Header/Header";
import "./Work.css";
import WorkItem from "./WorkItem";
import WorkItemMobile from "./WorkItemMobile";
import Footer from "../Footer/Footer.js";
const Work = ({ workList }) => {
  const filteredList = workList.map((work, index) => {
    if (work.inProduction !== "1") {
      return <WorkItem work={work} key={index} />;
    }
  });
  const filteredListMobile = workList.map((work, index) => {
    if (work.inProduction !== "1") {
      return <WorkItemMobile work={work} key={index} />;
    }
  });

  return (
    <div className="scroll">
      <Header headerStyle={"header initialPos"} />
      {filteredList}
      {filteredListMobile}
      <Footer fixed={true} />
    </div>
  );
};

export default Work;
