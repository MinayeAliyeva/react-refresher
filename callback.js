// setTimeout(() => {
//     console.log("Mehraba");
// }, 3000);

// setInterval(() => {
//     console.log("Mehraba");
// }, 1000);

// const sayHello = (callback) => {
//   callback();
// };
// sayHello(() => console.log("Hello"));
// jsonplaceholder
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then(
    (posts) => console.log("users"),
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((users) => console.log("posts"))
  );
