"use strict";
{
    //spread operator with array
    const name1 = ["vumi", "pobi", "poru"];
    const name2 = ["vumi2", "pobi2", "poru2"];
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
    const mentors = Object.assign(Object.assign({}, mentor1), mentor2);
    //rest parameter with function
    const greatingFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi ${friend}`);
        });
    };
    greatingFriends("vumi", "pobi", "poru");
}
