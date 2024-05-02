{
  //interface , type vs interface

  {
    //same as type but interface work for non-primitive's data types like object, array and for tupple (ATO)
    //when we use intersection (&) in type. same as we can use extends instead of intersection (&) when we use interface.
    //example 1
    {
      //example as type
      type UserDetails1 = {
        name: string;
        age: number;
      };
      type UserDetails2 = {
        gender: string;
      };
      type MainUserDetails = UserDetails1 & UserDetails2; // here it is intersection when use type
      const UserDetails: MainUserDetails = {
        name: "something",
        age: 12,
        gender: "male",
      };
    }
    {
      //example as interface
      interface UserDetails1 {
        name: string;
        age: number;
      }
      interface MainUserDetails extends UserDetails1 {
        gender: string;
      }
      const UserDetails: MainUserDetails = {
        name: "something",
        age: 12,
        gender: "male",
      };
    }

    //we can also extends of type. not only interface.
    {
      //declare array in type
      type RollType = number[];
      const rollType: RollType = [1, 2, 3]; //assign array with type
      //declare array in interface
      interface RollInterface {
        [index: number]: number;
      }
      const rollInterface = [1, 2, 3, 4]; //assign array with interface
    }
    {
      //declare function in type
      type AddType = (num1: string, num2: string) => number;
      //declare function in inteface
      interface AddInterface {
        (num1: string, num2: string): number;
      }
    }
  }
}
