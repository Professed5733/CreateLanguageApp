import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import usePost from "../hooks/usePost";
import UserLanguages from "./UserLanguages";
import LanguageSelector from "./LanguageSelector";
import UpdateUserForm from "./UpdateUserForm";
import useDel from "../hooks/useDel";

const Card = (props) => {
  const languages = props.languages;
  const postRequest = usePost();
  const [userLanguages, setUserLanguages] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const delUserLanguagesAll = useDel();
  const delUser = useDel();

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

  const removeUser = async () => {
    const res = await delUser(import.meta.env.VITE_SERVER + "/hw/users", {
      user_id: props.id,
    });
    if (res.status === 200) {
      props.getUser();
    } else {
      console.log("Error removing language");
    }
  };

  const removeAll = async () => {
    if (userLanguages.length === 0) {
      await removeUser();
      return;
    }

    for (const item of userLanguages) {
      const res = await delUserLanguagesAll(
        import.meta.env.VITE_SERVER + "/hw/users/languages",
        {
          user_id: props.id,
          language: item,
        }
      );
      if (res.status === 200) {
        await removeUser();
      } else {
        console.log("Error removing language");
      }
    }
  };

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
      <button className="col-sm-1" onClick={removeAll}>
        Delete
      </button>
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
