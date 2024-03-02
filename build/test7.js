"use strict";
class User {
    constructor(name) {
        this.firstname = name;
    }
    full(family) {
        console.log(this.firstname + " " + family);
    }
}
const user = new User("amir");
user.full("qorbani");
