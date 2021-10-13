export class Contact {
  name = '';
  lastName = '';
  email = '';
  isOnline = false;

  constructor(name, lastName, email, isOnline) {
    this.lastName = lastName;
    this.name = name;
    this.isOnline = isOnline;
    this.email = email;
  }
}
