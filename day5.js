import {countries} from './countries.js'
import {webTechs} from './web_techs.js'
/*
  //Declare an empty array;
  let arr=[]

  //Declare an array with more than 5 number of elements

  let arr2=['a','b','c','d','e','f']

  //Find the length of your array
  console.log(arr2.length)

  //Get the first item, the middle item and the last item of the array
  console.log(arr2[0], arr2[2],arr2[3],arr2[arr2.length-1])

  //Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes=[undefined, 3, 'mucahit', true, ['keriman', 'sukru'], {asli:'munchen', ferit:'sydney'}]
 console.log(mixedDataTypes [mixedDataTypes.length-1])

 //Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

 let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
 
 //Print the array using console.log()
console.log(itCompanies)
console.log(itCompanies.length)

//Print the first company, middle and last company
console.log(itCompanies[0],itCompanies[(itCompanies.length-1)/2],itCompanies[itCompanies.length-1])

//Print out each company
console.log(itCompanies.join(", ").toUpperCase())
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString().toUpperCase())

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let company=prompt('Please enter a company name: ')
if(itCompanies.includes(company))
    alert(company)
else
    alert(`${company} is not found.`)
    

    //Filter out companies which have more than one 'o' without the filter method
    let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
    
    for(let i=0; i<itCompanies.length;i++){
        let counter=0
        for(let j=0; j<itCompanies[i].toString().split('').length;j++){
            if(itCompanies[i].toString().split('')[j]=='o')
                counter++ 
        }
        if(counter<2)
            itCompanies.splice(i,i+1)
    }

    let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        //console.log(itCompanies)

    //Sort the array using sort() method
        //console.log(itCompanies.sort())

    //Reverse the array using reverse() method
        //console.log(itCompanies.reverse())

    //Slice out the first 3 companies from the array
        //console.log(itCompanies.slice(0,3))

    //Slice out the last 3 companies from the array
        //console.log(itCompanies.slice(-3))

    //Slice out the middle IT company or companies from the array
        let arrayEvenOrOdd=itCompanies.length%2==0 ? 'Even' : 'Odd'
        let middleElementIndex= arrayEvenOrOdd=='Even'? parseFloat(itCompanies.length/2).toFixed(0)-1:
                                                parseFloat(itCompanies.length/2 + 0.5).toFixed(0)-1
        
        console.log(itCompanies)
        console.log(itCompanies[middleElementIndex])
        console.log(middleElementIndex)
      

        //Remove the first IT company from the array
        let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        itCompanies.shift()
        console.log(itCompanies)
         
        //Remove the middle IT company or companies from the array
        let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        let arrayEvenOrOdd=itCompanies.length%2==0 ? 'Even' : 'Odd'
        let middleElementIndex= arrayEvenOrOdd=='Even'? parseFloat(itCompanies.length/2).toFixed(0)-1:
                                                parseFloat(itCompanies.length/2 + 0.5).toFixed(0)-1

        itCompanies.splice(middleElementIndex,1)
        console.log(itCompanies)

        //Remove the last IT company from the array
        let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        itCompanies.pop();
        console.log(itCompanies)
       


        //Remove all IT companies
        let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

        itCompanies.splice(0,itCompanies.length)
        console.log(itCompanies)
          */

        //2- First remove all the punctuations and change the string to array and count the number of words in the array
        let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
        
        console.log(text.replaceAll('.','').split(" "))
        console.log(text.replaceAll('.','').split(" ").length)

        // 3- In the following shopping cart add, remove, edit items
        //['Milk', 'Coffee', 'Tea', 'Honey']

        const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

        //add 'Meat' in the beginning of your shopping cart if it has not been already added
                 //shoppingCart.includes('Meat') ? '' :shoppingCart.unshift('Meat')
        
        //add Sugar at the end of you shopping cart if it has not been already added
                //shoppingCart.includes('Meat') ? '' :shoppingCart.push('Meat')
        
        //remove 'Honey' if you are allergic to honey
                //let allergiceToHoney=true
                //allergiceToHoney ? shoppingCart.splice(shoppingCart.indexOf('Honey'),shoppingCart.indexOf('Honey')+1): ''
                //console.log(shoppingCart)

        //modify Tea to 'Green Tea'

                //shoppingCart[shoppingCart.indexOf("Tea")]= 'Green Tea'
                //console.log(shoppingCart)
        
        
        // 4- In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
        console.log(countries)
        countries.includes(/ETHIOPIA/gi) ? '' : countries.push("ETHIOPIA")
        console.log(countries)

        // 5-In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
        //If it does not exist add Sass to the array and print the array.

        webTechs.includes(/Sass/gi) ? console.log('Sass is a CSS preprocess.'): webTechs.push('Sass') 
        console.log(webTechs)

        //6- Concatenate the following two variables and store it in a fullStack variable.
        const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
        const backEnd = ['Node','Express', 'MongoDB']
        let fullStack=frontEnd.concat(backEnd)
        console.log(fullStack)

        //The following is an array of 10 students ages:
        const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

        //Sort the array and find the min and max age
        console.log(ages.sort())
        console.log(`Max. age:${ages[ages.length-1]}` )
        console.log(`Min. age:${ages[0]}` )

        //Find the median age(one middle item or two middle items divided by two)
        console.log((ages[ages.length/2]+ages[ages.length/2+1])/2)

        //Find the average age(all items divided by number of items)
        let total=0
        for(let i=0; i<ages.length;i++){
            total+=ages[i]
        }
        let average=total/ages.length
        console.log(average)

        //Find the range of the ages(max minus min)
        let theRange= ages[ages.length-1]-ages[0]
        console.log(theRange)
        
        // Compare the value of (min - average) and (max - average), use abs() method 

        console.log(Math.abs(ages[0]-average).toFixed(2))
        console.log(Math.abs(ages[ages.length-1]-average).toFixed(2))

        //1.Slice the first ten countries from the countries array
        
        console.log(countries.slice(0,10))

        //Find the middle country(ies) in the countries array
        console.log(countries.sort().length%2 )
        countries.sort().length%2==0 ? 
            console.log(`Middle countries:${countries.sort()[countries.length/2]} and ${countries[countries.length/2 +1]}`):
                console.log(`Middle country: ${countries[countries.length/2+0.5]}`)

        // 3- Divide the countries array into two equal arrays if it is even. 
        //If countries array is not even , one more country for the first half.
        let firstHalf=[]
        let secondHalf=[]
        console.log(countries.length)
        if(countries.length%2==0) { 
            firstHalf=countries.splice(0,countries.length/2)
            secondHalf=countries
        }
        else{
            firstHalf=countries.splice(0,countries.length/2+0.5)
            secondHalf=countries
        }
        console.log(firstHalf)
        console.log(secondHalf)
