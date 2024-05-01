//type alias in ts

//alias in obj
type Student = {
  // first leter of type name should be capital leter.
  id: number;
  roll: number;
  name: string;
  midName?: string; // that is for optional. if exist midName or not exist - no eror.
  lastName: string;
  class: string;
};

const student1: Student = {
  id: 1,
  roll: 11,
  name: "vumi",
  midName: "rani",
  lastName: "roy",
  class: "inter 2nd year",
};

const student2: Student = {
  // in this object midName is not available
  id: 2,
  roll: 12,
  name: "pobi",
  lastName: "roy",
  class: "inter 2nd year",
};

const student3: Student = {
  id: 3,
  roll: 8,
  name: "poru",
  midName: "ruhi",
  lastName: "hasan",
  class: "inter 1st year",
};

//type alias in function
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;
