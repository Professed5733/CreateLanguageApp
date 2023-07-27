import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import useGet from "../hooks/useGet";
import NewLanguageForm from "./NewLanguageForm";
import NewUserForm from "./NewUserForm";

const Display = () => {
  const [user, setUser] = useState([]);
  const [languages, setLanguages] = useState([]);
  const fetchUser = useGet();
  const fetchLanguages = useGet();

  const [showLanguageForm, setShowLanguageForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  const getUser = async () => {
    const data = await fetchUser(import.meta.env.VITE_SERVER + "/hw/users");
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getLanguages = async () => {
    const data = await fetchLanguages(
      import.meta.env.VITE_SERVER + "/hw/languages"
    );
    setLanguages(data);
  };

  useEffect(() => {
    getLanguages();
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
          getLanguages={getLanguages}
          languages={languages}
          setLanguages={setLanguages}
        ></NewLanguageForm>
      )}
      {showUserForm && (
        <NewUserForm setShowUserForm={setShowUserForm}></NewUserForm>
      )}
    </>
  );
};

export default Display;
