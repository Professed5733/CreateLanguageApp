import React, { useState, useRef, useEffect } from "react";
import useGet from "../hooks/useGet";
import usePut from "../hooks/usePut";

const LanguageSelector = (props) => {
  const languages = props.languages;
  const addUserLanguageRef = useRef();
  const putUserLanguage = usePut();

  const addUserLanguage = async () => {
    const res = await putUserLanguage(
      import.meta.env.VITE_SERVER + "/hw/users/languages",
      { user_id: props.id, language: addUserLanguageRef.current.value }
    );

    if (res.status === 200) {
      addUserLanguageRef.current.value = "";
      props.postUserLanguages();
    } else {
      console.log("Error adding new language");
    }
  };

  return (
    <form>
      <label htmlFor="language">Select a Language:</label>
      <select id="language" ref={addUserLanguageRef}>
        <option value="">--Select--</option>
        {languages.map((language) => (
          <option key={language.language} value={language.language}>
            {language.language}
          </option>
        ))}
      </select>
      <button type="button" onClick={addUserLanguage}>
        Add Language
      </button>
    </form>
  );
};

export default LanguageSelector;
