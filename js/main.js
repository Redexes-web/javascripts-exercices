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

function isPrime(num) {
    for(var i = 2; i < num; i++)
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
  
  //exercice 5
document.write("<h2> Table de multiplication</h2><table class=\"table\">")
for (let i = 1; i <= 10; i++) {
    document.write("<tr>")
    for (let z = 1; z <= 10; z++) {
        document.write("<td>" + z*i + "</td>")
        
    }
    document.write("</tr>")
    
}
document.write("</table>")


//exercice 6

let btn = document.getElementById("btn");
btn.onclick = function() {
    if (document.body.style.background == "darkgray") 
        document.body.style.background = "white";
    else
    document.body.style.background = "darkgray";
    }; 