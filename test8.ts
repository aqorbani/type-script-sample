class User2 {
  firstname: string;
  constructor(name: string) {
    this.firstname = name;
  }

  full(family: string) {
    console.log(this.firstname + " " + family);
  }
}

const user2 = new User("amir");
user.full("qorbani");
