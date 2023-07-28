import React, { useState } from "react";

const usePost = () => {
  const postRequest = async (url, data) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return await res.json(); // Return the JSON data from the response
    } catch (error) {
      throw new Error("Error performing POST request: " + error.message);
    }
  };

  return postRequest;
};

export default usePost;
