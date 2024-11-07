// import { useState } from "react";

// interface UseFormProps<T> {
//   initialValues: T;
//   validationSchema?: any; // e.g., Yup schema
//   onSubmit: (values: T) => void | Promise<void>;
// }

// interface UseFormReturn<T> {
//   values: T;
//   errors: Partial<Record<keyof T, string>>;
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
//   resetForm: () => void;
// }

// function useForm<T>({
//   initialValues,
//   validationSchema,
//   onSubmit,
// }: UseFormProps<T>): UseFormReturn<T> {
//   const [values, setValues] = useState<T>(initialValues);
//   const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

//   const validate = async () => {
//     if (!validationSchema) return true;
//     try {
//       await validationSchema.validate(values, { abortEarly: false });
//       setErrors({});
//       return true;
//     } catch (validationErrors) {
//       const errors: Partial<Record<keyof T, string>> = {};
//       validationErrors.inner.forEach((error: any) => {
//         errors[error.path as keyof T] = error.message;
//       });
//       setErrors(errors);
//       return false;
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const isValid = await validate();
//     if (isValid) {
//       await onSubmit(values);
//     }
//   };

//   const resetForm = () => {
//     setValues(initialValues);
//     setErrors({});
//   };

//   return {
//     values,
//     errors,
//     handleChange,
//     handleSubmit,
//     resetForm,
//   };
// }

// export default useForm;
