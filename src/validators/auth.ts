import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .required("Required"),
});

export const signupValidation = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username can't be longer than 20 characters")
    .required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});
