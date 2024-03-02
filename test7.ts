class User {
  firstname: string;
  constructor(name: string) {
    this.firstname = name;
  }

  full(family: string) {
    console.log(this.firstname + " " + family);
  }
}

const user = new User("amir");
user.full("qorbani");
