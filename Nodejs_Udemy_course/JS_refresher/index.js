const name = "Mateen Nawaz";
const age = 21;
const hasHobbies = ["Tech", "Programming", "Traveling"];

function mateenFunction() {
  console.log(
    `My name is ${name}. I'm ${age} years old. I've hobbies ${hasHobbies}.`
  );
}

mateenFunction();

// Pure function
function nawazFunc(userName, userAge, userHobbies) {
  return `My name is ${userName}. I'm ${userAge} years old. I've hobbies like ${userHobbies}.`;
}

console.log(nawazFunc(name, age, hasHobbies));

// Arrow Function
const arrFunc = (userName, userAge, userHobbies) => {
  console.log(
    `My name is ${userName}. I'm ${userAge} years old. I've hobbies like ${userHobbies}.`
  );
};

arrFunc(name, age, hasHobbies);

// Working with Objects & code
const obj1 = {
  name: "Mateen Mirani",
  status: "Single",
  qualification: "Graduate",
};

console.log(obj1);
// Access object property one by one
console.log(obj1.name);
console.log(obj1[1]);
