import { useState } from 'react';

/**
 * Custom hook to manage forms regardless of the number of fields they have
 * @param initialState - Initial state of the form.
 * @returns An array containing the form values, a function to handle input changes, and a function to reset the form.
 */
export const useForm = <T extends object>(initialState: T): [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [values, setValues] = useState<T>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return [values, handleInputChange, reset];
};
