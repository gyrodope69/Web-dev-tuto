let bread1= prompt("Which bread  would you like to have :-");
let veggies= prompt("What kind of vegetables would you like to have :-");
let sauces= prompt("What kind of sauces is your favourite");

function createSandwhich(bread,veggie,sauce){
    let sandwhich= bread+" bread "+veggie+" vegetables "+sauce+" sauce ";
    return sandwhich;
} 

 let vegsandwhich=createSandwhich(bread1,veggies,sauces);
 console.log(vegsandwhich);