import React from "react";
import styles from "./Form.module.css";

const OverLay = (props) => {
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
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <button className="col-md-3">update</button>
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
        name={props.name}
        age={props.age}
        country={props.country}
        setShowUpdateForm={props.setShowUpdateForm}
      ></OverLay>
    </div>
  );
};

export default UpdateUserForm;
