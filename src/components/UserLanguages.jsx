import React from "react";

const UserLanguages = (props) => {
  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-primary active">
        {props.language}
      </button>
      <button type="button" className="btn btn-primary">
        X
      </button>
    </div>
  );
};

export default UserLanguages;
