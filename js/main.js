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


// exercice 4
//fait avec une boucle for dans une boucle while

function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  document.write("<br> <h2>nombres premiers:</h2>  <br> <p>")
  let primeNumbers = [], i=1;
  do{
    if(isPrime(i)){
        primeNumbers.push(i);
        document.write(i + ", ")
    }
    i++;
  }
  while (i<100)
document.write("</p>")
  
//exercice 4 V2
//fait avec une boucle while dans une boucle for

function isPrime2(num){
    let primes = [];
    if (num < 3){
         return true;
    } 
    else{
        var a = num - 1;
        while (num%a !== 0){
            var a = a-1; 
            if (a === 1){
                return true; 
            } 
        }
        return false 
    } 
}

document.write("<br> <h2>nombres premiers V2:</h2>  <br> <p>")
for (let i = 2; i < 100; i++) {
    if (isPrime2(i) === true) {
        document.write(i + ", ")
    }
}
document.write("</p>")


  //exercice 5

document.write("<h2> Table de multiplication</h2><table class=\"table\">")
//boucle for pour la premiere ligne du tableau
for (let index = 0; index <= 10; index++) {
    if (index == 0) {
        document.write("<th>x</th>")
    }
    else
    document.write("<th>" + index + "</th>")
}
//boucle for pour creer 10 lignes
for (let i = 1; i <= 10; i++) {
    //on cree le debut de ligne
    document.write("<tr>")
    //on ecrit l'index de la table de multiplication en debut de ligne
    document.write("<th>" + i + "</th>")
    //on boucle 10 fois pour avoir 10 td dans ma ligne
    for (let z = 1; z <= 10; z++) {
        //on ecrit la td
        document.write("<td>" + z*i + "</td>")
    }
    //on ferme la ligne
    document.write("</tr>")
    
}
//on ferme le tableau
document.write("</table>")


//exercice 6

let btn = document.getElementById("btn");
btn.onclick = function() {
    if (document.body.style.background == "darkgray") 
        document.body.style.background = "white";
    else
    document.body.style.background = "darkgray";
    }; 


