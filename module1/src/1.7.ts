{
  //spread operator with array
  const name1: string[] = ["vumi", "pobi", "poru"];
  const name2: string[] = ["vumi2", "pobi2", "poru2"];
  const names = name1.push(...name2);

  //spread operator with object
  const mentor1 = {
    typescript: "mezba",
    dbms: "mizan",
    redux: "mir",
  };

  const mentor2 = {
    next: "tanmoy",
    prisma: "firoz",
    cloud: "nahid",
  };

  const mentors = {
    ...mentor1,
    ...mentor2,
  };

  //rest parameter with function
  const greatingFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };

  greatingFriends("vumi", "pobi", "poru");
}
