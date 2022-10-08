// Exercises: Level 1

import {countries} from './data/countries.js'
import {countriesData} from './data/countries_data.js'

    // 1-
    //ForEach: for iterating an array elements we use forEach loop. it calls a function for each element 
    //the array. The forEach() method is not executed for empty elements.

    //Map: map() creates a new array from calling a function for every array element.
    //map() calls a function once for each element in an array.
    //map() does not execute the function for empty elements.
    //map() does not change the original array.

    //The filter() method creates a new array filled with elements that pass a test provided by a function.
    //The filter() method does not execute the function for empty elements.
    //The filter() method does not change the original array.

    //The reduce() method executes a reducer function for array element.
    //The reduce() method returns a single value: the function's accumulated result.
    //The reduce() method does not execute the function for empty array elements.
    //The reduce() method does not change the original array.
    //callback function: A callback is a function which can be passed as parameter to other function.
        
    const products = [
        {
          _id: 'eedfcf',
          name: 'mobile phone',
          description: 'Huawei Honor',
          price: 200,
          ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
          ],
          likes: []
        },
        {
          _id: 'aegfal',
          name: 'Laptop',
          description: 'MacPro: System Darwin',
          price: 2500,
          ratings: [],
          likes: ['fg12cy']
        },
        {
          _id: 'hedfcg',
          name: 'TV',
          description: 'Smart TV:Procaster',
          price: 400,
          ratings: [{ userId: 'fg12cy', rate: 5 }],
          likes: ['fg12cy']
        }
      ]
  

   
    const numbers= [1,3,4,54,6,776,58,76,69,8,45,646,7,678,769,7,80,89,543,67,8,90,5,34,23,6,5,859,870,9
        ,456,5,765,8,689,54,53,56,54,2342,4,5,46,76,9,87,7,68,765,453,2,32,454,6,78,897]
    const names=['Hasan','Cemal','Guzin','Hazel','Pinar','Masal','Hayal','Ruya','Betul','Ayse','Muslihanur','Abdulkerim']

//Exercises: Level 1

// 1- Use forEach to console.log each country in the countries array.

      //countries.forEach((country) => console.log(country))

// 2- Use forEach to console.log each name in the names array.
// 3- Use forEach to console.log each number in the numbers array.
// 4- Use map to create a new array by changing each country to uppercase in the countries array.
      const UppercasedCountries= countries.map((country)=> country.toUpperCase())
      //console.log(UppercasedCountries)
// 5- Use map to create an array of countries length from countries array.
      const theLengthOfCountryNames= countries.map((country)=> country.length)
      //console.log(theLengthOfCountryNames)
// 6- Use map to create a new array by changing each number to square in the numbers array
        const squareOfEachNumber=numbers.map((number)=>number*number)
        //console.log(squareOfEachNumber)
// 7- Use map to change to each name to uppercase in the names array
        //console.log(names.map((name)=>name.toUpperCase()))
// 8- Use map to map the products array to its corresponding prices.
        const prices= products.map((product)=>product.price)
        //console.log(prices)
// 9- Use filter to filter out countries containing land.
        const countryNamesIncludingLand=countries.filter((country)=> country.includes('land'))
        //console.log(countryNamesIncludingLand)
// 10- Use filter to filter out countries having six character.
        const countryNamesWithSixCharacter= countries.filter((country)=> country.length==6)
        //console.log(countryNamesWithSixCharacter)
// 11- Use filter to filter out countries containing six letters and more in the country array.
        const countryNamesWithSixCharacterOrMore= countries.filter((country)=> country.length>=6)
        //console.log(countryNamesWithSixCharacterOrMore)
// 12- Use filter to filter out country start with 'E';
        const countryNamesStartsWithE=countries.filter((country)=>country.startsWith('E'))
        //console.log(countryNamesStartsWithE)
// 13- Use filter to filter out only prices with values.
        const onlyPrices=products.filter((product)=>{})
        //console.log(onlyPrices)
// 14- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
        function getStringList(arr){
            const stringItems=arr.filter(item => typeof item==='string' )
            return stringItems
        }
        //console.log(getStringList([1,2,'Ayse','Zehra','Fatma','Gokce','Betul','Esma',true,false, 'Muslihanur']))
// 15- Use reduce to sum all the numbers in the numbers array.
        const sumOfNumbers=numbers.reduce((previousValue,currentValue)=>previousValue+=currentValue)
        //console.log(sumOfNumbers)
// 16- Use reduce to concatenate all the countries and to 
//produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
        const theSentence=countries.reduce((restOfTheSentence, currentCountry,currentIndex)=>{
                
            if(currentIndex!==countries.length-1){
                restOfTheSentence+=', '+currentCountry
            }
            else{
                restOfTheSentence+=', and '+currentCountry +' are north European countries.'
            }
                
                return restOfTheSentence
        })

        //console.log(theSentence)
// 17- Explain the difference between some and every?
            //The only difference is that the some() method will 
                        //return true if any predicate is true while every() 
                                //method will return true if all predicates are true. 

// 18- Use some to check if some names' length greater than seven in names array
        const isSomeNamesLengthAreGreaterThanSeven= names.some((name)=>name.length>7)
        //console.log(isSomeNamesLengthAreGreaterThanSeven)
// 19- Use every to check if all the countries contain the word land
        const doesAllCountriesContainLand=countries.every((country)=> country.includes('land'))
        //console.log(doesAllCountriesContainLand)
// 20- Explain the difference between find and findIndex.
        //The find method returns element value whereas the findIndex method returns element Index
// 21- Use find to find the first country containing only six letters in the countries array
        const theFirstCountryContainingSixLetters=countries.find((country)=>country.length==6)
        //console.log(theFirstCountryContainingSixLetters)
// 22- Use findIndex to find the position of the first country containing only six letters in the countries array
        const theFirstCountryContainingSixLettersIndex=countries.findIndex((country)=> country.length==6)
        //console.log(theFirstCountryContainingSixLettersIndex)
// 23- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
        const IndexOfNorway=countries.findIndex((country)=> country==='Norway')
        //console.log(IndexOfNorway)
// 24- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
        const IndexOfRussia=countries.findIndex((country)=> country==='Russia')
        //console.log(IndexOfRussia)


//Exercises: Level 2

// 1- Find the total price of products 
    //by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

    function findTotalPriceOfProducts(products){

        return products.map((product)=>product.price).reduce((pre,cur)=>pre+=cur)
    }

    //console.log(findTotalPriceOfProducts(products))

// 2- Find the sum of price of products using only reduce reduce(callback))

    const totalPriceOfProfindTotalPriceOfProductsUsingOnlyReduceducts=products.reduce((total,product)=>{
        //console.log(`Total:${total}`)
        //console.log(`Item:${product.price}`)
        return total+product.price},0)

    //console.log(totalPriceOfProfindTotalPriceOfProductsUsingOnlyReduceducts)

// 3- Declare a function called categorizeCountries which returns an array of 
        //countries which have some common pattern(you find the countries array in this 
            //repository as countries.js(eg 'land', 'ia', 'island','stan')).

    function categorizeCountries(pattern,countries){

        return countries.filter(country=>country.name.includes(pattern))

    }

    //console.log(categorizeCountries('Tur',countriesData))

// 4- Create a function which return an array of objects, which is the letter and the number of times the letter 
//    use to start with a name of a country.

function findNumberOfCountriesStartSameInitial(initial,arr){

    return arr.filter((country)=>country.name.startsWith(initial))

}

//console.log(findNumberOfCountriesStartSameInitial('T',countriesData))

// 5- Declare a getFirstTenCountries function and return an array of ten countries. 
//              Use different functional programming to work on the countries.js array

function getFirstTenCountries(arr){
   return arr.filter((country,index)=> index<16) 
}

///console.log(getFirstTenCountries(countriesData))

// 6- Declare a getLastTenCountries function which returns the last ten countries in the countries array.

function getLastTenCountries(arr){
    return arr.filter((country,index,array)=> index>array.length-11) 
}

//console.log(getLastTenCountries(countriesData))

// 7- Find out which letter is used many times as initial for a country name from the 
//    countries array (eg. Finland, Fiji, France etc)

function NumberOfTimesTheInitialUsed(arr){

    return arr.reduce((groupedCountries,country)=>{
        const inital=country.name[0]
        if(groupedCountries[inital]==null) groupedCountries[inital]=[]

        groupedCountries[inital].push(country)
        return groupedCountries
    },{})
}

//console.log(Object.entries((NumberOfTimesTheInitialUsed)(countriesData)).map(array => {

 //   return {initial:array[0][0],numberOfTimesCountriesStartWith:array[1].length}

 //   }))


// Exercises: Level 3

// 1- Use the countries information, in the data folder. Sort countries by name, by capital, by population

//By name
//console.log(countriesData.sort((a,b)=>{return a.name>b.name ? 1: -1}))

//By capital
//console.log(countriesData.sort((a,b)=> { return a.capital > b.capital ? -1 : 1}))

//By population
//console.log(countriesData.sort((a,b)=>{return a.population-b.population}))

// 2- *** Find the 10 most spoken languages:

function mostSpokenLanguages(countries,numberOfCountries){

       let mostSpokenLanguages= countries.reduce((groupedCountries,country)=>{
        const languages=country.languages
        for(const language of languages){
        if(groupedCountries[language]==null) groupedCountries[language]=[]
        groupedCountries[language].push(country)
        console.log(groupedCountries)
        }},{})

        return mostSpokenLanguages
}

//console.log(mostSpokenLanguages(countriesData,10))

let array=[]

// 3- *** Use countries_data.js file create a function which create the ten most populated countries

function mostPopulatedCountries(countries,numberOfCountry){

    //1- sort countries by desc order
    const sortedCountriesByPopulationDesc=countriesData.sort((a,b)=>{return b.population-a.population})

    //2- compose a new array based on the form given in the example array of objects {country, population}
    const mostPopulatedCountries= sortedCountriesByPopulationDesc.map((country)=>{
        
        return {country:country.name,population:country.population}})

    // I did not use filter method to pick 10 most populated country since the filter method goes through all items in the array
    // instead I defined a new array and pushed data into the array using for loop.Thus it will be only looped through first 10 element/
    const mostPopulatedNumberOfCountries=[]
    
    for(let i=0 ;i<numberOfCountry;i++){
        mostPopulatedNumberOfCountries.push(mostPopulatedCountries[i])
    }

    return mostPopulatedNumberOfCountries
}

//console.log(mostPopulatedCountries(countriesData,3))

/*
*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
and measure of variability(range, variance, standard deviation). In addition to those measures 
find the min, max, count, percentile, and frequency distribution of the sample. You can create an 
object called statistics and create all the functions which do statistical calculations as method 
for the statistics object. Check the output below.
*/

const statistics={
    ages:[31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
    count:function(){return this.ages.length},
    sum:function(){return this.ages.reduce((total,curNum)=>{return total+=curNum},0)},
    min:function(){return this.ages.reduce((a, b) => Math.min(a, b))},
    max:function(){return this.ages.reduce((a, b) => Math.max(a, b))},
    range:function(){return this.max()-this.min()} ,
    mean:function(){return this.sum()/this.count()},
    median:function(){ 
        let median=0
         const sortedArr=[...this.ages].sort((a,b)=>a-b)
        if(this.count()%2==0){
            console.log('median: '+sortedArr[this.count()/2])
            median=(sortedArr[this.count()/2 - 1]+ sortedArr[this.count()/2])/2
        }
        else{
            console.log('median: '+sortedArr[this.count()/2])
            median=sortedArr[Math.floor(this.count()/2)]
        }
        return median
    },

    mode:function () {
            const sortedArr=[...this.ages].sort((a,b)=>a-b)
            let max_count = 1, res = sortedArr[0];
            let curr_count = 1;
           
        for (let i = 1; i < this.ages.length; i++)
        {
            if (sortedArr[i] == sortedArr[i - 1])
                curr_count++;
            else
                curr_count = 1;
            
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = sortedArr[i - 1];
            }
 
        }
        return res;
    },

             

    var:function(){

        //1 -mutate the array of ages by the formula (value – mean) ^ 2
        const meanVal=this.mean()
        const mutatedArray=this.ages.map(age => (age-meanVal)*(age-meanVal) )
        //2 -then calculate the sum of the mutated array
        const sumOfMutatedArray= mutatedArray.reduce((total,curVal)=>total+curVal,0)
        //3 -then divide the sum with the length of the array and return it

        return sumOfMutatedArray/mutatedArray.length
        
    },

    std:function(){
        return Math.sqrt(this.variance())
    },

    freqDist:function(){ 
      return this.ages.reduce((groupedAges,age)=>{
            const personAge=age
            if(groupedAges[personAge]==null) groupedAges[personAge]=[]
            groupedAges[personAge].push(age)
        
           return groupedAges


        },[]).map((element) => {return {age:element[0],repetition:element.length }})
    }

}

//console.log(statistics.count())
//console.log(statistics.sum())
//console.log(statistics.min())
//console.log(statistics.max())
//console.log(statistics.range())
//console.log(statistics.mean())
//console.log(statistics.median())
//console.log(statistics.mode())
//console.log(statistics.var())
//console.log((statistics.std()))
console.log(statistics.freqDist())
