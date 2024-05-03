{
  //constraints using keyof with generic

  type Vehicle = {
    car: string;
    bike: string;
    ship: string;
  };

  type Owner1 = "car" | "bike" | "ship";
  type Owner2 = keyof Vehicle; // same as Owner1 type. in this situation keyof create a union type with Vehicle's key like car, bike and ship.

  const person1: Owner1 = "car";
  const person2: Owner2 = "bike";

  {
    //another example
    //create a function that can recive 2 parameter. one is object and second is any key of this object. and console it or store data in a variable.
    const getPropertyValue = <X,Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key];
    }

    //create object with some data
    const user = {
        name:"Mr. hero",
        age:32,
        gender:"male",
    }

    //get the value of user object using getPropertyValue
    const getUserObjValueName = getPropertyValue(user, "name");
    const getUserObjValueAge = getPropertyValue(user, "age");
    const getUserObjValueGender = getPropertyValue(user, "gender");
  }
}
