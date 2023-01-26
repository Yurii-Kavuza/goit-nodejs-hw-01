const fs = require("fs").promises;
const path = require("path");

/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 *
 */
const contactsPath = path.join(__dirname, "db/contacts.json");

//const fs = require("fs/promises");

// TODO: задокументувати кожну функцію
// function listContacts() {
//   // ...твій код
// }

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

// function getContactById(contactId) {
//   // ...твій код
// }

const getContactById = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  searchedContact = contacts.find((contact) => contact.id === contactId);
  return searchedContact;
};

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = listContacts;
