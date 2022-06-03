const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
//push->pushes a element at the end of an array
//num.push(10);
console.log(num.push(10));
//unshift->adds a new element at the starting of an array
console.log(num.unshift(0));
//pop->removes last element from an array
console.log(num.pop());
//shift->removes first element from an array
console.log(num.shift());
// we change an element of an  array like this
num[0] = "yash";

const names = ["yash", "Rohit", "Aman", "Tathagat", "Rohit", "Dope"];
console.log(names);
//indexOf() returns index of an element and searches from start
console.log(names.indexOf("Rohit"));
//lastIndexOf() returns index of an element and searches from last and resturn index if it is found
console.log(names.lastIndexOf("Rohit"));
//.includes() returns true/false if an array includes a given element to be searched
console.log(names.includes("Tathagat"));

let channel = [
  {
    name: "OOPS Music",
    subs: 10000,
  },
  {
    name: "GamepadHapticActuator",
    subs: 50000,
  },
  {
    name: "BGMI",
    subs: 100000,
  },
];

//find() we use it for referenced datatypes  
console.log(channel.find(function(element){
    return element.name='BGMI'
}))

console.log(channel.find((element)=>{
    return element.subs=10000;
}))

let name1=['yash','Rohit'];
let name2=['Aman','Saurav'];
// coccal-> we concat to concadinate 
console.log(name1.concat(name2,'Dope'));
//slice->
console.log(name1.slice(0,2));
// spread operator
let name3=[...name1,...name2];
console.log(name3);

//for loop
/*for(let i=0; i<names.length ; i++)
{
    console.log(names[i]);
}*/

//for of loop
for(let nameOfPersons of names)
{
 //   console.log(nameOfPersons);
}

//for-each loop

names.forEach(function(nameOfPersons,index){
  //  console.log(nameOfPersons,index);
})

//join()-> to join strings
 let student=['S','t','u','d','e','n','t'];
 console.log(student.join('_'));

 //splice()-> to split strings
// console.log(student.splice('_'));

//filter()-> we use it to filter our searches 
console.log(channel.filter((channel)=> { return channel.subs>50000}))
console.log(channel.map(city=>city.subs*2));