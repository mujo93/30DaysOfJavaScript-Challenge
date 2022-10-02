import {countries} from './countries.js'
import {mernStack, webTechs} from'./web_techs.js'
// 1-Iterate 0 to 10 using for loop, do the same using while and do while loop
/*
for(let i=0; i<10; i++){
    console.log("Mucahit Bayrak")
}

let i=0;
while (i<10){
    console.log("Mucahit")
    i++
}

let j=0
do{
    console.log("Mucahit Bayrak/ do-while")
    j++
}
while(j<10)

// 2-Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i=10; i>0; i--){
    console.log("Mucahit Bayrak/for-loop")
}

let m=10;
while (m>0){
    console.log("Mucahit/while loop")
    m--
}

let k=10
do{
    console.log("Mucahit Bayrak/ do-while loop")
    k--
}
while(k>0)

// 4-Write a loop that makes the following pattern using console.log():
for(let i=1; i<8 ; i++){
    let output='#'
    for(let j=1; j<i ; j++){
        output+='#'
    }
    console.log(output)
}

//5- Use loop to print the following pattern:

for(let i=0;i<11 ; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

//6- Using loop print the following pattern

console.log('i\t\t i^2\t\t i^3')
for(let i=0; i<11; i++){
    console.log(`${i}\t\t ${i*i}\t\t ${i*i*i}`)
}

//7-Use for loop to iterate from 0 to 100 and print only even numbers

for(let i=0;i<101 ; i++){
    i%2==0 ? console.log(i):''
}


// 8- Use for loop to iterate from 0 to 100 and print only odd numbers
    for(let i=0;i<101 ; i++){
    i%2==1 ? console.log(i):''
}

// 9- Use for loop to iterate from 0 to 100 and print only prime numbers

for(let i=2; i<101; i++){
    let isPrime=true;
    for(let j=2;j<i; j++){
        if(i%j==0) {
            isPrime=false
            break;
        }
    }
    isPrime ? console.log(i):''
}

// 10- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let total=0
for(let i=0; i<101; i++){
    total+=i
}
console.log(`the sum of all numbers from 0 to 10 is ${total}`)

// 11- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let totalOfEven=0
let totalOfOdd=0
for(let i=0; i<101; i++){
    i%2==0 ? totalOfEven+=i:totalOfOdd+=i
}
console.log(`The sum of all evens from 0 to 100 is ${totalOfEven}. And the sum of all odds from 0 to 100 is ${totalOfOdd}.`)

// 12- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
//Print sum of evens and sum of odds as array

let totalOfEvenNumbers=0
let totalOfOddNumbers=0
for(let i=0; i<101; i++){
    i%2==0 ? totalOfEvenNumbers+=i:totalOfOddNumbers+=i
}

let totalOfEvenAndOddNumbers=[totalOfEvenNumbers,totalOfOddNumbers]
console.log(totalOfEvenAndOddNumbers)

// 13-Develop a small script which generate array of 5 random numbers
let randomNumbers=[]
for(let i=0; i<5; i++){
    randomNumbers.push(Math.floor(Math.random()*110))
}
console.log(randomNumbers)

// 14-Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomUniqueNumbers=[]
for(let i=0; i<5; i++){
    let uniqueRandomNumber=Math.floor(Math.random()*3)
    randomUniqueNumbers.includes(uniqueRandomNumber) ? '' : 
    randomUniqueNumbers.push(uniqueRandomNumber)
}
console.log(randomUniqueNumbers)


// 15-Develop a small script which generate a six characters random id:
const result = Math.random().toString(36).substring(2,8);
console.log(result);

// 16-Develop a small script which generate any number of characters random id:
// program to generate random strings
// declare all characters

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}
console.log(generateString(Math.floor(Math.random()*100)));

//17- Write a script which generates a random hexadecimal number.
const hex = '0123456789ABCDEF';
let output = '';
for (let i = 0; i < 6; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
}
console.log(output)

// 18- Write a script which generates a random rgb color number.
let first=Math.floor(Math.random()*256)
let second=Math.floor(Math.random()*256)
let third=Math.floor(Math.random()*256)
console.log(`rgb(${first} ${second} ${third})`)

// 19-Using the above countries array, create the following new array.
let CapitalizedCountryNames=[]
for(let i=0; i<countries.length; i++){
    CapitalizedCountryNames.push(countries[i].toUpperCase())
}
console.log(CapitalizedCountryNames)


let countryNameLengths=[]
for(let i=0; i<countries.length; i++){
    countryNameLengths.push(countries[i].length)
}
console.log(countryNameLengths)


// 20-Use the countries array to create the following array of arrays:
let array=[]
for(let i=0; i<countries.length; i++){
    let innerArray=[]
    innerArray.push(countries[i])
    innerArray.push(countries[i].substring(0,3).toUpperCase())
    innerArray.push(countries[i].length)
    array.push(innerArray)
}
console.log(array)

*/


// 21- In above countries array, check if there is a country or countries containing the word 'land'. 
//If there are countries containing 'land', print it as array. If there is no country containing 
//the word 'land', print 'All these countries are without land'.
/* 
let countriesIncludesLand=[]
for(let i=0; i<countries.length; i++){
    countries[i].includes('land') ? countriesIncludesLand.push(countries[i]):''
}
countriesIncludesLand.length==0 ? console.log('All these countries are without land.') : console.log(countriesIncludesLand)
*/
/* 22- In above countries array, check if there is a country or countries end with a substring 'ia'. 
If there are countries end with, print it as array. If there is no country containing the word 'ai', print
'These are countries ends without ia'. 
let countriesEndsWithIA=[]
for(let i=0; i<countries.length; i++){
    countries[i].endsWith('ia') ? countriesEndsWithIA.push(countries[i]):''
}
countriesEndsWithIA.length==0 ? console.log('These are countries ends without ia.') : console.log(countriesEndsWithIA) */

/* 23- Using the above countries array, find the country containing the biggest number of characters.

let longestCountryName=''
for(let i=0 ;i<countries.length; i++){
    countries[i].length > longestCountryName.length ?
    longestCountryName=countries[i] :''
    
}
console.log(longestCountryName) */
/* 
// 24- Using the above countries array, find the country containing only 5 characters.
let countryNamesWith5Letter=[];
for(let i=0 ;i<countries.length; i++){
    countries[i].length==5 ? countryNamesWith5Letter.push(countries[i]) :
    ''
}
console.log(countryNamesWith5Letter)
*/
/* 
// 25- Find the longest word in the webTechs array
let longestNameinTheArray=''
for(let i=0; i<webTechs.length;i++){
    webTechs[i].length>longestNameinTheArray.length ? longestNameinTheArray=webTechs[i]:''
}
console.log(longestNameinTheArray)
*/
/* 
// 26-Use the webTechs array to create the following array of arrays

let mainArray=[]
for(let i=0;i<webTechs.length;i++){
    let array=[]
    array.push(webTechs[i])
    array.push(webTechs[i].length)
    mainArray.push(array)
}
console.log(mainArray)
*/

/* 
// 27- An application created using MongoDB, Express, React and Node is 
//     called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let mernAcronym=''
for(let i=0; i<mernStack.length;i++){
    mernAcronym+=mernStack[i][0]
}
console.log(mernAcronym)
*/

/* 
// 28-Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
//                                            using a for loop or for of loop and print out the items.

for(let techs of webTechs){

    console.log(techs)
}
*/
/* 
// 29-This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
 let fruits= ['banana', 'orange', 'mango', 'lemon'] 
 let reversedFruits=[]
 for(let i=fruits.length-1; i>=0;i--)
 {
   let poppedElement= fruits.pop()
   reversedFruits.push(poppedElement) 
 }
 console.log(reversedFruits)


// 30- Print all the elements of array as shown below.
 const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(let i=0 ;i<fullStack.length;i++){
    for(let element of fullStack[i]){
        console.log(element)
    }
  }

  //31- Copy countries array(Avoid mutation)
    let copiedCountries=[]
   for(let i =0; i<countries.length; i++){
        copiedCountries[i]=countries[i]
   }
   console.log(copiedCountries)
*/
   //32 -Arrays are mutable. Create a copy of array which does not modify the original.
                                    //Sort the copied array and store in a variable sortedCountries

    // let copiedCountries=[]
    // for(let i =0; i<countries.length; i++)
    // {
    //     copiedCountries[i]=countries[i]
    // }
    // let sortedCountries=copiedCountries.sort()
    // console.log(sortedCountries)

    //33-Sort the webTechs array and mernStack array
    //console.log(mernStack.sort())
    //console.log(webTechs.sort())
    /* 
    //34 -Extract all the countries contain the word 'land' from the countries array and print it as array
    console.log(countries)
    for(let i =0 ; i<countries.length; i++){

        countries[i].includes('land') ? countries.splice(i,1):'' 
    }

    console.log(countries)
                              
    // 35-Find the country containing the hightest number of characters in the countries array

    let longestCountryNames=[]
    let currentLength=0
    for(let country of countries){
        if(country.length>currentLength){
            longestCountryNames=[]
            longestCountryNames.push(country)
            currentLength=country.length
        }
        else if(country.length==currentLength){
            longestCountryNames.push(country)
        }
    }
    console.log(longestCountryNames)
*/
/*
    // 36- Extract all the countries contain the word 'land' from the countries array and print it as array

    let countryNamesIncludeLand=[]
    for(let country of countries){

        if(country.includes('land'))
        {
            countryNamesIncludeLand.push(...countries.splice(countries.indexOf(country),1))
        } 
    }

    console.log(countryNamesIncludeLand)
    console.log(countries)
    */

    // 37- Extract all the countries containing only seven characters from the countries array 
    //and print it as array
    let countryNamesWithFourCharacters=[]
    for(let country of countries){
        if(country.length==7)
            countryNamesWithFourCharacters.push(...countries.splice(countries.indexOf(country),1))

    }
    console.log(countries)
    console.log(countryNamesWithFourCharacters)
    
    //38- Extract all the countries containing two or more words from the countries
                                                     // array and print it as array

                                                         