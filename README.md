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

#Betingede sætninger, Operatorer og Løkker
##Øvelse 6
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
Boolean = True / False
String = Sætninger
Integer = Tal

= Det samme som variablen
== Af lig med
+ Noget som er ens
> Noget som er størrer
< Noget som er mindre