import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import useGet from "../hooks/useGet";
import NewLanguageForm from "./NewLanguageForm";
import UpdateUserForm from "./UpdateUserForm";

const Display = () => {
  const fetchData = useGet();

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData(import.meta.env.VITE_SERVER + "/hw/users")
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        {user.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              age={item.age}
              country={item.country}
            ></Card>
          );
        })}
      </div>
      {/* <NewLanguageForm></NewLanguageForm> */}
    </>
  );
};

export default Display;
