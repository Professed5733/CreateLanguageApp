import React from "react";
import styles from "./Form.module.css";

const OverLay = (props) => {
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
            defaultValue={props.title}
            className="col-md-3"
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Age</div>
          <input
            type="text"
            defaultValue={props.author}
            className="col-md-3"
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Country</div>
          <input
            type="text"
            defaultValue={props.yearPublished}
            className="col-md-3"
          ></input>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <button className="col-md-3">Add</button>
          <button
            className="col-md-3"
            onClick={() => props.setShowUserForm(false)}
          >
            cancel
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
      <OverLay setShowUserForm={props.setShowUserForm}></OverLay>
    </div>
  );
};

export default NewUserForm;
