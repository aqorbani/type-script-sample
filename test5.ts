enum Personal {
  Name = "amir",
  Male = 0,
  Female = 1,
}

const object: {
  name: Personal;
  age: number;
  gender: Personal;
} = {
  name: Personal.Name,
  age: 30,
  gender: Personal.Male,
};

if (object.gender === Personal.Male) {
  console.log("he is Male");
}
