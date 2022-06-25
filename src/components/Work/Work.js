import Header from "../Header/Header";
import "./Work.css";
import WorkItem from "./WorkItem";
import WorkItemMobile from "./WorkItemMobile";
import workList from "./workList.js";
import WorkAPI from "./WorkAPI";

const Work = () => {
  const data = WorkAPI();
  console.log(data);
  return (
    <div className="scroll">
      <Header headerStyle={"header initialPos"} />
      {workList.map((work, index) => {
        return <WorkItem work={work} key={index} />;
      })}
      {workList.map((work, index) => {
        return <WorkItemMobile work={work} key={index} />;
      })}
    </div>
  );
};

export default Work;
