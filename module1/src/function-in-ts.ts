{
  //function in ts
  //normal function in ts
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //arrow function in ts
  const addArrow = (num3: number, num4: number): number => {
    return num3 + num4;
  };

  //function in object-method
  const poorUser = {
    poorName: "vumi",
    poorLastName: "roy",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  //map with array - callback function
  let arr: number[] = [1, 1, 2, 3, 45, 2, 7];
  let newArray: number[] = arr.map((el: number): number => {
    return el * el;
  });
}
