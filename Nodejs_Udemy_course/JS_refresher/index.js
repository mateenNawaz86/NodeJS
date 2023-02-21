// const name = "Mateen Nawaz";
// const age = 21;
// const hasHobbies = ["Tech", "Programming", "Traveling"];

// function mateenFunction() {
//   console.log(
//     `My name is ${name}. I'm ${age} years old. I've hobbies ${hasHobbies}.`
//   );
// }

// mateenFunction();

// // Pure function
// function nawazFunc(userName, userAge, userHobbies) {
//   return `My name is ${userName}. I'm ${userAge} years old. I've hobbies like ${userHobbies}.`;
// }

// console.log(nawazFunc(name, age, hasHobbies));

// // Arrow Function
// const arrFunc = (userName, userAge, userHobbies) => {
//   console.log(
//     `My name is ${userName}. I'm ${userAge} years old. I've hobbies like ${userHobbies}.`
//   );
// };

// arrFunc(name, age, hasHobbies);

// // Working with Objects & code
// const obj1 = {
//   userName: "Mateen Mirani",
//   status: "Single",
//   qualification: "Graduate",
//   personInfo: function () {
//     return `My name is ${this.userName}, I'm ${this.status}, and my qaulification is ${this.qualification}`;
//   },
// };

// console.log(obj1);
// // Access object property one by one
// console.log(obj1.userName);
// console.log(obj1.personInfo());

// // Play with array data structure
// const arr1 = ["Tech", "Traveling", "Programming"];
// console.log(arr1.map((item) => console.log(`My hobbies: ${item}.`)));
// console.log(arr1);
// arr1.push("Foodie");
// console.log(arr1);

// // Spread Operator
// const sp1 = [12, "Mateen", "Programmer"];
// const copiedArray = [...sp1];
// console.log(copiedArray);

// const copiedObj = { ...obj1 };
// console.log(copiedObj);

// // without Rest operator
// const withOutRes = (arg1, arg2, arg3) => {
//   return arg1 + arg2 + arg3;
// };
// console.log(withOutRes(21, 1, 43));

// // With rest operator --> it always return an new array
// const withResOp = (...args) => {
//   return args;
// };

// console.log(withResOp(21, "Mateen", "Single"));

// // Object Destructering
// const person = {
//   personName: "John",
//   personAge: 32,
//   greet() {
//     return `My name is ${this.personName}. I'm ${this.personAge} years old.`;
//   },
// };

// console.log(person.greet());

// const { personName, personAge } = { ...person };
// console.log(personName, personAge);

// // Array Destructering
// const personArr = ["Mateen", 21, "Programmer"];
// const [namee, agee, passion] = [...personArr];
// console.log(namee, agee, passion);

// Async Code --> It run after a specific time
setTimeout(() => {
  console.log("My name is Mateen Nawaz!");
}, 2000);
console.log("Hello World!"); // this run immediatly

// Pass a function as a callback
const myFunc = () => {
  // Create a promise --> work as a sync code
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Timer is done!");
      resolve("Done!");
    }, 1000);
  });
  return promise;
};

const asyncFunc = () => {
  setTimeout(() => {
    console.log("Async code from function!");
    // myFunc((text) => {
    //   console.log(text);
    // });
    myFunc()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 1500);
};

asyncFunc();
