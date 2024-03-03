"use strict";
class User2 {
    constructor(name) {
        this.firstname = name;
    }
    full(family) {
        console.log(this.firstname + " " + family);
    }
}
const user2 = new User("amir");
user.full("qorbani");
