import { GlobalProvider } from "@medicare.core.frontend/ui-components";
import { AppProvider } from "./providers/app-context";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}
