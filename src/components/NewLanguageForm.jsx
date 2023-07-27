import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import useGet from "../hooks/useGet";

const OverLay = (props) => {
  const fetchLanguages = useGet();
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetchLanguages(import.meta.env.VITE_SERVER + "/hw/languages")
      .then((data) => setLanguages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Language Form</h2>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Language</div>
          <input
            type="text"
            defaultValue={props.title}
            className="col-md-3"
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <button className="col-md-3">Add</button>
          <button className="col-md-3">Cancel</button>
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
            <button className="col-md-3">delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewLanguageForm = () => {
  return (
    <>
      <OverLay></OverLay>
    </>
  );
};

export default NewLanguageForm;
