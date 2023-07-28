import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import usePost from "../hooks/usePost";
import UserLanguages from "./UserLanguages";
import LanguageSelector from "./LanguageSelector";
import UpdateUserForm from "./UpdateUserForm";

const Card = (props) => {
  const languages = props.languages;
  const postRequest = usePost();
  const [userLanguages, setUserLanguages] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const postUserLanguages = async () => {
    const data = await postRequest(
      import.meta.env.VITE_SERVER + "/hw/users/languages",
      {
        user_id: props.id,
      }
    );
    setUserLanguages(data);
  };

  useEffect(() => {
    postUserLanguages();
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
      <button className="col-sm-1" onClick={() => setShowUpdateForm(true)}>
        Update
      </button>
      <hr></hr>
      <div>
        {userLanguages.map((language, idx) => {
          return (
            <UserLanguages
              key={idx}
              id={props.id}
              language={language}
              postUserLanguages={postUserLanguages}
            ></UserLanguages>
          );
        })}
        <LanguageSelector
          languages={languages}
          postUserLanguages={postUserLanguages}
          // getUser={props.getUser}
          id={props.id}
        ></LanguageSelector>
      </div>
      {showUpdateForm && (
        <UpdateUserForm
          id={props.id}
          name={props.name}
          age={props.age}
          country={props.country}
          setShowUpdateForm={setShowUpdateForm}
          getUser={props.getUser}
        ></UpdateUserForm>
      )}
    </div>
  );
};

export default Card;
