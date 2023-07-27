import React from "react";

const useDel = () => {
  const deleteRequest = async (url) => {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res;
    } catch (error) {
      throw new Error("Error performing DELETE request: " + error.message);
    }
  };

  return deleteRequest;
};

export default useDel;
