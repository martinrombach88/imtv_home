import { useState } from "react";
import AboutStaffName from "./AboutStaffName";
import Arrow from "../Arrow/Arrow";

const AboutStaff = ({ staffList }) => {
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
    <>
      <div className="about__Container">
        <div className="about__StaffContainer">
          <div className="about__StaffTitle">
            <h2>KEY TEAM</h2>
          </div>

          <div className="about__Staff">
            <div className="about__StaffColumn">{staffNames}</div>
            <div className="about__StaffProfile">{profile}</div>
          </div>
        </div>
        <Arrow direction={true} heightClass="MidBottom" />
      </div>
    </>
  );
};

export default AboutStaff;
