// // tænk på dette som den primære funktion der kaldes fra vores kode
// function doSomething(someValue, callback){
//     callback(someValue);
//  }
//  // denne funktion vil blive udført som en callback FRA doSomething funktionen
//  function outputSomething(value){
//     console.log(value);
//  }
 
//  doSomething('text', outputSomething);

// Øvelse 1 
var data = [1, 2, 3, 4, 5, 6];

function vejr(grader) {
    console.log(grader);
}

data.forEach(function(grader) {
    console.log(grader);
});