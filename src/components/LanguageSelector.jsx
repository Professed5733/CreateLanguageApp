import React, { useState, useEffect } from "react";
import useGet from "../hooks/useGet";

const LanguageSelector = () => {
  const fetchLanguages = useGet();
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetchLanguages(import.meta.env.VITE_SERVER + "/hw/languages")
      .then((data) => setLanguages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <form>
      <label htmlFor="language">Select a Language:</label>
      <select id="language">
        <option value="">--Select--</option>
        {languages.map((language) => (
          <option key={language.language} value={language.language}>
            {language.language}
          </option>
        ))}
      </select>
      <button>Add Language</button>
    </form>
  );
};

export default LanguageSelector;
