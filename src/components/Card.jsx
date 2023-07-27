import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import usePost from "../hooks/usePost";
import UserLanguages from "./UserLanguages";
import LanguageSelector from "./LanguageSelector";

const Card = (props) => {
  const languages = props.languages;
  const { postRequest } = usePost();
  const [userLanguages, setUserLanguages] = useState([]);

  useEffect(() => {
    postRequest(import.meta.env.VITE_SERVER + "/hw/users/languages", {
      user_id: props.id,
    })
      .then((data) => setUserLanguages(data))
      .catch((error) => console.error(error));
  }, [postRequest, props.id]);

  return (
    <div className={`${styles.Card} container`}>
      <div className="col-sm-2">
        <span>Name: </span>
        {props.name}
      </div>
      <div className="col-sm-2">
        <span>Age: </span>
        {props.age}
      </div>
      <div className="col-sm-2">
        <span>Country: </span>
        {props.country}
      </div>
      <button className="col-sm-1">Delete</button>
      <button className="col-sm-1">Update</button>
      <hr></hr>
      <div>
        {userLanguages.map((language, idx) => {
          return <UserLanguages key={idx} language={language}></UserLanguages>;
        })}
        <LanguageSelector languages={languages}></LanguageSelector>
      </div>
    </div>
  );
};

export default Card;
