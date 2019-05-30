import { useState } from "react";

const useFormHandler = callback => {
  const [inputs, setInputs] = useState({
    by_city: "",
    by_state: "",
    by_name: "",
    by_type: "",
    page: "1"
  });

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    callback(inputs);
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useFormHandler;
