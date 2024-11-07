import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Box,
} from "@mantine/core";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Optional: for schema validation with Yup
import { LoginCredentials } from "./types";
import { loginValidation } from "../validators/auth"; // Assuming this is a Yup schema
import useActions from "../hooks/useActions";

const LoginForm: React.FC = () => {
  const { loginUser } = useActions();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginCredentials>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginValidation), // Optional: Use Yup for schema validation
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await loginUser(data);
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Box>
      <Box>
        <Title order={2}>Login to Your Account</Title>
        <Text size="sm" color="dimmed" style={{ marginTop: "8px" }}>
          Enter your credentials below to access your account
        </Text>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
          autoComplete="off"
          error={errors.email?.message || null}
          mt="md"
          withAsterisk
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          {...register("password")}
          autoComplete="off"
          error={errors.password?.message || null}
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
