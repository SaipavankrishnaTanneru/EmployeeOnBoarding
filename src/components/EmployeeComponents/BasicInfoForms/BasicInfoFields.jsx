import React from "react";
import Inputbox from "../../../widgets/Inputbox/InputBox";
import Dropdown from "../../../widgets/Dropdown/Dropdown";
import styles from "./BasicInfoFields.module.css";

const BasicInfoForm = ({ formik }) => {
  const { values, handleChange, setFieldValue } = formik;

  return (
    <div className={styles.container}>
      <div className={styles.formGrid}>
        {/* Column Fields */}
        <div className={styles.leftSection}>
          <div className={styles.row}>
            <Inputbox
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange}
            />
            <Inputbox
              label="Surname"
              name="surname"
              placeholder="Enter surname"
              value={values.surname}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.genderGroup}>
              <label className={styles.label}>Gender</label>
              <div className={styles.genderButtons}>
                {["Male", "Female"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={`${styles.genderBtn} ${
                      values.gender === g ? styles.active : ""
                    }`}
                    onClick={() => setFieldValue("gender", g)}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <Inputbox
              label="Aadhaar No"
              name="aadharNo"
              placeholder="Enter Aadhaar number"
              value={values.aadharNo}
              onChange={handleChange}
            />
            <Inputbox
              label="Aadhaar Enrollment No"
              name="aadharEnrollementNo"
              placeholder="Enter Aadhaar number"
              value={values.aadharEnrollementNo}
              onChange={handleChange}
            />
            <Inputbox
              label="PAN Number"
              name="panNumber"
              placeholder="Enter Aadhaar no"
              value={values.panNumber}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <Inputbox
              label="Select Date of Birth"
              name="dob"
              type="date"
              value={values.dob}
              onChange={handleChange}
            />
            <Dropdown
              dropdownname="Blood Group"
              name="bloodGroup"
              results={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
              value={values.bloodGroup}
              onChange={(e) => setFieldValue("bloodGroup", e.target.value)}
            />
            <Inputbox
              label="Enter SSC No"
              name="sscNo"
              placeholder="Enter SSC No"
              value={values.sscNo}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <Dropdown
              dropdownname="Category"
              name="category"
              results={["General", "OBC", "SC", "ST"]}
              value={values.category}
              onChange={(e) => setFieldValue("category", e.target.value)}
            />
            <Inputbox
              label="Application Fee"
              name="applicationFee"
              placeholder="Enter application fee amount"
              value={values.applicationFee}
              onChange={handleChange}
            />
            <Inputbox
              label="Phone Number"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={values.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <Inputbox
              label="Aadhaar Father No"
              name="aadharFatherNo"
              placeholder="Enter Full Name"
              value={values.aadharFatherNo}
              onChange={handleChange}
            />
            <Inputbox
              label="Father Name"
              name="fatherName"
              placeholder="Enter Father Name"
              value={values.fatherName}
              onChange={handleChange}
            />
            <Dropdown
              dropdownname="Marital Status"
              name="martialStatus"
              results={["Single", "Married"]}
              value={values.martialStatus}
              onChange={(e) => setFieldValue("martialStatus", e.target.value)}
            />
          </div>

          <div className={styles.row}>
            <Inputbox
              label="Previous ESI No"
              name="previousESINo"
              placeholder="Enter ESI No"
              value={values.previousESINo}
              onChange={handleChange}
            />
            <Inputbox
              label="Previous UAN No"
              name="prevoisUANNo"
              placeholder="Enter UAN No"
              value={values.prevoisUANNo}
              onChange={handleChange}
            />
            <Inputbox
              label="Total Experience"
              name="totalExperience"
              placeholder="Enter Total Years of Experience"
              value={values.totalExperience}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Profile Upload Section */}
        <div className={styles.profileSection}>
          <div className={styles.imageWrapper}>
            <img
              src={values.profileImage || "/default-profile.png"}
              alt="Profile"
              className={styles.profileImg}
            />
            <label htmlFor="profileUpload" className={styles.editBtn}>
              ✏️ Edit
            </label>
            <input
              id="profileUpload"
              type="file"
              accept="image/*"
              className={styles.hiddenInput}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setFieldValue("profileImage", reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          <p className={styles.imageNote}>max image size is 300kb</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;
