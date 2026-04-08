import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ContactItem({ contact }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`contact-item theme-${theme}`}>
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
    </div>
  );
}

export default ContactItem;