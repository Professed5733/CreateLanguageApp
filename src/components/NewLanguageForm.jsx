import React, { useState, useRef, useEffect } from "react";
import styles from "./Form.module.css";
import usePut from "../hooks/usePut";
import useDel from "../hooks/useDel";

const OverLay = (props) => {
  const languages = props.languages;
  const addLanguageRef = useRef();
  const putRequest = usePut();
  const delLanguage = useDel();

  const addLanguage = async () => {
    const res = await putRequest(
      import.meta.env.VITE_SERVER + "/hw/languages",
      {
        language: addLanguageRef.current.value,
      }
    );

    if (res.status === 200) {
      addLanguageRef.current.value = "";
      props.getLanguages();
      props.setShowLanguageForm(false);
    } else {
      console.log("Error adding new language");
    }
  };

  const removeLanguage = async (languageId) => {
    const res = await delLanguage(
      import.meta.env.VITE_SERVER + "/hw/languages/" + languageId
    );

    if (res.status === 200) {
      addLanguageRef.current.value = "";
      props.getLanguages();
    } else {
      console.log("Error removing language");
    }
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Language Form</h2>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Language</div>
          <input type="text" className="col-md-3" ref={addLanguageRef}></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <button className="col-md-3" onClick={addLanguage}>
            Add
          </button>
          <button
            className="col-md-3"
            onClick={() => props.setShowLanguageForm(false)}
          >
            Cancel
          </button>
          <div className="col-md-3"></div>
        </div>

        <div className="row  justify-content-center">
          <div className="col-md-3">Language</div>
          <div className="col-md-3">Created At</div>
          <div className="col-md-3"></div>
        </div>

        {languages.map((language) => (
          <div className="row  justify-content-center" key={language.language}>
            <div className="col-md-3">{language.language}</div>
            <div className="col-md-3">{language.created_at}</div>
            <button
              className="col-md-3"
              onClick={() => removeLanguage(language.language)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewLanguageForm = (props) => {
  return (
    <>
      <OverLay
        setShowLanguageForm={props.setShowLanguageForm}
        getLanguages={props.getLanguages}
        languages={props.languages}
        setLanguages={props.setLanguages}
      ></OverLay>
    </>
  );
};

export default NewLanguageForm;
