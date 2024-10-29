import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <MantineProvider
    // theme={{
    //   colorScheme: "light",
    //   primaryColor: "blue",
    // }}
    // withGlobalStyles
    // withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
};

export default AppProvider;
