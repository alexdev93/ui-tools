import {
  TextInput,
  PasswordInput,
  Button,
  Container,
  Title,
  Text,
} from "@mantine/core";
import React from "react";
import styled from "@emotion/styled";
import useForm from "../hooks/useForm"; // Ensure correct path
import { LoginCredentials } from "./types"; // Adjust import path if needed
import { loginValidation } from "../validators/auth"; // Adjust import path if needed
import { login } from "../api/auth";

const CenteredBox = styled.div`
  text-align: center;
`;

const StyledFormContainer = styled(Container)`
  max-width: 400px;
  margin: 50px auto;
`;

const initialValues: LoginCredentials = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } =
    useForm<LoginCredentials>({
      initialValues,
      validationSchema: loginValidation,
      onSubmit: login,
    });

  return (
    <StyledFormContainer>
      <CenteredBox>
        <Title order={2}>Login to Your Account</Title>
        <Text size="sm" color="dimmed" style={{ marginTop: "8px" }}>
          Enter your credentials below to access your account
        </Text>
      </CenteredBox>

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
    </StyledFormContainer>
  );
};

export default LoginForm;
