import AppProvider from "./AppProvider";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <AppProvider>
      <SignUpForm />
      <LoginForm />
    </AppProvider>
  );
}

export default App;
