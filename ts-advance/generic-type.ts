{
  //generic type
  //generic type with an array
  {
    //my syntax
    //structure of an array by type.
    type GenericArray = Array<string | number | boolean>;

    //   const ids: number[] = [1, 2, 3];
    const ids: GenericArray = [1, 2, 3];
    //   const subjects: string[] = ["bangla", "english", "mathmatics"];
    const subjects: GenericArray = ["bangla", "english", "mathmatics"];
    //   const booleanArray: boolean[]= [true, false, false];
    const booleanArray: GenericArray = [true, false, false];
  }

  {
    //mezba vai syntax
    //structure of an array by type
    type GenericArray<T> = Array<T>; //create generic type array or T[]
    const ids: GenericArray<number> = [1, 2, 3]; // create number array
    const subjects: GenericArray<string> = ["bangla", "english", "mathmatics"]; // create string array
    const booleanArray: GenericArray<boolean> = [true, false, false]; // create boolean array
  }
  {
    //array of object
    type GenericArray<T> = Array<T>; //create generic type array
    const user: GenericArray<{ name: string; age: number }> = [
      {
        name: "mr x",
        age: 23,
      },
      {
        name: "mr y",
        age: 22,
      },
      {
        name: "mr john",
        age: 12,
      },
    ];
  }
  {
    //generic tuple
    type GenericTuple<X, Y> = [X, Y]; //create generic tuple
    //create interface for data of Y and send it to Generic tuple of Y
    interface Person {
      name: string;
      age: number;
      email: string;
      isLogged: boolean;
    }
    const userDetails: GenericTuple<number, Person> = [
      12,
      {
        name: "something",
        age: 13,
        email: "example@email.com",
        isLogged: false,
      },
    ];
  }
}
