/* IMPROVEMENTS CAN BEN DONE:
 1- Re-examine the anyNumberOfMostFrequentWords function in which it should return until the last element of sorted array however, if the value of the last element and the elements' values after it are the same then it should add the other key-value pairs which have the same value as the last one in the array. For instance, the last element of the descending sorted array is teaching=>2 and there are keys like and, must, tower whose values are 2 as well then the function should return not only first for example 10 countries rather it should return 13 countries in the array.   */   
   
   /* Exercises: Level 1*/


    //1- Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

    const text='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

    const calculateAnnualIncome=function(text){

        const regExp=/\d+/g
        const figures=text.match(regExp)
        
        /* the annual calculation is carried out based on the assumption that the first figure in the sentence indicates the monthly salary whereas the second figure which is mentioned states the annual bonus and third one specifies the earning in return of online courses  */
        const annualIncome=parseFloat(figures[0])+parseFloat(figures[2])*12+parseFloat(figures[1])

        return annualIncome
    }

    console.log(calculateAnnualIncome(text));


    //2 -The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles. 

    const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8','15']

    function findTwoFurthestParticles(arr){

        const sortedArr=arr.sort((a,b)=> parseInt(a)-parseInt(b))
        console.log(sortedArr);
        const lastIndex=sortedArr.length-1
        const distance= parseInt(sortedArr[lastIndex])-parseInt(sortedArr[0])

        return distance
    }

    console.log(findTwoFurthestParticles(points));


    // 3- Write a pattern which identify if a string is a valid JavaScript variable
    
    function is_valid_variable(variable){
        /*  First thing we do is gather a list of all the valid characters for the first character
            Then the other characters,
            we want to match the whole string, and we can have 0 or more of the other characters, so the regex becomes /^[a-zA-Z_$][a-zA-Z_$0-9]*$/
            I did not allow capital characters in the first character in the regex (as well as dollar signs), as we know that a proper javascipt variable must be in compliance with camel case notation. 
        */
        const validVariable= /^[a-z][a-zA-Z_$0-9]*$/.test(variable)

        return  validVariable
    }

    console.log(is_valid_variable("muc_ahit"))

    //Exercises: Level 2
    //Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
   
    const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love. love IF `

    function anyNumberOfMostFrequentWords(text, number){
        //this 
        const regEx=/\w+/gi
        
        // the variable arrayOfWords is an array that includes all the words in a given text
        const arrayOfWords=text.toLowerCase().match(regEx)
        console.log(arrayOfWords)
       /*  // we need an algorith which loops through all the array elements and categorize them based on at what frequency they are used. 
       We might use SET data structure to analyse how many different words are used in the given text.
       (I ended up not using it.) 

       Another point is I want to write really efficient algorithm which avoids uncesssary loops. I can use Map for attaining this purpose.
       */
       let frequencyOfWordsInText=new Map()
       for(let i=0;i<arrayOfWords.length;i++){

        //start counter with 1
        let counter=1
        //if the word is already in the map then get current quantity and incerase it by one.
        if(frequencyOfWordsInText.has(arrayOfWords[i])){
            counter = parseInt(frequencyOfWordsInText.get(arrayOfWords[i]))+ parseInt(1)    
        }
        //if not then insert the new word into the map and make the quantity one.
        frequencyOfWordsInText.set(arrayOfWords[i],counter)
    }
    

    const sortedFrequencyOfWordsInText= [...frequencyOfWordsInText].sort((a,b)=>b[1]-a[1]).slice(0,number)

    return sortedFrequencyOfWordsInText
}


console.log(anyNumberOfMostFrequentWords(paragraph,3));

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

/* Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string. */
function cleanText(text){

   const pattern=/([^a-z0-9 ._\-]+)/gi
   const newText=text.replace(pattern,'')
   console.log(newText)
   const mostThreeFrequentWords=anyNumberOfMostFrequentWords(newText,3)

   return mostThreeFrequentWords
}

console.log(cleanText(sentence))