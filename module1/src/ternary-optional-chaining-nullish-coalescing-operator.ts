{
  //ternary, optional chaining, and nullish coalescing operator

  //ternary operator
  //normal
  const age = 12;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  //ternary
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  //nullish coalescing operator
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "not authentic";
  const result2 = isAuthenticated ? isAuthenticated : "not authentic";
  console.log({ result1 }, { result2 });

  //optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      presentAddress: string;
      parmanentAddress?: string; // optional chaining
    };
  };

  const user: User = {
    name: "vumi",
    address: {
      city: "tkg",
      presentAddress: "tkg tawn",
    },
  };

  const parmanentAddress =
    user?.address?.parmanentAddress ?? "no parmanent address"; // in this line  i use optional chaining (?) and also nullish coalescing (??) operator
  console.log({parmanentAddress});
}
