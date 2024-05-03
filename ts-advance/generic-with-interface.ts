{
  //generic with interface
  //at first need to create structure of data using interface
  interface Developer<T, Y = null> {
    //send dynamic value in Developer interface. X and Y. Y is optional. Y is not exits then i send default value like null.
    name: string;
    computer: {
      brand: string;
      model: string;
    };
    smartWatch: T;
    bike?: Y;
  }
  //create data structure of smartwatch
  interface SmartWatch {
    brand: string;
    model: string;
    display: string;
  }

  const normalDeveloper: Developer<SmartWatch> = {
    //ignore default value of Y is null.
    name: "hazi",
    computer: {
      brand: "DCL",
      model: "12TR",
    },
    smartWatch: {
      brand: "symphony",
      model: "12GhT",
      display: "14 inch",
    },
    //bike key is optional that why not showing error
  };

  //create data structure of bike
  interface SomeBike {
    brand: string;
    model: string;
    isFuel: boolean;
  }
  const goodDeveloper: Developer<SmartWatch, SomeBike> = {
    name: "toriq",
    computer: {
      brand: "HP",
      model: "12TR",
    },
    smartWatch: {
      brand: "symphony",
      model: "12GhT",
      display: "14 inch",
    },
    bike: {
      //bike key is optional that why not showing error
      brand: "Yamaha",
      model: "R15 V4",
      isFuel: true,
    },
  };
}
