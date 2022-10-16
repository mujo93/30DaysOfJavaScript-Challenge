//Exercises: Level 1
//1-Store you first name, last name, age, country, city in your browser localStorage.
window.localStorage.setItem('firstName','Mucahit')
window.localStorage.setItem('lastName','Bayrak')
window.localStorage.setItem('age','29')
window.localStorage.setItem('country','Turkey')
window.localStorage.setItem('city','Bursa')


//Exercises: Level 2
// 1- Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student={
    firstname:'Ahmet',
    lastname:'Tunca',
    age:29,
    skills:['Docker','Kubernetes','Java','SQL'],
    country:'Turkey',
    enrollmentid:21345234
}

const stringifiedUser= JSON.stringify(student,undefined,4)
window.localStorage.setItem('student',stringifiedUser)


//Exercises: Level 3
//1-Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount={
firstname:'Mucahit', 
lastname:'Bayrak', 
incomes: {
    rents:'Rent incomes which come from the houses that I own',
    bakery:'earnings from our family-owned bakery',
    crypto:'Crypto earnings'
}, 
expenses:['bills','grocery','education','textile'], 
totalIncome:function(){
    //total of all incomes
},
totalExpense: function(){
    //total of all expenses
}, 
accountInfo:function(){
    return `account owner: ${this.firstname} ${this.lastname}, balance: ${this.accountBalance()}`
}, 
addIncome: function(){
    //add income
},
addExpense: function(){
    //add expense
}, 
accountBalance: function(){
    return this.totalIncome() - this.totalExpense()
}}