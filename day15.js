/* 
//Exercises Level 1
1- Create an Animal class. The class will have name, age, color, legs properties and create different methods
Create a Dog and Cat child class from the Animal Class.
*/

class Animal{
  constructor(name,age,color,legs){
      this.name=name
      this.age=age
      this.color=color
      this.legs=legs
      console.log(name,age,color,legs);
  }

  getAnimalInfo(){
    return `Name of this animal ${this.name}. It is ${this.age} years old. It is ${this.color} colour. It has ${this.legs} legs.`
  }

}

class Dog extends Animal{
  constructor(name,age,color,legs,breed){
    super(name,age,color,legs)
    this.breed=breed
  }

  getAnimalInfo(){
    return `This dog's name is  ${this.name}. It is ${this.age} years old. The colour of it is ${this.color}. its breed is ${this.breed}.`
  }

  getSound(){
    return `woof woof`
  }
}

class Cat extends Animal{

  constructor(name,age,color,legs,breed){
    super(name,age, color, legs)
    this.breed=breed
  }
/*   Exercises Level 2
  Override the method you create in Animal class */
  getAnimalInfo(){
    return `This cat's name is  ${this.name}. It is ${this.age} years old. The colour of it is ${this.color}. its breed is ${this.breed}.`
  }

  getSound(){
    return 'meow'
  }

}
const animal=new Animal('puppy',12,'black',4)
const dog=new Dog('puppy',12,'black',4)
const cat=new Cat('puppy',12,'black',4,'Mavi')

console.log(cat.getAnimalInfo());

/*

Exercises Level 3
Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below. */


class Statistics{
  constructor(){

  }
  //all functios were created in day9  can be implemented here.
}