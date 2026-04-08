import ContactItem from "./ContactItem";

function ContactsList() {
  const contacts = [
    { id: 1, name: "John Doe", email: "john@email.com" },
    { id: 2, name: "Jane Doe", email: "jane@email.com" },
  ];

  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactsList;