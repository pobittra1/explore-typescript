{
  //destructuring
  //destructuring in object
  const user = {
    id: 1,
    contactNo: "017000000",
    name: {
      firstName: "vumi",
      lastName: "roy",
    },
    address: "uganda",
  };

  //des--
  const {
    id,
    name: { firstName, lastName }, // destructuring object in object
    contactNo: phoneNo, // name alias i mean contactNo name replace by phoneNo
  } = user; //in this destructuring way data type is automatically defined.

  //destructuring with array
  const friends = ["vumi", "pobi", "khusbu", "rachel"];
  const [, , bestu, ...rest] = friends; // bestu is khusbu and first 2 comma is for vumi and pobi and last rest operator for a reserve array like rest. in rest array assign value is rachel.
}
