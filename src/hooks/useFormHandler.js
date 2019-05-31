import { useState } from "react";

const INITIAL_STATE = {
  by_city: "",
  by_state: "",
  by_name: "",
  by_type: "",
  page: "1"
};

const useFormHandler = callback => {
  const [inputs, setInputs] = useState(INITIAL_STATE);

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    callback(inputs);
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const clearInputs = e => {
    if (e) {
      e.preventDefault();
    }
    setInputs(INITIAL_STATE);
  };

  return {
    clearInputs,
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useFormHandler;
