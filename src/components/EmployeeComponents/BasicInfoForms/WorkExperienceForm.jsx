import React from "react";
import Inputbox from "../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../widgets/Dropdown/Dropdown";
import styles from "./WorkExperienceForm.module.css";

const WorkExperienceForm = ({ formik }) => {
  const { values, handleChange, setFieldValue } = formik;

  return (
    <div className={styles.WorkExperience_container}>
      <div className={styles.WorkExperience_box}>
        <div className={styles.formGrid}>
          {/* Row 1 */}
          <div className={styles.row}>
            <Dropdown
              dropdownname="Campus"
              name="campus"
              results={["Main Campus", "North Campus", "South Campus"]}
              value={values.campus}
              onChange={(e) => setFieldValue("campus", e.target.value)}
            />
            <Inputbox
              label="Campus Code"
              name="campusCode"
              placeholder="Enter campus code"
              value={values.campusCode}
              onChange={handleChange}
            />
            <Dropdown
              dropdownname="Campus Type"
              name="campusType"
              results={["Urban", "Rural"]}
              value={values.campusType}
              onChange={(e) => setFieldValue("campusType", e.target.value)}
            />
          </div>

          {/* Row 2 */}
          <div className={styles.row}>
            <Dropdown
              dropdownname="Location"
              name="location"
              results={["Hyderabad", "Bangalore", "Delhi", "Mumbai"]}
              value={values.location}
              onChange={(e) => setFieldValue("location", e.target.value)}
            />
            <Inputbox
              label="Building"
              name="building"
              placeholder="Enter building name"
              value={values.building}
              onChange={handleChange}
            />
            <Dropdown
              dropdownname="Manager"
              name="manager"
              results={["John Doe", "Jane Smith", "Michael Lee"]}
              value={values.manager}
              onChange={(e) => setFieldValue("manager", e.target.value)}
            />
          </div>

          {/* Row 3 */}
          <div className={styles.row}>
            <Dropdown
              dropdownname="Joining As"
              name="joiningAs"
              results={["Software Engineer", "HR Executive", "Designer"]}
              value={values.joiningAs}
              onChange={(e) => setFieldValue("joiningAs", e.target.value)}
            />
            <Dropdown
              dropdownname="Mode of Hiring"
              name="modeOfHiring"
              results={["Campus Drive", "Referral", "Direct"]}
              value={values.modeOfHiring}
              onChange={(e) => setFieldValue("modeOfHiring", e.target.value)}
            />
            <Dropdown
              dropdownname="Work Mode"
              name="workMode"
              results={["Remote", "Hybrid", "On-site"]}
              value={values.workMode}
              onChange={(e) => setFieldValue("workMode", e.target.value)}
            />
          </div>

          {/* Row 4 */}
          <div className={styles.row}>
            <Dropdown
              dropdownname="Hired By"
              name="hiredBy"
              results={["Employee 1", "Employee 2", "Employee 3"]}
              value={values.hiredBy}
              onChange={(e) => setFieldValue("hiredBy", e.target.value)}
            />
            <Inputbox
              label="Date of Joining"
              name="dateOfJoining"
              type="date"
              value={values.dateOfJoining}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
