import {countries} from './countries.js'
import {webTechs} from './web_techs.js'
/*
//Exercises: Level 1
// 1-Declare a function fullName and it print out your full name.
function fullName(){
    return 'Mucahit ' +'Bayrak'
}

console.log(fullName())

// 2- Declare a function fullName and now it takes firstName, 
//lastName as a parameter and it returns your full - name.

function returnFullName(firstName,lastName){
    return firstName+' '+lastName
}


console.log(returnFullName ('Mucahit','Bayrak'))

// 3- Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a,b){
    return a+b  
}

console.log(addNumbers(56,5))

// 4- An area of a rectangle is calculated as follows: area = length x width.
 //Write a function which calculates areaOfRectangle.

 function calculateAreaOfRectangle(length, width){
    return length * width
 }

 console.log(calculateAreaOfRectangle(9,10))

 // 5- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
        //Write a function which calculates perimeterOfRectangle.

    function calculatePerimeterOfRectangle(){
        return 2*(length+width)
    }

    console.log(calculateAreaOfRectangle(5,9))

// 6- A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
//Write a function which calculates volumeOfRectPrism.
function calculateVolumeOfRectPrism(length, width, height){
    return length*width*height
}

console.log(calculateAreaOfRectangle(3,5,6))

// 7- Area of a circle is calculated as follows: area = π x r x r.
// Write a function which calculates areaOfCircle

function calculateAreaOfCircle(r, pi=3.14){

    return pi * Math.pow(r,r)
}

console.log(calculateAreaOfCircle(2))

// 8-Circumference of a circle is calculated as follows: circumference = 2πr. 
//                          Write a function which calculates circumOfCircle 

function calculateCircumOfCircle(r){
    
    return Math.ceil(2*Math.PI*r) 
}
console.log(calculateCircumOfCircle(5))

// 9- Density of a substance is calculated as follows:density= mass/volume. 
//                              Write a function which calculates density.

function calculateDensity(mass,volume){
    return mass/volume
}
console.log(calculateDensity(96,1760).toFixed(3))

// 10- Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
//Write a function which calculates a speed of a moving object, speed.

function calculateSpeedOfMovingObject(totalDistanceTakenByMovingObject, timeTakenByMovingObject){
    
    return totalDistanceTakenByMovingObject/timeTakenByMovingObject
    
}
console.log(calculateSpeedOfMovingObject(300, 2))

//11 -Weight of a substance is calculated as follows: weight = mass x gravity. 
// Write a function which calculates weight.

function calculateWeight(mass, gravity=9.8){
    return mass * gravity
}

console.log(calculateWeight(30))

function convertCelsiusToFahrenheit(celcius){
    return  (celcius * 9/5) + 32
}
console.log(convertCelsiusToFahrenheit(55))


/*Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight groups 
in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese 
based the information given below.*/

/* 
function calculateBMI(weight, height){
    
    let bmi = weight / (height*height)
    
    if(bmi<18.5){
        return 'Underweight'
    }
    else if(bmi>=18.5 && bmi<25){
        return 'Normal Weight'
    }
    else if(bmi>=25&& bmi<29){
        return 'Overweight'
    }
    
    else if (bmi>=30){
        return 'Obese'
    }
    
    else{
        return 'Something went wrong. BMi calculation is incorrect.'
    }
}
console.log(calculateBMI(83,1.83))

// 14- Write a function called checkSeason, 
//it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month){

    switch(month){
        case 'December' :
        case 'January'  :
        case 'February' :
            return 'Winter'
            
        case 'March':
        case 'April':
        case 'May'  :
            return 'Spring'
        
        case 'June'  :
        case 'July'  :
        case 'August':
           return 'Summer'
        
        case 'September':
        case 'October'  :
        case 'November' :    
            return 'Autumn'

        default:
            return 'Please check the spelling of the month name.'
    }   
}

console.log(checkSeason('January'))
 */
/* 
// 15- Math.max returns its largest argument. 
        //Write a function findMax that takes three arguments and returns 
                //  their maximum with out using Math.max method.

function findMax(a,b,c){
    let maxNumber=arguments[0]
    for(let i=0; i<arguments.length;i++)
    {
        arguments[i] > maxNumber ? maxNumber=arguments[i] : ''
    }
    return maxNumber
}
console.log(findMax(-12,-5,-3))



// EXERCISE 2
// 1- Linear equation is calculated as follows: ax + by + c = 0. 
//Write a function which calculates value of a linear equation, solveLinEquation.
	function solveInEquation(a, b, n)
	{
		// traverse for all possible values
		for (let i = 0; i * a <= n; i++)
		{
			// check if it is satisfying the equation
			if ((n - (i * a)) % b == 0)
			{
				console.log("x = " + i +
								", y = " +
								(n - (i * a)) / b);
				return ;
			}
		}
		console.log("No solution");
	}
		let a = 2, b = 3, n = 7;
		solveInEquation(a, b, n);
		

// 2- Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
//Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a,b,c){
    let root1, root2;
    // calculate discriminant
    let discriminant = b * b - 4 * a * c;
    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        // result
        return `{${root1},${root2}}`;
    }
    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        // result
     return `{${root1}}`;
    }
    // if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        // result
       return `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    }
}

console.log(solveQuadratic(1, -1, -2))


// 3- Declare a function name printArray. 
//  It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    for(let element of arr){
        console.log(element)}
}
printArray(countries)

// 4- Write a function name showDateTime which 
//shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
    let now=new Date()
    return now.toLocaleDateString()+" " + now.toLocaleTimeString().substring(0,5)
    // return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
}

console.log(showDateTime())

// 5- Declare a function name swapValues. This function swaps value of x to y.


function swapValues(x,y){

    let temp = x
    x=y
    y=temp

    return `{x: ${x} y: ${y}}`
}

console.log(swapValues(4,5))

// 6-Declare a function name reverseArray. 
//It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr){
    let reversed_array=[]
	for (let i =arr.length - 1; i >= 0; i--) {
		reversed_array.push(arr[i]);
	}
	return reversed_array
}

console.log(reverseArray([1,2,3,4,5]))

*/
// 7- Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizedArray(arr){
let capitalizedArray=[]
    for(let element of arr){
        capitalizedArray.push(element.toUpperCase())
    }

    return capitalizedArray
}

console.log(capitalizedArray(['Selami, Kemal', 'Cuneyd', 'Haktan']))

// 8- Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item, arr){

    arr.push(item)

    return arr
}

console.log(addItem('Cemal', ['Curcan', 'Kerem', 'Turcan', 'Merih']))

// 9-Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(index, arr){
    arr.splice(index, 1)
    return arr
}

console.log(removeItem(2, ['Talat' ,'Kamuran', 'Cemil', 'Cevher','Tolga']))

// 10- Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number){
    let total=0
    for(let i=number; i>=0; i--){
        total+=i
    }
    return total
}
console.log(sumOfNumbers(11))

// 11- Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOddNumbers(number){
    let total=0
    for(let i=number; i>=0; i--){
        i%2==1 ? total+=i:''}
   
    return total
}
console.log(sumOfOddNumbers(2))

// 12- Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range

function sumOfEvenNumbers(number){
    let total=0
    for(let i=number; i>=0; i--){
        i%2==0 ? total+=i:''}
   
    return total
}
console.log(sumOfEvenNumbers(10))

// 13- Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(number){
    
    let totalOfEvenNumbers=0
    let totalOfOddNumbers=0

    if(number>0){
        for(let i=number; i>=0; i--){
            i%2==0 ? totalOfEvenNumbers+=i:
                            totalOfOddNumbers+=i }
    return `The number of odds are ${totalOfOddNumbers}\nThe number of evens are ${totalOfEvenNumbers}.`
    }
    else{
        return 'Please enter a positive number!'
    }
}
console.log(evensAndOdds(45))

// 14- Write a function which takes any number of arguments and return the sum of the arguments

function sum(){
    let total=0
    for(let i of arguments){
        total+=i
    }

    return total
}

console.log(sum(10,20,30))

// 15- Write a function which generates a randomUserIp.
// 169.12.163.241

function generateRandomUserIp(){

    let randomUserIp= `${Math.floor(Math.random()*(999 - 100) + 100)}.${Math.floor(Math.random()*(99-10 )+10)}.${Math.floor(Math.random()*(999 - 100) + 100)}.${Math.floor(Math.random()*(999 - 100) + 100)}`

    return randomUserIp
}

console.log(generateRandomUserIp())

// 16- Write a function which generates a randomMacAddress
// 36-1F-05-08-C2-D7
function generateRandomMACAddress(){
    let MACStringCharacters='0123456789ABCDEF'
    let generatedRandomMACAdress=''
    for(let i=0; i<3; i++){
        for(let j=0; j<2 ;j++){
            generatedRandomMACAdress+=`${MACStringCharacters[Math.floor(Math.random() * 16)]}${MACStringCharacters[Math.floor(Math.random() * 16)]}:`
        }
    }
    return generatedRandomMACAdress.substring(0,generatedRandomMACAdress.length-1)
}
console.log(generateRandomMACAddress())

// 17- Declare a function name randomHexaNumberGenerator. 
//When this function is called it generates a random hexadecimal number. 
//The function return the hexadecimal number.

function randomHexaNumberGenerator(){
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
      
      return random_hex_color_code()
      
}

console.log(randomHexaNumberGenerator())

//18-Declare a function name userIdGenerator. 
//When this function is called it generates seven character id. The function return the id.

function userIdGenerator(IDSize){
    let characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomUserID=''
    for(let i=0 ; i<IDSize; i++){
        randomUserID+=characters[Math.floor(Math.random()*61)]
    }
    return randomUserID
}
console.log(userIdGenerator(7))