// const sum = (a, b) => a + b;
// // const hello = name => console.log("Hello " + name);
// const hello = (name) => console.log(`Hello ${name}`);
// const cikar = (a, b) => a - b;

// export { cikar, sum };
// export default hello;

const helloName = (name) => console.log(` Hello ${name} `);
const helloSname = (sname) => console.log(`Hello ${sname}`);
const helloAge = (age) => console.log(`Hello ${age}`);
export const text = "Text";
export const user = {
  name: "Minaya",
  age: 34,
};
export const arr = [
  {
    name: "Minaya",
    age: 34,
  },
  {
    name: "Emin",
    age: 34,
  },
];
export default helloSname;
export { helloAge, helloName };
