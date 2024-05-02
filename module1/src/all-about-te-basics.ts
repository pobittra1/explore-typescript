{
  {
    //tuple-----------
    //declare tuple and intialize it
    let myInfo: [number, string, boolean] = [1, "something1", true];

    //declare tuple
    let ourTuple: [number, boolean, string];
    // initialize tuple correctly
    ourTuple = [5, false, "Coding God was here"];
  }

  {
    //object, optional, literal, readonly= just for read, not for changing the value of yourMotherHave
    const user: {
      //object
      name: string; //set type string
      age: number; //set type number
      address: string; //set type string
      parmanentAddress?: string; //optional chaining
      yourFatherHave: boolean; //set type boolen
      readonly yourMotherHave: "yes"; //set type string literal and use readonly
    } = {
      name: "vumi",
      age: 12,
      address: "komu na",
      yourFatherHave: true,
      yourMotherHave: "yes",
    };
  }

  {
    //function in ts

    {
      //normal function with type
      function normalFunc(msg: string) {
        console.log(msg);
      }
      normalFunc("show something");
    }
    {
      //arrow function with type
      const arrowFunc = (msg: string) => {
        console.log(msg);
      };
      arrowFunc("show something");
    }
    {
      //function in object called method
    //   const objOfFunc: {
    //     operationName:
    //       | "addition"
    //       | "subctraction"
    //       | "multiplication"
    //       | "division"; //string literal with union operator
    //     operationVal1: number;
    //     operationVal2?: number; //optional chaining with number type
    //     operation: number;
    //   } = {
    //     operationName: "addition",
    //     operationVal1: 12,
    //     operationVal2: 15,
    //     operation(operationVal1: number, operationVal2: number = 10): number {
    //       //optionalVal2 is optional with default value.
    //       return operationVal1 + operationVal2;
    //     },
    //   };
    }
    {
      //nullise coalescence with union operator
      function printResult(result: number | null | undefined) {
        console.log(`Result is: ${result ?? "Not Available"}`);
      }
      //nullish value are null or undefined.
      printResult(null); // Prints 'Result: Not Available'
      printResult(80); // Prints 'Result: 80'
    }

    {
      //unknown type with ternary
      const getTypeAndCountTypeLenght = (val: unknown) => {
        const typeIs =
          typeof val === "string"
            ? console.log(`type is ${typeof val} and lenght is ${val.length}`)
            : typeof val === "number"
            ? console.log(
                `type is ${typeof val} and lenght is: number length is not exist`
              )
            : typeof val === undefined
            ? console.log(`type is ${typeof val} and lenght is: number length is not exist`)
            : console.log("another type");
      };
      getTypeAndCountTypeLenght("i am here");
    }


  }
}
