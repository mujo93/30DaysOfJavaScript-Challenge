/* const log=console.log;
let challenge ='30 Days Of JavaScript'
console.log(challenge)
log(challenge.toUpperCase())
log(challenge.toLowerCase())
log("asdadasdas"+challenge.substr(0,2))
log(challenge.substring(0,1))
log(challenge.substring(3))
log(challenge.includes('Script'))
log(challenge.split(" "))
log('Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'.split(","))
log(challenge.replace("JavaScript","Python"))
log(challenge.charAt(11))
log(challenge.charCodeAt(11))
log(challenge.indexOf('a'))
log('You cannot end a sentence with because because because is a conjuction'.lastIndexOf('because'));
log('You cannot end a sentence with because because because is a conjuction'.indexOf('because'));
log('You cannot end a sentence with because because because is a conjuction'.search('because'));
log('  30 Days Of JavaScript   '.trim()) */
/* log(challenge.startsWith(30))
let pattern= /a/gi
log(challenge.match(pattern))
log('30 Days Of'.concat(" JavaScript"))
log("30 Days Of JavaScript".repeat(2))
log("The quote 'There is no \nexercise better for the heart\
    than reaching down and lifting people up.' by John \
    Holmes teaches us to help one another.")

    log("\"Love is not patronizing and charity isn't about pity, it is about love.\
     Charity and love are the same -- with charity you give love, so don\'t just give\
     money but reach out your hand instead.\"")

     log(10==10)

     log(parseFloat(9,8))

     log('i hope this course is not full of jargon'.search('n'))
     log(Math.floor(Math.random()*101))
     log('JavaScript'[Math.floor(Math.random()*9)]) */
/*      let number = prompt('Enter number', 'number goes here')
      console.log(number)
 
      const agree = confirm('Are you sure you like to delete? ')
      console.log(agree) // result will be true or false based on what you click on the dialog box */


      /* 1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use 
      the typeof operator to check different data types.*/
       
      let firstName='Mucahit'; console.log(typeof(firstName))
      let lastName='Bayrak'  ; console.log(typeof(lastName))
      let country='Turkey'   ; console.log(typeof(country))
      let city='Bursa'       ; console.log(typeof(city))
      let age='28'           ; console.log(typeof(age))
      let isMarried='No'     ; console.log(typeof(isMarried))
      let year=2022          ; console.log(typeof(year))

      /* 2- Check if type of '10' is equal to 10 */

      console.log('type of \'10\' is equal to 10', '10'===10 )

      /* 3- Check if parseInt('9.8') is equal to 10 */

      console.log("if parseInt('9.8') is equal to 10",parseInt('9.8')===10)

      /* 4- Boolean value is either true or false.

        Write three JavaScript statement which provide truthy value.*/

        if (true)
            console.log('Mucahit') 
            
        if ([])
            console.log('Mucahit') 
            
        if (3)
            console.log('Mucahit') 
            
        /*Write three JavaScript statement which provide falsy value.*/

        if(NaN)
            console.log('Mucahit')
        if(undefined)
            console.log('Mucahit')

        /* 5-Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() */

        console.log("4 < 3",4 < 3)
        console.log("4 > 3", 4 > 3)
        console.log("4 >= 3",4 >= 3)
        console.log("4 <= 3",4 <= 3)
        console.log("4 == 4",4 == 4)
        console.log("4 === 4",4 === 4)
        console.log("4 != 4",4 != 4)
        console.log("4 !== 4",4 !== 4)
        console.log("4 != '4'",4 != '4')
        console.log("4 == '4'",4 == '4')
        console.log("4 === '4'",4 === '4')

        /* 6- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() */
   
        console.log('4 > 3 && 10 < 12',4 > 3 && 10 < 12)
        console.log('4 > 3 && 10 > 12',4 > 3 && 10 > 12)
        console.log('4 > 3 || 10 < 12',4 > 3 || 10 < 12)
        console.log('4 > 3 || 10 > 12',4 > 3 || 10 > 12)
        console.log('!(4 > 3)',!(4 > 3))
        console.log('!(4 < 3)',!(4 < 3))
        console.log('!(false)',!(false))
        console.log('!(4 > 3 && 10 < 12)',!(4 > 3 && 10 < 12))
        console.log('!(4 > 3 && 10 > 12)',!(4 > 3 && 10 > 12))
        console.log('!(4 === \'4\')',!(4 === '4'))
            
        /* 7- Use the Date object to do the following activities */

        // What is the year today?
            const now = new Date();
            console.log(now.getFullYear())
        // What is the month today as a number?
            console.log(now.getMonth()-1)
        // What is the date today?
            console.log(now.getDate())
        // What is the day today as a number?
            console.log(now.getDay())
        // What is the hours now?
            console.log(now.getHours())
        // What is the minutes now?
            console.log(now.getMinutes())
        // Find out the numbers of seconds elapsed from January 1, 1970 to now.
          
        //Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
        if(undefined){
                let base = window.prompt("Enter base: ")
                let height = window.prompt("Enter height: ")
                let area= 0.5*parseInt(base)*parseInt(height) 
                window.alert(`the area of the triangle is ${area} `)
    }

        //Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
        if(undefined){
                let a = window.prompt("Enter side a: ")
                let b = window.prompt("Enter side b: ")
                let c = window.prompt("Enter side c: ")
                let perimeter=parseInt(a)+parseInt(b)+parseInt(c)
                alert(`the perimeter of the triangle is ${perimeter}`)
        }
        //Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
        if(undefined){
                let length  =  window.prompt("Enter length:")
                let width   =  window.prompt("Enter width: ")
                let recPeri =  2 * (parseInt(length)+parseInt(width))
                alert(`the perimeter of the rectangle is ${recPeri}`)
        }

       // Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
        if(undefined){
                let radius= prompt("Enter radius")
                radius=parseInt(radius)
                const PI=3.14
                let areaCircle=  PI*radius*radius
                let circumference = 2*PI*radius
                alert(`the area of the circle is ${areaCircle} and circumference is ${circumference.toFixed(3)}`)

        }

        //Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

        if(undefined){
                let hours=prompt("Enter hours")
                let rate=prompt("Enter rate")
                let pay=parseInt(hours)*parseInt(rate)
                alert(`Your weekly earning is $${pay.toFixed(2)}`)
        }

        //If the length of your name is greater than 7 say, your name is long else say your name is short.
        if(undefined){
                let name=window.prompt("Enter your name:")
                nameArray=name.split('');
                (nameArray.length>7) ? alert('Your name is long.'):
                alert('Your name is short')
        }
        
        //Compare your first name length and your family name length and you should get this output.
        if(undefined){
                let firstname=window.prompt("Enter your firstname: ").trim().split("").length
                let surname= window.prompt("Enter your surname: ").trim().split("").length
                 console.log(firstname, surname)
                 firstname> surname ? alert('Your firstname is longer than your surname.'):
                 (firstname<surname ? alert('your surname is longer than your firstname'):
                 alert("your firstname and surname are same length."))
        }

        //Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
        if(undefined){
                let myAge= prompt("Enter my Age")
                let yourAge= prompt("Enter your Age")
                let ageDifference= myAge-yourAge
                ageDifference>0 ? alert(`I am ${ageDifference} years older than you.`):
                (ageDifference < 0 ? alert(`I am ${-1*ageDifference} years younger than you.`):
                alert("we are same age."))
        }

        if(undefined){

            let birthYear=parseInt(prompt("Enter birth year: "))
            let date=new Date();
            currentYear=parseInt(date.getFullYear())
            myAge=currentYear-birthYear

            myAge>=18 ? alert(`You are ${myAge}.You are old enough to drive.`) :
            alert(`You are ${myAge}. You will be allowed to drive in ${18-myAge} years.`)
        }

        // /Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
        if(undefined){

            let numberOfYears= prompt("Enter number of years you live: ")
            let numberOfSeconds= numberOfYears*365*24*60*60
            alert(`You lived ${numberOfSeconds} seconds.`)
        }

        //Create a human readable time format using the Date time object
            //YYYY-MM-DD HH:mm
            //DD-MM-YYYY HH:mm
            //DD/MM/YYYY HH:mm

        if(NaN){

            let date=new Date();
            alert(` ${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}: ${date.getMinutes()}
                    ${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}: ${date.getMinutes()}
                    ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}: ${date.getMinutes()}`)

        }

        //Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
       // YYYY-MM-DD HH:mm eg. 2010-01-02 07:05

       if(undefined){

        let date= new Date()
        let options = { weekday: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' };
        alert(`${date.toLocaleDateString().split('/').join('-')} ${date.toLocaleTimeString().substring(0,5)}`)
       }