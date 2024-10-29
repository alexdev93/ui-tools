import { useFormik, FormikValues } from "formik";
import { useCallback } from "react";
import { UseFormProps, UseFormReturn } from "./type";

const defaultOnSubmit = () => Promise.resolve();

const useForm = <T extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit = defaultOnSubmit,
}: UseFormProps<T>): UseFormReturn<T> => {
  const formik = useFormik<T>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = formik;

  const reset = useCallback(() => {
    resetForm();
  }, [resetForm]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm: reset,
    setFieldValue,
  };
};

export default useForm;
