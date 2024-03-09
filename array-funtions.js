const users = [{ name: "Minaya", age: 20 }, "Emin"];
/*
push
map
find
filter
some
every
includes
*/
//push-arrayin sonuna bir eleman ekler
const newArray = users.push("Fatma");
console.log(users); //arrayi
console.log(newArray); //lenght
//map arrayin elemanlarini bir-bir doner
users.map((user) => console.log(user));
//find verdiyimiz serte uygun tapdiqi ilk elementi getirir
const findIt = users?.find(({name,age}) => name == "Minaya" && age == 20);
console.log("result", findIt);
//filter verdigimiz serte uygun filtreleme yapar
//sum arrayin elemanlari icinde verdiyimiz sarta 1 i bile uyarsa true doner aksi taktirde false
//evry arrayin butun elemanlarinin sarta ymasini bekler uyarsa true olmazsa false doner
//includes arrayin icinde icinde varmi yokmu