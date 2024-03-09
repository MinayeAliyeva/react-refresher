setTimeout(() => {
    console.log("Mehraba");
}, 3000);
import axios from "axios";
setInterval(() => {
    console.log("Mehraba");
}, 1000);

const sayHello = (callback) => {
  callback();
};
sayHello(() => console.log("Hello"));
jsonplaceholder
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then(
    (posts) => console.log("1",posts),
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((data) => data.json())
      .then(
        (users) => console.log("2",users),
        fetch("https://jsonplaceholder.typicode.com/posts/1")
          .then((data) => data.json())
          .then((post2) => console.log("3",post2))
      )
  );

  fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => console.log("ayri users"))
  fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((users) => console.log("ayri posts"))

async function getData() {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();
  console.log("users", users);
  console.log("post/2", post2);
  console.log("post/1", post1);
}

getData();

(async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();
  console.log("users", users);
  console.log("post/1", post1);
  console.log("post/2", post2);
})();

//Callback
const array = [
  { name: "Emin", age: 19 },
  { name: "Fidan", age: 21 },
  { name: "Minaya", age: 21 },
];

function todoList() {
  setTimeout(() => {
    array?.forEach((item) => console.log(item));
  }, 1000);
}

function newTodo(todo, cb) {
  setTimeout(() => {
    array?.push(todo);
    cb();
  }, 3000);
}

newTodo({ name: "Gulu" }, todoList);

function hello() {
  setTimeout(() => {
    console.log("1");
  }, 1000);
}
hello();

setTimeout(() => {
  function hello() {
    console.log("2");
  }
  hello();
}, 1000);

(() => {
  console.log("anonyms");
})();
// https://jsonplaceholder.typicode.com/users

async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = await res?.data;
  return data;
}
getData();
console.log(data);

(async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
})();
console.log("1", data);

const arr = [{ name: "Minaya" }, { name: "Emin" }];

const todoList = () => {
  setTimeout(() => {
    arr?.forEach((item) => console.log(item));
  }, 1000);
};

const newTodo = (todo, cb) => {
  setTimeout(() => {
    arr.push(todo);
    cb();
  }, 2000);
};
newTodo({ name: "Gulu" }, todoList);

const sayHi = (cb) => {
  cb();
};
sayHi(() => console.log("Helll"));

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => data.json())
  .then((users) => {
    console.log("1", users);
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((data) => data.json())
      .then((data) => {
        console.log("2", data);
        fetch("https://jsonplaceholder.typicode.com/users/3")
          .then((data) => data.json())
          .then((data) => console.log("3", data));
      });
  });

// ASYNC AWAIT
async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      console.log("users",users);
}

getData();

(async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  console.log(users);
})();
