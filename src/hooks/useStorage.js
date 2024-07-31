import React, { useState } from "react";

function useStorage(props) {
  const [value, setValue] = useState();

  const setStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeValue = (key) => {
    localStorage.removeItem(key);
  }

  return [value, setStorage, removeValue];
}

export default useStorage;
