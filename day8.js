import {countries} from './countries_data.js'
/*
//Exercises: Level 1
// 1-Create an empty object called dog
const dog={}
// 2-Print the the dog object on the console
console.log(dog)
// 3-Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name='Puppy'
dog.legs=''
dog.age=3
dog.bark= function(){
    return 'woof woof'
}
// 4-Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.age)
console.log(dog.bark())
// 5-Set new properties the dog object: breed, getDogInfo
dog.breed='German Shepherd'
dog.getDogInfo=function(){
    return `name: ${this.name} legs:${this.legs} age:${this.age} bark: ${this.bark()}`}


console.log(dog.getDogInfo())
*/
 
//Exercises: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 50
    }
  }
/*
  // 1- Find the person who has many skills in the users object.

  function findPersonWithMostSkills(users){

    let mostSkilledPerson
    let currentNumberOfSkill=0
    for(const user in users)
        if(users[user].skills.length>currentNumberOfSkill)
        {
            currentNumberOfSkill=users[user].skills.length
            mostSkilledPerson=user
        }
     return mostSkilledPerson
  }

    console.log(findPersonWithMostSkills(users))

    // 2- Count logged in users, count users having greater than equal to 50 points from the following object.
    function countLoggedInUsers(users){
        let counter=0
        for(const user in users){
            if(users[user].isLoggedIn)
                counter++
        }

        return counter
    }

    console.log(countLoggedInUsers(users))

    function countUsersHaving50AndGreaterPoints(){
        let counter=0
        for(const user in users){
            if(users[user].points>=50)
                counter++
        }

        return counter
    }

    console.log(countUsersHaving50AndGreaterPoints(users))

    // 3- Find people who are MERN stack developer from the users object

    function findMernStackDevelopers(users){
        let mernStackDevelopers=[]
        for(const user in users){
            let counter=0
            if( users[user].skills.includes('MongoDB'))
                counter++
            if( users[user].skills.includes('Express'))
                counter++
            if( users[user].skills.includes('React'))
                counter++
            if( users[user].skills.includes('Node'))
                counter++

            if(counter==4)
                mernStackDevelopers.push(user)
        }

        return mernStackDevelopers

    }

    console.log(findMernStackDevelopers(users))

    // 4- Set your name in the users object without modifying the original users object

    const dog={cins:'bulldog'}

    let copiedUserObject= Object.assign(users)

    copiedUserObject.Mucahit='I set my name in the users object'

    console.log(copiedUserObject)


    // 5- Get all keys or properties of users object
    const entries = Object.entries(users)
    console.log(entries)

    // 6- Get all the values of users object

    const values= Object.values(users)
    console.log(values)

    // 7- Use the countries object to print a country name, capital, populations and languages.

    for(let i=0; i<countries.length;i++){
        console.log(`${countries[i].name} - ${countries[i].capital} - ${countries[i].population}-${countries[i].languages}`)
    }
*/
    //Exercises: Level 3

    /*
    Create an object literal called personAccount. It has firstName, lastName, incomes, 
    expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
    addExpense and accountBalance methods. Incomes is a set of incomes and its description 
    and expenses is a set of incomes and its description.
    

    const personAccount={
        firstName:'Mucahit',
        lastName:'Bayrak',
        incomes:[],
        expenses:[], 
        properties:[],
        totalIncome:150,
        totalExpense:125,
        accountInfo:function(){ return `${this.firstName}\t${this.lastName}` },
        addIncome:function(newIncome){this.incomes.push(newIncome)
        return this.incomes},
        addExpense:function(newExpense){this.expenses.push(newExpense)
        return this.expenses},
        accountBalance:function(){ return (this.totalIncome-this.totalExpense).toFixed(2)}
    }

    console.log(personAccount.accountBalance())
    console.log(personAccount.accountInfo())
*/

    const userss = [
        {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'08/01/2020 9:00 AM',
            isLoggedIn: false
        },
        {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'08/01/2020 9:30 AM',
            isLoggedIn: true
        },
        {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'08/01/2020 9:45 AM',
            isLoggedIn: true
        },
        {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'08/01/2020 9:50 AM',
            isLoggedIn: false
        },
        {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'08/01/2020 10:00 AM',
            isLoggedIn: false
        }
        ];
    
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

    /*
    Imagine you are getting the above users collection from a MongoDB database. 
    a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
    */
    function signUp(username,email,password){
        let newUser=''
        let exist=false
        for(let i=0;i<userss.length;i++){
            
            if(userss[i].email===email){
                exist=true
                break;
            }
        }

        if(!exist){
            newUser={
                _id: userIdGenerator(6),
                username: username,
                email: email,
                password: password,
                createdAt: currentDateAndTimeGenerator(),
                isLoggedIn: false
            }
        }

        let message = exist ? 'Your account is already existed.' : newUser
        return message 
    }

    function currentDateAndTimeGenerator(){
        const now=new Date()
        return now.toLocaleString().slice(0,17)
    }

    function userIdGenerator(IDSize){
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomUserID=''
        for(let i=0 ; i<IDSize; i++){
            randomUserID+=characters[Math.floor(Math.random()*26)]
        }
        return randomUserID
    }

   // console.log(signUp('Muco','martha@martha.com','12345'))

    
    //b. Create a function called signIn which allows user to sign in to the application

    function signIn(email,password){
        let message='The email you entered is not registered.'
        let accountExists=true
        for(let i=0;i<userss.length;i++){
            
            if(userss[i].email===email){
                accountExists=true
                if(userss[i].password===password){

                    userss[i].isLoggedIn=true
                    message="You logged in successfully." + `isLoggedIn: ${userss[i].isLoggedIn}`
                }

                else{
                    message="Please enter a correct password."
                }
            }
        }

        return message

    }

  // console.log(signIn('thomas@thomas.com','123333')) 
    
    //The products array has three elements and each of them has six properties. 
   //a. Create a function called rateProduct which rates the product 
  
  function rateProduct(userName, userRate, productName){

    let message=''

    //0- Find User ID
    const userId=findUserIdByName(userName)
    //1- find the corresponding product by product name
    for(const product of products ){
        if(product.name===productName){

            //2-1 if the product rating array is empty then push rating straight away and exit the loop
            if(product.ratings.length==0){
                product.ratings.push({userId:userId, rate:userRate})
                message=product.ratings 
                break;
            }

            //2- make sure the person who will rate the product never rated the product before
           for(const rating of product.ratings) {   
            //3- else give warning saying a person cannot rate the same product twice and do nothing.
                if(rating.userId === userId){
                    message='A person cannot rate the same product twice.'
                    break;
                }
                //4- if it is first time for the person for rating the product push rating to
                //the ratings attribute array
                product.ratings.push({userId:userId, rate:userRate})
                message=product.ratings 
           }
        }   
        if(message.length!==0)
            break;
    }

    if(message.length==0)
        message='Product not found in the list.'

    return message
}

 //  console.log(rateProduct('Asab', 3, 'mobile phone')) 


    
    //Find the user ID by name
    function findUserIdByName(userName){
        let userId
        for(const user of userss){
            if(user.username===userName){
                userId=user._id
                break;
            }
        }
        return userId
    }

    
   //b. Create a function called averageRating which calculate the average rating of a product

   function averageRating(productName){
    //1-check if the product exist by name
    let result=''
        for(const product of products){
            if(product.name===productName){
                //2-check if there is no rating entered for the product
                    if(product.ratings.length!==0){
                        //3-calculate the product rating 
                            let totalOfRating=0
                            //3-1 compute total of product ratings 
                            for(const rating of product.ratings){
                                totalOfRating+=rating.rate
                            }
                            //3-2 work out the average
                            const average=totalOfRating/product.ratings.length
                            result=`The average of ${product.name} product is ${average}`
                    }

                    else{
                        result = `${product.name} has not been rated so far.`
                        break;
                    }
            }
            
        }
    if(result.length===0){
            result=`The ${productName} is not in the list.`
    }

    //4 return it 

    return result

   }

   //console.log(averageRating('mobile phone'))
   //console.log(averageRating('Laptop'))
   //console.log(averageRating('TV'))
   //console.log(averageRating('Washing Machine'))

   
   // 4 -Create a function called likeProduct. 
   //This function will help liking the product if it is not liked and remove like if it was liked.

   function likeProduct(userName, productName){
    let result=''
    // 1- find user 
    const user=findUserIdByName(userName)

    // 2- find the product
    for(const product of products){

        if(product.name===productName){

            //3 - check if product is liked by the given user and based on this like or unlike the product
            if(product.likes.includes(user)){
                //3-1 unlike the product by the user
                product.likes.splice(product.likes.indexOf(user),1)
                result=`${userName} unliked ${product.name}, the number of the product remaining likes: ${product.likes.length}`
                break;
            }
            else{
                //3-2 like the product by the user
                product.likes.push(user)
                result=`${userName} liked ${product.name}, the number of the product likes: ${product.likes.length}`
                break;
            }

        }

    }

    if(result.length===0)
        result=`${productName} does not occur in the list `

    return result

   }

   console.log(likeProduct('Asab','Dishwasher'))