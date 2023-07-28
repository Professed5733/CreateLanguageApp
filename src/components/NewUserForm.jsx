import React, { useRef } from "react";
import styles from "./Form.module.css";
import usePut from "../hooks/usePut";

const OverLay = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const userCountryRef = useRef();
  const putUser = usePut();

  const addUser = async () => {
    const res = await putUser(import.meta.env.VITE_SERVER + "/hw/users", {
      name: userNameRef.current.value,
      age: userAgeRef.current.value,
      country: userCountryRef.current.value,
    });

    if (res.status === 200) {
      userNameRef.current.value = "";
      userAgeRef.current.value = "";
      userCountryRef.current.value = "";
      props.getUser();
      props.setShowUserForm(false);
    } else {
      console.log("Error adding new language");
    }
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Add New User</h2>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Name</div>
          <input
            type="text"
            className="col-md-3"
            ref={userNameRef}
            required
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Age</div>
          <input
            type="number"
            className="col-md-3"
            ref={userAgeRef}
            required
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Country</div>
          <input
            type="text"
            className="col-md-3"
            ref={userCountryRef}
            required
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <button className="col-md-3" onClick={addUser}>
            Add
          </button>
          <button
            className="col-md-3"
            onClick={() => props.setShowUserForm(false)}
          >
            Cancel
          </button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const NewUserForm = (props) => {
  return (
    <div>
      <OverLay
        getUser={props.getUser}
        setShowUserForm={props.setShowUserForm}
      ></OverLay>
    </div>
  );
};

export default NewUserForm;
