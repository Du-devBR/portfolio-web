import { ThemeProvider } from "./components/theme/theme-provider";
import { Home } from "./pages/home";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Home />
    </ThemeProvider>
  );
}
