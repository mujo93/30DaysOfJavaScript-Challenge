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

    console.log(Math.floor(Math.random()*10))

    console.log(Math.floor(Math.random() * (1 + 1)))  