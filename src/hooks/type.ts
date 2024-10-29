import { FormikHelpers, FormikErrors } from "formik";
import * as Yup from "yup";

export interface UseFormProps<T> {
  initialValues: T;
  validationSchema: Yup.ObjectSchema<Partial<T>>;
  onSubmit?: (
    values: T,
    formikHelpers: FormikHelpers<T>
  ) => void | Promise<void>;
}

export interface UseFormReturn<T> {
  values: T;
  errors: FormikErrors<T>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => Promise<void> | Promise<FormikErrors<T>>;
}
