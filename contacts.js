const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  searchedContact = contacts.find((contact) => contact.id === contactId);
  return searchedContact ? searchedContact : null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((contact) => contact.id !== contactId);
  await updateContacts(newContacts);
  return contacts[idx];
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { name, email, phone, id: v4() };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateContacts = async (newContacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

module.exports = { listContacts, getContactById, removeContact, addContact };
