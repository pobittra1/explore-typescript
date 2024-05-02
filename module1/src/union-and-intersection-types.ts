{
  //union and intersection type

  //union type
  type FrontendDeveloper = "looser" | "serious developer"; // string literal type with union
  type BackendDeveloper = "looser" | "backend developer"; // string literal type with union
  type Developer = FrontendDeveloper | BackendDeveloper; // types with union

  const newDeveloper: Developer = "looser";
  const developer: FrontendDeveloper = "serious developer";

  type Student = {
    name: string;
    roll: number;
    gender: "male" | "female" | "others"; // this is string literal union type
    class: number | string; // this is union type of types. value is number or string.
  };

  const student1: Student = {
    name: "vumi",
    roll: 12,
    gender: "female",
    class: "two", // this value would be number or string causes types are set to number | string with union types
  };

  //intersection type
  {
    type FrontendDeveloper = {
      skills: string[];
      designation1: "frontend developer";
    };
    type BackendDeveloper = {
      skills: string[];
      designation2: "backend developer";
    };
    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper; //intersection type here

    const fullstackDeveloper: FullstackDeveloper = {
      skills: ["html", "css", "mongodb", "express", "node"],
      designation1: "frontend developer",
      designation2: "backend developer",
    };
  }
}
