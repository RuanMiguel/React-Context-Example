import ContactsList from "./ContactsList";
import { ThemeSwitcher } from "../ThemeSwitcher";

function ContactsSection() {
  return (
    <section>
      <h2>Contacts</h2>

      <ThemeSwitcher />

      <ContactsList />
    </section>
  );
}

export default ContactsSection;
