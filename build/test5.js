"use strict";
var Personal;
(function (Personal) {
    Personal["Name"] = "amir";
    Personal[Personal["Male"] = 0] = "Male";
    Personal[Personal["Female"] = 1] = "Female";
})(Personal || (Personal = {}));
const object = {
    name: Personal.Name,
    age: 30,
    gender: Personal.Male,
};
if (object.gender === Personal.Male) {
    console.log("he is Male");
}
