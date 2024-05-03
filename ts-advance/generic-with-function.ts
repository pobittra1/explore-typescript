{
  //generic with function

  //at first create dynamic generic function
  const createArrayGeneric = <T>(param: T): T[] => {
    return [param];
  };
  //then create array of string using createArrayGeneric function
  const resultOfGenericString = createArrayGeneric<string>("something");

  //then create array of direct object using createArrayGeneric function
  const resultOfGenericObject = createArrayGeneric<{
    name: string;
    age: number;
  }>({
    name: "Mr. X",
    age: 12,
  });

  {
    //at first create dynamic generic function
    const createArrayGeneric = <T>(param: T): T[] => {
      return [param];
    };
    //create interface
    interface User {
      name: string;
      age: number;
    }

    //then create array of interface or type structure object using createArrayGeneric function
    const resultOfGenericObject = createArrayGeneric<User>({
      name: "something",
      age: 25,
    });
  }

  {
    //create array of tuple with generic
    const createArrayTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
      return [param1, param2];
    };
    //in this operation i have done tuple with dynamic data like string and boolean and save it to an array.
    const resultOfArrayTuple = createArrayTuple<string, boolean>(
      "something",
      true
    );
    //in this operation i have done tuple with dynamic data like string and object and save it to an array. i can also create type or interface for this object.
    const resultOfArrayTupleStringAndObj = createArrayTuple<
      string,
      { name: string; age: number; isLogged: boolean }
    >("details of user", { name: "Mr. X", age: 22, isLogged: false });
  }

  {
    //another example
    //create dynamic type and return two value into object with spread operator
    const addCourseToStudent = <T>(studentData: T) => {
      const course = "course of data structure and algorithm";
      return {
        ...studentData,
        course,
      };
    };
    //create interface for student 
    interface Student {
      name: string;
      email: string;
      isLogged?: boolean;
      studentEducatioData: {
        institute: string;
        class: number;
        section?: string;
      };
    }

    //store dynamic data using addCourseToStudent and send data type or interface into function that name is Student and also set data.
    const student1 = addCourseToStudent<Student>({
      name: "vumi",
      email: "example@email.com",
      isLogged: true,
      studentEducatioData: {
        institute: "Rangpur polytechnic institute",
        class: 12,
        section: "B",
      },
    });
  }
}
