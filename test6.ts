type callback = (a: number, b: number, ab: (num: number) => void) => void;

let AddCallBack: callback = (a, b, ab) => {
  const result = a + b;
  ab(result);
};

AddCallBack(5, 2, (res) => {
  console.log(res);
});
