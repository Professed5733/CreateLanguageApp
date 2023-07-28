import React, { useRef } from "react";
import styles from "./Form.module.css";
import usePatch from "../hooks/usePatch";

const OverLay = (props) => {
  const updateNameRef = useRef();
  const updateAgeRef = useRef();
  const updateCountryRef = useRef();
  const patchRequest = usePatch();

  const patchUser = async () => {
    const res = await patchRequest(import.meta.env.VITE_SERVER + "/hw/users", {
      user_id: props.id,
      name: updateNameRef.current.value,
      age: updateAgeRef.current.value,
      country: updateCountryRef.current.value,
    });

    if (res.status === 200) {
      updateNameRef.current.value = "";
      updateAgeRef.current.value = "";
      updateCountryRef.current.value = "";
      props.getUser();
      props.setShowUpdateForm(false);
    } else {
      console.log("Error adding new language");
    }
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Update User Details</h2>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Name</div>
          <input
            type="text"
            defaultValue={props.name}
            className="col-md-3"
            ref={updateNameRef}
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Age</div>
          <input
            type="text"
            defaultValue={props.age}
            className="col-md-3"
            ref={updateAgeRef}
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Country</div>
          <input
            type="text"
            defaultValue={props.country}
            className="col-md-3"
            ref={updateCountryRef}
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <button className="col-md-3" onClick={patchUser}>
            update
          </button>
          <button
            className="col-md-3"
            onClick={() => props.setShowUpdateForm(false)}
          >
            cancel
          </button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const UpdateUserForm = (props) => {
  return (
    <div>
      <OverLay
        id={props.id}
        name={props.name}
        age={props.age}
        country={props.country}
        setShowUpdateForm={props.setShowUpdateForm}
        getUser={props.getUser}
      ></OverLay>
    </div>
  );
};

export default UpdateUserForm;
