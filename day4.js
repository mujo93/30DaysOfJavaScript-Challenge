/* 1- Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait 
for the number of years he needs to turn 18. */
if(undefined){
        let drivingAge=parseInt(prompt("Enter your age: "))
        drivingAge>=18 ? alert('You are old enough to drive'):
        alert(`You are left with ${18-drivingAge} years to drive.`)
}
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to 
//console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

if(undefined){
    let myAge= prompt("Enter my Age")
    let yourAge= prompt("Enter your Age")
    let ageDifference= myAge-yourAge
    ageDifference>0 ? alert(`I am ${ageDifference} years older than you.`):
    (ageDifference < 0 ? alert(`I am ${-1*ageDifference} years younger than you.`):
    alert("we are same age."))
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
if(undefined){
let a=parseInt(prompt("Enter a: "))
let b=parseInt(prompt("Enter b: "))
/*
if(a>b)
    alert("a is greater than b.")
else if(b>a)
    alert("b is greater than a.")
else
    alert("They are equal.")*/

//Ternary way
a>b ? alert("a is greater than b."):(b>a ? alert("b is greater than a."): alert("they are equal."))
}

//Write a code which can give grades to students according to theirs scores:

/*
  80-100, A
  70-89, B
  60-69, C
  50-59, D
  0-49, F
*/

if(NaN){

    let grade=parseFloat(prompt("Enter the grade: "))
    
        if(grade>=80 && grade<=100)
            alert(`The grade for entered score is A`)
        else if(grade>=70 && grade<=89)
            alert(`The grade for entered score is B`)
        else if(grade>=60 && grade<=69)
            alert(`The grade for entered score is C`)
        else if(grade>=50 && grade<=59)
            alert(`The grade for entered score is D`)
        else if(grade>=0 && grade<=49)
            alert(`The grade for entered score is F`)
        else 
            alert(`Enter an accurate score please.`)
    }

    /*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
        September, October or November, the season is Autumn.
            December, January or February, the season is Winter.
                March, April or May, the season is Spring
                    June, July or August, the season is Summer*/

    if(undefined){
        let month= prompt("Enter month: ").toLowerCase()
        switch(month){
            case 'september':
            case 'october'  :
            case 'november' :
                alert("It is Autumn.")
                break;
            case 'december':
            case 'january' : 
            case 'february':
                alert("It is Winter.")
                break;
            case 'march':
            case 'april':
            case 'may'  :
                alert("It is Spring.")
                break;
            case 'june':
            case 'july':
            case 'august':
                alert("It is Summer.")
                break;
            default:
                alert("Please enter a correct month!")
        }
    }

    //Check if a day is weekend day or a working day. Your script will take day as an input.
    if(undefined){
        let theDay=prompt("What is today?").toLowerCase();
        switch(theDay){
            case 'monday'   :
            case 'tuesday'  :
            case 'wednesday':
            case 'thursday' :
            case 'friday'   :
                alert(`${theDay} is a working day.`)
                break;
            case 'saturday' :
            case 'sunday'   :
                alert(`${theDay} is weekend.`)
                break;
        }
    }

    //Write a program which tells the number of days in a month.

    if(undefined){
        let theMonth=prompt("Please enter a month:").toLowerCase()

        switch(theMonth){
            case 'january':
            case 'march':
            case 'may':
            case 'july':
            case 'september':
            case 'november':
                alert(`${theMonth} has 31 days.`)
                break;
            case 'april':
            case 'june':
            case 'august':
            case 'october':
            case 'december':
                alert(`${theMonth} has 30 days.`)
                break;
            case 'february':
                alert(`${theMonth} has 28 days.`)
                break;

            default:
                alert("Please enter name of a  month!")
                break;
        }
    }
        