const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

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
         */


        //Remove all IT companies
        let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

        itCompanies.splice(0,itCompanies.length)
        console.log(itCompanies)