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

enum Personal {
  NAME = "amir hosseinq",
  MALE = 0,
  FEMALE = 1,
}

const obj: {
  name: Personal;
  age: number;
  gender: Personal;
} = {
  name: Personal.NAME,
  age: 26,
  gender: Personal.MALE,
};

if (obj.gender === Personal.MALE) {
  console.log("he is Male");
}
