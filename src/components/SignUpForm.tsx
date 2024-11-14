/** @jsxImportSource @emotion/react */
import { TextInput, PasswordInput, Button, Box } from "@mantine/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupValidation } from "../validators/auth";
import { css } from "@emotion/react";
import useActions from "../hooks/useActions";

interface SignUpValues {
  username: string; // Added username field
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const { signupUser } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpValues>({
    resolver: yupResolver(signupValidation),
  });

  const onSubmit = async (data: SignUpValues) => {
    try {
      await signupUser(data);
      reset();
    } catch (error) {
      console.error("SignUp failed:", error);
    }
  };

  return (
    <Box
      css={css`
        max-width: 400px;
        margin: 0 auto;
      `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="User name"
          placeholder="Enter your user name"
          {...register("username")}
          autoComplete="off"
          error={errors.username?.message || null}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
          autoComplete="off"
          error={errors.email?.message || null}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          {...register("password")}
          autoComplete="off"
          error={errors.password?.message || null}
          mt="md"
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
          autoComplete="off"
          error={errors.confirmPassword?.message || null}
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
