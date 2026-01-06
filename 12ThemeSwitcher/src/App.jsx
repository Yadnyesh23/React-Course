import { useTheme } from "./context/useTheme";
import ThemeToggle from "./components/Theme";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`h-screen flex items-center justify-center
        ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <ThemeToggle />
    </div>
  );
}

export default App;
