{
  //explore utility types
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  {
    //pick type
    //that mean's i can pick any type from another type
    //example
    //collect name and age value from Person type and create another type
    type NameAge = Pick<Person, "name" | "age">;
  }
  {
    //Omit type
    //that mean's i can slice any type from another type
    //example
    //collect email and contactInfo value from Person type and create another type
    type EmailContactInfo = Omit<Person, "name" | "age">;
  }
  {
    //Required type
    //that mean's all keys are required if have optional key it's also required and create another type
    //example
    type PersonRequired = Required<Person>;
  }
  {
    //Readonly type
    //that mean's we cant't change any value of this type
    //example
    type PersonReadonly = Readonly<Person>;
    const person1: PersonReadonly = {
      name: "sakura",
      age: 22,
      contactNo: "017",
    };
    // person1.name= "we can't assign value causes it's readonly";
  }
  {
    //Record type
    //that mean's it is create a structure of type object
    //example
    type MyRecordData = Record<string,string>;

    const obg1: MyRecordData = {
        name:"vumi",
        //age:12 we can't assign number causes it record is string key and string value.
    }
    {
        //another example of Record type
        const emptyObj : Record<string, unknown> = {}
        const obj1 : 
    }
  }
}
