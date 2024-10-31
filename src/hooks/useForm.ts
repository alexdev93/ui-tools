/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface UseFormOptions<T> {
  initialValues: T;
  validationSchema?: any;
  onSubmit: (values: T) => void;
}

function useForm<T>({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});

  const validate = (values: T) => {
    if (!validationSchema) return {};
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (validationError: any) {
      const errors: Partial<T> = {};
      validationError.inner.forEach((err: any) => {
        errors[err.path as keyof T] = err.message;
      });
      return errors;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
