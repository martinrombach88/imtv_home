import { useRef } from "react";
import Arrow from "./Arrow";

const ScrollExample = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const scrollTo1 = () => {
    ref1.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo2 = () => {
    ref2.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo3 = () => {
    ref3.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="snapScroll">
      <div className="snapComponent error" ref={ref1}>
        {/* Div 1<button onClick={scrollTo2}>Scroll to Div 2</button> */}
        Arrow 1
        <Arrow scrollTo={scrollTo2} ref={ref2} />
      </div>
      <div className="snapComponent error" ref={ref2}>
        {/* Div 2<button onClick={scrollTo3}>Scroll to Div 3</button> */}
        Arrow 2 - Click and Scroll to 3
        <Arrow scrollTo={scrollTo3} ref={ref3} />
      </div>
      <div className="snapComponent error" ref={ref3}>
        Div 3 Arrow 3 - Click and Scroll to 2
        <Arrow scrollTo={scrollTo2} ref={ref2} />
        {/* <button onClick={scrollTo2}>Scroll to Div 2</button>
        <button onClick={scrollTo1}>Scroll to Div 1</button> */}
      </div>
    </div>
  );
};

export default ScrollExample;
