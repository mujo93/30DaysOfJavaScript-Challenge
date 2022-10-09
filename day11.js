import {countriesData} from './data/countries_data.js'  

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
/* 1- Destructure and assign the elements of constants array to e, pi, gravity, 
humanBodyTemp, waterBoilingTemp. */

let [e,pi,gravity,humanBodyTemp,waterBoilingTemp]=[Math.E.toFixed(2),Math.PI.toFixed(2),9.8,36, 100]
//console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

// 2-Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin,est,sw,den,nor]=countries
//console.log(' fin:'+fin+ ' est:'+est+ ' sw:'+sw+ ' den:'+den+ ' nor:'+nor);
// 3-Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }

  const {width,height,area,perimeter}=rectangle

  //console.log( typeof perimeter)
  
//Exercises: Level 2
//1- Iterate through the users array and get all the keys of the object using destructuring

for(const {name,scores,skills,age} of users){

   // console.log(`name: ${name} scores:${scores} skills:${skills} age:${age}`);
}

//2- Find the persons who have less than two skills 

console.log('People who have less than 2 skills: ');
for(const {name,scores,skills,age} of users){

    // /console.log(`${name}: ${skills}`)
    if(skills.length<=2)
        console.log(name);
}

// Exercises: Level 3
//1-Destructure the countries object print name, capital, population and languages of all countries

for(let {name,capital,population,languages} of countriesData){

    //console.log(`Name:${name}\nCapital:${capital}\nPopulation:${population}\nLanguages:${languages}`);
}


/*
2-A junior developer structure student name, skills and score in array of arrays which may not easy 
to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line. */

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let[name,skills,scores] =student 
//console.log([...student] )
//console.log(skills)
//console.log(scores[0])
//console.log(reactScore);
//console.log(name, skills, jsScore, reactScore)


// 3- Write a function called convertArrayToObject which can convert the array to a structure object

const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(){
    let arrayOfStudentInfos=[]
        for(const [name,skills,scores ]of students){
        
            arrayOfStudentInfos.push({
                name:name,
                skills:skills,
                scores:scores
            })
        }
    
        return arrayOfStudentInfos
}

//console.log(convertArrayToObject())

// 4-Copy the student object to newStudent without mutating the original object. 
//  In the new object add the following ?

const studentSS = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

  // -Add Bootstrap with level 8 to the front end skill sets
    let newStudent={...studentSS,skills:{...studentSS.skills,frontEnd:[...studentSS.skills.frontEnd,{skill:'Bootstrap',level:8}]}}
    console.log(newStudent);
    // -Add Express with level 9 to the back end skill sets
    newStudent={...studentSS,skills:{...newStudent.skills,backEnd:[...newStudent.skills.backEnd, {skill:'Express',level:9}]}}
    console.log(newStudent);

    // -Add SQL with level 8 to the data base skill sets
    newStudent={...studentSS,skills:{...newStudent.skills,dataBase:[...newStudent.skills.dataBase, {skill:'SQL',level:8}]}}
    console.log(newStudent);
    
    //Add SQL without level to the data science skill sets
    newStudent={...studentSS,skills:{...newStudent.skills,dataScience:[...newStudent.skills.dataScience,'SQL']}}
    console.log(newStudent);
