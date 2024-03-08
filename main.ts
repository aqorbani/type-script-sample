// let cartItems: Array<string | number>;

// cartItems = ["", "", "", 2, 3, 6];

// function addProduct(title: string, price: number): void {
//   const product = title + price;
//   console.log(product);
// }

// function add(num1: number, num2: number): number {
//   const result = num1 + num2;
//   return result;
// }

// function createUser(
//   id: number,
//   email: string,
//   role: (userId: number, isAdmin: boolean) => void
// ) {
//   role(3, true);
// }

// type FnType = (userId: number, isAdmin: boolean) => void;

// function createUser(id: number, email: string, role: FnType) {
//   role(3, true);
// }

// interface User {
//   email: string;
//   password: number;
// }
// interface User {
//   id: number;
// }

// let user: User = {
//   id: 1,
//   email: "a@abstract.com",
//   password: 123,
// };

// class Auth implements User {
//   id: number;
//   email: string;
//   password: number;
//   name: string;
// }

// function login(userInfo: User) {}

// login(new Auth());

type InfoItem = {
  description: string;
};

type Skills = {
  skills: string[];
};

type UserProfile = InfoItem & Skills;

let userInfo: InfoItem & Skills;

userInfo = {
  description: "im a programmer",
  skills: ["js", "node"],
};
