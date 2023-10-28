import { useState } from "react";
import AboutStaffName from "./AboutStaffName";
import Arrow from "../Arrow/Arrow";
// import aboutList from "./aboutList";
import "./About.css";
import { forwardRef } from "react";

const AboutStaff = forwardRef(({ staffList, refFunction }, ref) => {
  const [profile, setProfile] = useState(null);

  const staffNames = staffList.map((staffName, index) => {
    return (
      <AboutStaffName
        key={index}
        name={staffName}
        profile={profile}
        setProfile={setProfile}
      />
    );
  });

  return (
    <div className="snapComponent aboutStaff">
      <div className="aboutStaff__Title">
        <h2>KEY TEAM</h2>
      </div>

      <div className="aboutStaff__UI">
        <div className="aboutStaff__Column">{staffNames}</div>
        <div className="aboutStaff__Profile">{profile}</div>
      </div>

      <Arrow
        direction={true}
        heightClass="Mid"
        scrollTo={refFunction}
        ref={ref}
      />
    </div>
  );
});

export default AboutStaff;
