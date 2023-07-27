import React from "react";
import styles from "./Form.module.css";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
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
          <button className="col-md-3">update</button>
          <button className="col-md-3">cancel</button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const UpdateUserForm = () => {
  return (
    <div>
      <OverLay></OverLay>
    </div>
  );
};

export default UpdateUserForm;
