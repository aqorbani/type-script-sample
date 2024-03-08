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
function createUser(
  id: number,
  email: string,
  role: (userId: number, isAdmin: boolean) => void
) {
  role(3, true);
}
