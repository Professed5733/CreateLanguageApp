const usePut = () => {
  const putRequest = async (url, data) => {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res;
    } catch (error) {
      throw new Error("Error performing PUT request: " + error.message);
    }
  };

  return putRequest;
};

export default usePut;
