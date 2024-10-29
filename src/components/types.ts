// Updated interface for login credentials
export interface LoginCredentials {
  email: string;
  password: string;
}

// New interface for signup credentials
export interface SignUpCredentials {
  email: string;
  password: string;
  confirmPassword: string; // Include confirmPassword for the signup process
}
