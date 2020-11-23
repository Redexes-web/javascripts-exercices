
//exercice 1
function inverseString(str) {
    reversed = [...str].reverse().join('');
    document.getElementById('inverseResult').innerHTML = reversed;
}

//exercice 2
function isPalindrome(stringToTest) {
    stringToTestLower = stringToTest.toLowerCase().replace(/\s/g, '');
    
    strReversed = [...stringToTestLower].reverse().join('')
    
    result = document.getElementById("palinResult")
    if (stringToTestLower === "")
    result.innerHTML = 'Veuillez saisir un mot';
    else if (stringToTestLower === strReversed)
    result.innerHTML = stringToTest + ' est un palindrome';
    else
    result.innerHTML = stringToTest + ' n\'est pas un palindrome';
}

//exercice 3
function generateAllCombinaisons(str) {
    result = document.getElementById('allCombinaisons')
    result.innerHTML = "";
    var array1 = [];
    for (var x = 0, y=1; x < str.length; x++,y++) 
    {
    array1[x]=str.substring(x, y);
        }
    var temp= "";
    var strlent = Math.pow(2, array1.length);

    for (var i = 0; i < strlent ; i++)
    {
        temp= "";
        for (var j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){ 
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            let newLi = document.createElement("li");
            newLi.classList.add("list-group-item");
            newLi.innerHTML = temp
            result.appendChild(newLi);
        }
    }
    document.getElementById('generate').insertBefore(result, null);
}

//exercice 4
function sortByAlphabet(str) {
    sorted = [...str].sort().join('');
    document.getElementById('sortResult').innerHTML = sorted;
}

//exercice 5
function toUpperCaseFirstLetter(strToConvert) {
    wordArray = strToConvert.split(/\s/g);
    for (let index = 0; index < wordArray.length; index++) {
        wordArray[index] = UcFirst(wordArray[index]);
        
    }
    strConverted = wordArray.join(' ');
    result = document.getElementById('ucflResult');
    result.innerHTML = strConverted;
}

function UcFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//exercice 6
function findLongestWord(str)
{
    wordArray = str.split(/\s/g);
    w=0
    longest = ""
    wordArray.forEach(word => {
        if (w < word.length) {
            longest = word;
            w = word.length;
        }
    });
    result = document.getElementById('longestResult');
    result.innerHTML = longest;
}

let test = document.getElementById("test");
let test2 = $("#test");
console.log({test});
console.log({test2});