"use strict";
// var m: string = "tets";
// function aw(bb: string) {
//   return bb;
// }
// console.log(aw(m));
// const data: {
//   name: string;
//   age: number;
// } = {
//   name: "amir hossein",
//   age: 26,
// };
// console.log(data.name);
var Personal;
(function (Personal) {
    Personal["NAME"] = "amir hossein";
    Personal[Personal["MALE"] = 0] = "MALE";
    Personal[Personal["FEMALE"] = 1] = "FEMALE";
})(Personal || (Personal = {}));
const obj = {
    name: Personal.NAME,
    age: 26,
    gender: Personal.MALE,
};
if (obj.gender === Personal.MALE) {
    console.log("he is Male");
}
