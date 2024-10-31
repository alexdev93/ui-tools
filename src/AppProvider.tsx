import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <MantineProvider>
      <Provider store={store}>{children}</Provider>
    </MantineProvider>
  );
};

export default AppProvider;
