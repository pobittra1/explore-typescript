"use strict";
{
    //function in ts
    //normal function in ts
    function add(num1, num2) {
        return num1 + num2;
    }
    //arrow function in ts
    const addArrow = (num3, num4) => {
        return num3 + num4;
    };
    //function in object-method
    const poorUser = {
        poorName: "vumi",
        poorLastName: "roy",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    //map with array - callback function
    let arr = [1, 1, 2, 3, 45, 2, 7];
    let newArray = arr.map((el) => {
        return el * el;
    });
}
