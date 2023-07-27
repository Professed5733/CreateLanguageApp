import { useEffect } from "react";

const useGet = () => {
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data: " + error.message);
    }
  };

  return fetchData;
};

export default useGet;
