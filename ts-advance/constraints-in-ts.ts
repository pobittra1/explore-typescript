{
  //contraints in ts (thats mean it's fixed value when i pass dynamic data)
  //create dynamic type and return two value into object with spread operator
  {
    //as my opinion
    interface Student {
      id: number;
      name: string;
      email: string;
    }
    const addCourseToStudent = <T extends Student>(studentData: T) => {
      const course = "course of data structure and algorithm";
      return {
        ...studentData,
        course,
      };
    };

    const student = addCourseToStudent<Student>({
      id: 1,
      name: "something",
      email: "example@email.com",
    });
  }

  //mezba vai explain
  const addCourseToStudent = <
    T extends {
      //constraints part
      id: number;
      name: string;
      email: string;
    }
  >(
    studentData: T
  ) => {
    const course = "course of data structure and algorithm";
    return {
      ...studentData,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
  }>({
    id: 1,
    name: "something",
    email: "example@email.com",
  });
}
