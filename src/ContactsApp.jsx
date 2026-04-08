import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ContactsSection from "./components/ContactsSection";
import { ThemeSwitcher } from "./components/ThemeSwitch";
import { ThemeArea } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme}`}>
      <h1>Contacts App</h1>

      <ThemeSwitcher />

      <ThemeArea initialTheme="light">
        <ContactsSection />
      </ThemeArea>

      <ThemeArea initialTheme="dark">
        <ContactsSection />
      </ThemeArea>
    </div>
  );
}

export default App;