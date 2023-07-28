const usePatch = () => {
  const patchRequest = async (url, data) => {
    try {
      const res = await fetch(url, {
        method: "PATCH",
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

  return patchRequest;
};

export default usePatch;
