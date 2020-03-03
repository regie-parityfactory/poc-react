import { useState } from "react";

export const useInputForm = initialInputValues => {
  const [variables, setVariables] = useState(initialInputValues);

  return [
    variables,
    e => {
      setVariables({
        ...variables,
        [e.target.name]: e.target.value
      });
    }
  ];
};
