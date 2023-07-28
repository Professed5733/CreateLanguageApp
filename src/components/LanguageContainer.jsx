import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import NewLanguageForm from "./NewLanguageForm";
import useGet from "../hooks/useGet";

const LanguageContainer = () => {
  const fetchLanguages = useGet();
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetchLanguages(import.meta.env.VITE_SERVER + "/hw/languages")
      .then((data) => setLanguages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <LanguageSelector languages={languages}></LanguageSelector>
      <NewLanguageForm languages={languages}></NewLanguageForm>
    </>
  );
};

export default LanguageContainer;
