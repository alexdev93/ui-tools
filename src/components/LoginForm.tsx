// LoginForm.tsx
import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Box,
} from "@mantine/core";
import React from "react";
import useForm from "../hooks/useForm";
import { LoginCredentials } from "./types";
import { loginValidation } from "../validators/auth";
import useActions from "../hooks/useActions";

const initialValues: LoginCredentials = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const { loginUser } = useActions();

  const handleFormSubmit = (formValues: LoginCredentials) => {
    loginUser(formValues);
  };

  const { values, errors, handleChange, handleSubmit } =
    useForm<LoginCredentials>({
      initialValues,
      validationSchema: loginValidation,
      onSubmit: handleFormSubmit,
    });

  return (
    <Box>
      <Box>
        <Title order={2}>Login to Your Account</Title>
        <Text size="sm" color="dimmed" style={{ marginTop: "8px" }}>
          Enter your credentials below to access your account
        </Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email || null}
          mt="md"
          withAsterisk
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password || null}
          mt="md"
          withAsterisk
        />

        <Button fullWidth type="submit" mt="lg" color="blue">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
