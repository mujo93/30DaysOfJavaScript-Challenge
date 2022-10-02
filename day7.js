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