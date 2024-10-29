/** @jsxImportSource @emotion/react */
import { TextInput, PasswordInput, Button, Box } from "@mantine/core";
import { useFormik } from "formik";
import { signupValidation } from "../validators/auth";
import { css } from "@emotion/react";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: signupValidation, // Fix: Added validationSchema here
    onSubmit: (values) => {
      console.log("Form values:", values); // Replace with actual sign-up logic
    },
  });

  return (
    <Box
      css={css`
        max-width: 400px;
        margin: 0 auto;
      `}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          mt="md"
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
          mt="md"
        />
        <Button fullWidth type="submit" mt="lg" color="blue">
          Sign up
        </Button>
      </form>
    </Box>
  );
};

export default SignUpForm;
