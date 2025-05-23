import { useState } from "react";
import { useForm } from "../hooks/useForm";
import type { FormValues } from "../interfaces/interfacesUseForm";
import { useFormErrors } from "../hooks/useFormErrors";

export const UserForm = () => {
  const [formValues, handleInputChange, resetForm] = useForm<FormValues>({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const { name, email } = formValues;

  const formValidator = (values: FormValues) => ({
      name: values.name.trim() === "",
      email: values.email.trim() === "",
    });

  const { errors, validate } = useFormErrors<FormValues>(formValidator);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate(formValues);

    if (!newErrors.name && !newErrors.email) {
      setSubmitted({ name, email });
      resetForm();
    } else {
      setSubmitted(null);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            name="name"
            value={name}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && <p className="text-sm text-red-500">Name is required</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-sm text-red-500">Email is required</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex">
            <svg
              className="h-5 w-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-3">
              <p className="font-medium">Submission successful!</p>
              <p>Name: {submitted.name}</p>
              <p>Email: {submitted.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
