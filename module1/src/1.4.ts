{
  //basic data types

  //primitive datatypes
  //string
  let firstName: string = "vumi";

  //number
  let roll: number = 4;

  //boolean
  let isAdmin: boolean = true;

  //undefined
  let x: undefined = undefined;

  //null
  let y: null = null;

  //deaclare variable type
  let d: number;
  d = 52;

  //non-primitive datatypes

  //array
  let numbers: number[] = [1, 2, 3, 4, 5];
  let names: string[] = ["vumi", "pobi", "poru"];

  //tuple
  let nameAge: [number, string];
  nameAge = [21, "vumi"];
  let myTuple: [boolean, string, number];
  myTuple = [true, "vumi", 21];
  //we can change value by indexing
  myTuple[2] = 20;
  nameAge[1] = "pobi";
}
