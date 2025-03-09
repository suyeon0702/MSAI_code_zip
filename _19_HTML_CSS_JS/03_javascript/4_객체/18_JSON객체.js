console.log("# [object]");
let user1 = {userName:"John", age: 30} // object
console.log(user1);
console.log("user1:", typeof user1);

// object --> JSON
console.log("\n# [object -> JSON]")
let user1Json = JSON.stringify(user1);
console.log(user1Json);
console.log("user1Json:", typeof user1Json);

// json --> object
console.log("\n# [JSON -> object]")
let user1Obj = JSON.parse(user1Json);
console.log(user1Obj, typeof user1Obj);