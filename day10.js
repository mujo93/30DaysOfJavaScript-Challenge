import {countries} from './data/countries.js'
import {countriesData} from './data/countries_data.js'
// Exercises:Level 1
/* 
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c=[...a,...b]
const countriess = ['Finland', 'Sweden', 'Norway']

// 1- create an empty set
const mySet=new Set()
// 2- Create a set containing 0 to 10 using loop
for(let i=0;i<=10;i++){
    mySet.add(i)
}
// 3- Remove an element from a set
mySet.delete(10)
console.log(mySet);
// 4- Clear a set
mySet.clear()
console.log(mySet);
// 5- Create a set of 5 string elements from array
const myArr=['Hasan','Cansu','Keriman','Adalet','Tuncay']
const names=new Set(myArr)
names.add('Hasan')
console.log(names)
// 6- Create a map of countries and number of characters of a country
const mapOfCountries=new Map()

for(const country of countriess){
    mapOfCountries.set(country,country.length)
}

console.log(mapOfCountries);

//Exercises:Level 2

// 1-   Find a union b
let setA=new Set(a)
let setB=new Set(b)
let setC=new Set(c)
console.log(setC)

// 2-   Find a intersection b
let setC2=new Set()
c=a.filter((number)=> setB.has(number))
console.log(c);

// 3-   Find a with b
c=a.filter((number)=> !setB.has(number))
console.log(c);

// Exercises:Level 3

// 1-How many languages are there in the countries object file.
*/
function numberOfSpokenLanguages(){

    let countryArr=[]
    for(let country of countriesData){
        countryArr.push(...country.languages)
    }
    const countriesSet=new Set(countryArr)
    return countriesSet.size //number of languages
}

// 2-*** Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(data,number){
    let languagesAndSpokenFrequency=new Map()
    for(let i=0;i<data.length;i++){

        for(let j=0;j<data[i].languages.length;j++){
            if(!languagesAndSpokenFrequency.has(data[i].languages[j])){
                languagesAndSpokenFrequency.set(data[i].languages[j],1)
            }
            else{
                let increasedNumberByOne=languagesAndSpokenFrequency.get(data[i].languages[j])+1
                languagesAndSpokenFrequency.set(data[i].languages[j],increasedNumberByOne)
            }
        }
    }

    const sortedLanguagesAndSpokenFrequency= [...languagesAndSpokenFrequency].sort((a,b)=>b[1]-a[1])
    const countryObj=sortedLanguagesAndSpokenFrequency.slice(0,number).map((obj) => { 
            const [a,b] =obj
            const newObject={[a]:b}

            return newObject
        })
        
   return countryObj
}

console.log(mostSpokenLanguages(countriesData,3));



