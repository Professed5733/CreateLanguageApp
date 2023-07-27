import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import useGet from "../hooks/useGet";
import NewLanguageForm from "./NewLanguageForm";
import NewUserForm from "./NewUserForm";

const Display = () => {
  const fetchData = useGet();
  const [user, setUser] = useState([]);

  const fetchLanguages = useGet();
  const [languages, setLanguages] = useState([]);

  const [showLanguageForm, setShowLanguageForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  useEffect(() => {
    fetchData(import.meta.env.VITE_SERVER + "/hw/users")
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchLanguages(import.meta.env.VITE_SERVER + "/hw/languages")
      .then((data) => setLanguages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar
        setShowLanguageForm={setShowLanguageForm}
        setShowUserForm={setShowUserForm}
      ></Navbar>
      <div className="container">
        {user.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              age={item.age}
              country={item.country}
              languages={languages}
            ></Card>
          );
        })}
      </div>
      {showLanguageForm && (
        <NewLanguageForm
          setShowLanguageForm={setShowLanguageForm}
          languages={languages}
        ></NewLanguageForm>
      )}
      {showUserForm && (
        <NewUserForm setShowUserForm={setShowUserForm}></NewUserForm>
      )}
    </>
  );
};

export default Display;
