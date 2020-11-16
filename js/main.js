// exercice 1

alert("bonjour tout le monde");
let prenom = prompt("quel est votre prénom ?");
alert("bonjour " + prenom);


// exercice 2

function somme(num1, num2) {
    return num1+num2;
}

let nombre1 = parseInt(prompt("veuillez entrer votre premier nombre :")),
    nombre2 = parseInt(prompt("veuillez entrer votre second nombre :"));
alert("La somme de vos nombre est: " + somme(nombre1,nombre2));

// exercice 3

let age = parseInt(prompt("Entrez votre age: "));

while (isNaN(age) || age > 123) {
    age = parseInt(prompt("Veuillez renseigner un age en chiffre :"));
}

let majeur = age>=18 ? true : false ;

if (majeur) {
    alert("Vous êtes majeur");
}
else{
    alert("vous êtes mineur")
}