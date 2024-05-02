{
  //type assertion or narrowing
  let nothingType: any;

  //then i can asign value as any types of data.
  nothingType = "something"; // can assign string
  nothingType = true; //can assign booelan
  nothingType = 12; // or i can assign number
  // so i need to fixed type, need to ensure that type is only one type. that's why i use type assertion or type narrowing
  (nothingType as string).length;
  //or i can perform type mothods using specific types

  {
    //another example
    const hourToMin = (val: string | number): string | number | undefined => {
      if (typeof val === "string") {
        const result = parseFloat(val) * 60;
        return `the converted hour is: ${result}`;
      } else if (typeof val === "number") {
        const result = val * 60;
        return result;
      }
    };
    const resultAsString = hourToMin("12") as string; // use type assertion
    const resultAsNumber = hourToMin(12) as number; // use type assertion
    console.log({ resultAsString, resultAsNumber });
  }

  {
    //another example
    //create custom type error obj
    type CustomError = {
      message: string;
    };
    try {
    } catch (err) {
      console.log((err as CustomError).message); // use type assertion
    }
  }
}
