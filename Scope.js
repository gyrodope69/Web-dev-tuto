// /*By default its global
// Global scope uses a global object In Browser environment : we use 'window object' as a global obect and In node environment we use 'global object'*/
// var name = "Rohit";
// function sayName() {
//     var marks=90;
//     console.log(name);
// }

// sayName();
// console.log();// will throw an error

// function first()
// {
//     //local scope #1
//     var x=9;
//     console.log(x);
//     function second()
//     {
//         //local scope #2
//         var x=10;
//         console.log(x);
//     }
//     second();
// }
// first();

var x = 10;
{
  var x = 1;
  console.log(x);
}
console.log(x);
