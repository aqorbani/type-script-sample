"use strict";
let AddCallBack = (a, b, ab) => {
    const result = a + b;
    ab(result);
};
AddCallBack(5, 2, (res) => {
    console.log(res);
});
