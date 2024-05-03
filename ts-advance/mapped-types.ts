{
  //mapped types
  {
    //change number array into string type array using mapped type
    const arrOfNumbers: number[] = [1, 2, 5, 6, 7, 8];
    const arrOfStrings: string[] = arrOfNumbers.map((number) =>
      number.toString()
    );
    console.log(arrOfStrings);

    //mapped type is for changing type dynamically.
    {
      //another example
      type AreNumber = {
        height: number;
        width: number;
      };

      type Height = AreNumber["height"]; // that is lookup type

      //change areaNumber type number to string using mapped type
      type AreaString = {
        [key in keyof AreNumber]: string;
      };
    }

    {
      //type convert with generic and loopup type
      type AreaString<T> = {
        [key in keyof T]: T[key];
      };

      const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 50,
      };
    }
  }
}
