var response = true;

if (response) {
    console.log('Koden er true');
} else {
    console.log('Koden er false');
}

var navn = "Gandi";

if(navn == "Gandi") {
    console.log('Navnet er Gandi');
} else if (navn == "Bent") {
    console.log('Navnet er Bent');
} else {
    console.log('Navnet er ikke korrekt');
}

var navn = "Georg";

switch (navn) {
    case "Gert":
        console.log('Han har en plan');
        break;
    case "Finn":
        console.log('Ønsker ny hat');
        break;
    case "Georg":
        console.log('Får en lys idé');
        break;
    case "Hjælper":
        console.log(' er lille');
        break;
    default:
        console.log('ukendt');
        break;
    }

//Øvelse Betingelser 1
var Quan = true;

if(Quan == false) {
    console.log('Quan er korrekt');
}

//Øvelse Betingelser 2
var math = 2;

if(math > 5) {
    console.log('højere end 5');
} else if (math < 5) {
    console.log('lavere end 5');
}

//Øvelse Betingelser 3
var math = 6;
var result = math > 5 ? "højere end 5" : "lavere end 5";
console.log(result);

//Øvelse Betingelser 4
var laeskedrik_01 = "fims";

if (laeskedrik_01 == "icetea") {
    console.log('icetea er godt for miljøet');
} else if (laeskedrik_01 == "fims") {
    console.log('føj for heelve');
} else if (laeskedrik_01 == "Bent") {
    console.log('navnet er Bent');
}

//Øvelse Betingelser 5
var laeskedrik_02 = "fims";
switch (laeskedrik_02) {
    case "icetea":
        console.log('icetea er godt for miljøet');
        break;
    case "fims":
        console.log('føj for heelve');
        break;
    case "Bent":
        console.log('navnet er Bent');
        break;
}

//Øvelse Betingelser 6
//Se ReadMe

//Øvelse Operatorer 1
var tal_01 = 5;
var tal_02 = 8;

console.log(tal_01 + tal_02);
console.log(tal_01 - tal_02);
console.log(tal_01 * tal_02);
console.log(tal_01 / tal_02);
console.log(tal_01 % tal_02);
console.log(++tal_01);
console.log(--tal_02);

//Øvelse Operatorer 2
var tal_03 = 5;
var tal_04 = 6;

tal_03 += tal_04;
console.log(tal_03);

tal_03 -= tal_04;
console.log(tal_03);

tal_03 *= tal_04;
console.log(tal_03);

tal_03 /= tal_04;
console.log(tal_03);

tal_03 %= tal_04;
console.log(tal_03);

//Øvelse Operatorer 3

