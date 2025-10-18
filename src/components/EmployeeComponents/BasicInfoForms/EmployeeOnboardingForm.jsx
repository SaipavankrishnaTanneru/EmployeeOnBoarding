import React from "react";
import { Formik, Form } from "formik";
import BasicInfoFields from "./BasicInfoFields";
import WorkExperienceFields from "./WorkExperienceForm";
import styles from "./EmployeeOnboardingForm.module.css";

const EmployeeOnboardingForm = () => {
  const initialValues = {
    // Basic Info
    firstName: "",
    surname: "",
    gender: "",
    aadharNo: "",
    aadharEnrollementNo: "",
    panNumber: "",
    dob: "",
    bloodGroup: "",
    sscNo: "",
    applicationFee: "",
    category: "",
    phoneNumber: "",
    email: "",
    aadharFatherNo: "",
    fatherName: "",
    martialStatus: "",
    previousESINo: "",
    prevoisUANNo: "",
    totalExperience: "",
    // Work Experience
    campus: "",
    campusCode: "",
    campusType: "",
    location: "",
    building: "",
    manager: "",
    joiningAs: "",
    modeOfHiring: "",
    dateOfJoining: "",
    workMode: "",
    hiredBy: "",
  };

  const handleSubmit = (values) => {
    console.log("✅ Submitted all form data:", values);
    alert("Form submitted successfully!");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form className={styles.formContainer}>
          <h2 className={styles.sectionTitle}></h2>
          <BasicInfoFields formik={formik} />

          <h2 className={styles.sectionTitle}></h2>
          <WorkExperienceFields formik={formik} />

          <div className={styles.buttonRow}>
            <button
              type="button"
              onClick={() => formik.resetForm()}
              className={styles.backButton}
            >
              ← Back
            </button>
            <button type="submit" className={styles.submitButton}>
              Submit →
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeOnboardingForm;
