// import axios from "axios";
// const array = [
//   { name: "Emin", age: 19 },
//   { name: "Fidan", age: 21 },
//   { name: "Minaya", age: 21 },
// ];

import axios from "axios";

// function toDo() {
//   setTimeout(() => {
//     array?.forEach((item) => console.log(item));
//   }, 1000);
// }
// function newTodo(todo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       array.push(todo);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// }

// newTodo({ name: "Gulu" })
//   .then((response) => toDo())
//   .catch((error) => console.log("err"));

// //AXIOS
// (async () => {
//   const { data: users } = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   console.log(users);
// })();

//PROMISE
// const getComments = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num == 1) {
//       resolve("comments");
//     } else if (num == 2) {
//       reject();
//     } else {
//       console.log("nothing");
//     }
//   });
// };

// async function getData2(postId) {
//   return new Promise(async (resolve, reject) => {
//     // const resp=await axios(`https://jsonplaceholder.typicode.com/posts`)
//     const { data } = await axios(
//       `https://jsonplaceholder.typicode.com/users/${postId}`
//     );
//     resolve(data);
//     // console.log(data);
//     // console.log(resp.data)
//   });
// }
// getData2(1);

// (async () => {
//   await getData2(1).then((data) => {
//     console.log(" 1.DATA ", data);
//   });
//   await getComments(1).then((data) => console.log("comments", data));
// })();

const getData = (num) => {
  return new Promise((resolve, reject) => {
    if (num == 1) {
      resolve("Res");
    }
    // reject("ers");
  });
};

//new Promisle cekmek
const getPosts = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    resolve(data);
    reject("err");
  });
};
(async () => {
 return await Promise.all([getPosts(5), getData(3)]).then((valuse) =>
    console.log(valuse)
  );
})();
