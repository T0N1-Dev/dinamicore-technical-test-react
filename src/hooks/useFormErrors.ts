import { useState } from "react";

type ErrorState<T> = {
  [K in keyof T]: boolean;
};

type Validator<T> = (values: T) => ErrorState<T>;

export function useFormErrors<T extends object>(validator: Validator<T>) {
  const [errors, setErrors] = useState<ErrorState<T>>({} as ErrorState<T>);

  const validate = (values: T) => {
    const validationResult = validator(values);
    setErrors(validationResult);
    return validationResult;
  };

  return {
    errors,
    validate,
  };
}
