const array = [
  { name: "Emin", age: 19 },
  { name: "Fidan", age: 21 },
  { name: "Minaya", age: 21 },
];

function toDo() {
  setTimeout(() => {
    array?.forEach((item) => console.log(item));
  }, 1000);
}
function newTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      array.push(todo);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

newTodo({ name: "Gulu" }).then((response) => toDo());
