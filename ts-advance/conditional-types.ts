{
  //conditional types

  {
    //example 1
    type a1 = null;
    type b1 = undefined;
    //lets check single condition type
    type X = a1 extends null ? true : boolean; // that mean's a1 type is null so X type is true or a1 type is without null so X type is boolean;
    //lets check nested condition type
    type Y = a1 extends number ? true : b1 extends null ? false : any; //that mean's if a1 type is extends number so Y is true or extends null Y is false or extends without number or null so Y is any type.
  }
  {
    //another example 2
    type Seikh = {
      car: string;
      bike: string;
      ship: string;
    };
    //check vehilce of seikh by using conditional and generic types
    type CheckVehicle<T> = T extends keyof Seikh ? true : false;
    type HasBike = CheckVehicle<"bike">; //true
    type HasTractor = CheckVehicle<"tractor">; //false
  }
}
