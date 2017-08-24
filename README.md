# igang-med-github-christian-hansen

# H1
## H2
### H3
#### H4
##### H5
###### H6

ved at skrive  ````  efterfulgt af javascript, så highlighter man et specifikt stykke kode med en boks rundt om.
````javascript
Console.log("Hej verden");
````

ved at skrive  ````  efterfulgt af html, så highlighter man et specifikt stykke kode med en boks rundt om.
````html
header
    <ol>
        <li><a href="index.html">Forside</li>
        <li><a href="info.html">Om os</li>
    </ol>
header
````

ved at skrive  ````  efterfulgt af css, så highlighter man et specifikt stykke kode med en boks rundt om.
````css
header{
    height: 60px;
    background-color: rgba(68,68,68,0.5);
}
````

Hvordan man opretter et repository.
1) Først og fremmest logger vi ind på www.github.dk.
2) Oppe i højre hjørne trykker vi på " + " ikonet og derefter trykker vi på " New Repository ".
3) Så er vi klar til at vælge " Owner " altså hvor dit repository skal ligge.
4) Udfyld repository navn, altså navnet på den "mappe" du er igang med at oprette.
5) Du kan selv vælge om du vil udfylde en beskrivelse til din mappe, du kan også gøre dette senere.
6) Vælg om du ønsker din mappe skal være offentlig eller privat.
7) Det er vigtigt at hakke flueben i " Initialize this repository with a README " hvis altså du vil kunne se dine ændringer du laver hen af vejen.
8) Vælg "Gitignore" ud fra hvilket sprog du skal til at kode i.
9) Vælg en "License" ud fra dine ønsker, det er en god idé at læse lidt op på hvilke rettigheder man giver sig selv men også andre.
10) Sidst men ikke mindst, tryk " Create Repository " du har nu oprettet dit eget repository.

# Betingede sætninger, Operatorer og Løkker
## Øvelse 6
En if sætning fungere således at hvis man har en variabel
````javascript
var skolekridt = "har_rigeligt";
````
så kan man bruge sin variabel til at få et resultat i sin log.
det kunne f.eks se sådan her ud
````javascript 
var skolekridt == "har_rigeligt";

if (skolekridt == "har_rigeligt") {
    console.log('Der mangler ikke noget skolekridt');
}
````
hertil kan man så tilføje en else sætning. Hvis der ikke er nok skolekridt kan man få udskrevet i loggen at der mangler skolekridt, det kan se sådan her ud:
````javascript
var skolekridt = "mangler_skolekridt";

if (skolekridt == "har_rigeligt") {
    console.log('Der mangler ikke noget skolekridt');
} else if (skolekridt == "mangler_skolekridt") {
    console.log('Der mangler skolekridt');
}
````
# For, While, Do-While & ForEACH

En For-løkke, er en løkke som kører et hvis antal gange, hvis der er sat en ende på.

Eksempel:
```javascript
for (statement 1; statement 2; statement 3) {
    Code der bliver kørt
}
```

En While-løkke, er en løkke som kører, så længe at argumentet er lig med sandt. Hvis at argumentet bliver falsk, stopper løkken med at kører.

Eksempel:
```javascript
while (true) {
    Code er bliver kørt
}
```

En Do-While-løkke, den præcis som en almindelig 'while-løkke', det eneste der er til forskel, er at den kører en kode, før while-løkken igangsættes.

Eksempel:
```javascript
do {
    Kode som bliver kørt
}
while(argument);
```

En ForEACH løkke, fungere på samme måde som en while og en for løkke. En ForEACH, kører så mange gange, som der er af værdier i et array.

ForEACH ligger i arrayets data, ned i kassen "element".

eksempel: Øvelse Del 1 Løkker 2
````javascript
for (var i = 1; i <= 25; i++) {
    console.log(`Nummer: ${i}`);
}
````
Bool / Boolean = True/False
String = "Sætninger"
Int / Integer = Tal som 1, 2, 3 osv.

=  Erstatter det indhold som skulle være i en variablel

== er en sammenlignings-operator (Er lig med)

=== fungere på samme måde som '==' men med 3 === tjekker den også for om den er samme datatype.

!= betyder hvis IKKE lig med.

!== Betyder 'er ikke lig med' og 'ikke samme datatype
> betyder Større end...

< betyder Mindre end...

>= betyder større end eller er lig med...

<= betyder mindre end eller er lig med...

? er en 'Ternary Operator' det er en "3-delt" operator, som bruges f.eks. ved: Betingelsen : Sand / Falsk

& Er det første ikke sandt så spørger den, den næste, osv.
&&  Betyder egentlig bare 'Og'. Det er JavaScripts svar på og-tegn. Er det første ikke sandt så spørger den ikke den næste.

|| er en 'Eller' Operator. Bruges hvis en betingelse, skal endten det ene eller det andet.

!

# Node Package Manager
NPM = Node Package Manager (terminal: npm init) npm kan installeres globalt og lokalt.¨
Globalt = gælder alle fremtidige projekter (npm install nodemon --global eller -G)
Lokalt = gælder det pågældende projekt (npm install nodemon --save eller -S)