{
  // asynchronous typescript

  //create some data using type
  type UserData = {
    name: string;
    age: number;
  };

  //create promise
  const createPromise = (): Promise<UserData> => {
    return new Promise<UserData>((resolve, reject) => {
      const data: UserData = { name: "vumi", age: 12 };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling create proise data
  const showData = async (): Promise<UserData> => {
    const data: UserData = await createPromise();
    return data;
  };
  //then call showdata
  showData();

  {
    //create type for server data
    type Todo = {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    };
    //handling or fetching data from server

    const getTodo = async (): Promise<Todo> => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data: Todo = await res.json();
      // console.log(data);
      return data;
    };
    //calling data for get data
    getTodo();
  }
}
