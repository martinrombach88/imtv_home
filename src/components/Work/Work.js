import Header from "../Header/Header";
import "./Work.css";
import WorkItem from "./WorkItem";
import WorkItemMobile from "./WorkItemMobile";

const Work = ({ workList }) => {
  return (
    <div className="scroll">
      <Header headerStyle={"header initialPos"} />

      {workList.map((work, index) => {
        if (work.inProduction != "1") {
          return <WorkItem work={work} key={index} />;
        }
      })}
      {workList.map((work, index) => {
        if (work.inProduction != "1") {
          return <WorkItemMobile work={work} key={index} />;
        }
      })}
    </div>
  );
};

export default Work;
