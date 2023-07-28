import React from "react";
import useDel from "../hooks/useDel";

const UserLanguages = (props) => {
  const delUserLanguage = useDel();

  const removeUserLanguage = async () => {
    const res = await delUserLanguage(
      import.meta.env.VITE_SERVER + "/hw/users/languages",
      { user_id: props.id, language: props.language }
    );

    if (res.status === 200) {
      props.postUserLanguages();
    } else {
      console.log("Error adding new language");
    }
  };

  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-primary active">
        {props.language}
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={removeUserLanguage}
      >
        X
      </button>
    </div>
  );
};

export default UserLanguages;
