// console.log("hello world")
// console.error("this is error")
// console.warn("this is warning")

// var ,let ,const

// LET is more felxible to use

// let age=30;
// age=31
// console.log(age);

// CONST you have to assign values directly

// const age=30;
// age=31
// console.log(age);

                                         // DATA TYPES
                    // String , Number ,Boolean, null , undefined

// const name ='john';
// const age=30;
// const rating=4.5;
// const iscool =true;
// const x=null; //null has a bogus typeof value(i.e false or not true)
// const y=undefined;
// let z;

// console.log(typeof z)

// concatination
// const name ='john';
// const age=30;
// console.log('my name is'+' ' + name + ' '+"and i am"+' ' +age)

// template Strings
// const hello=(`my name is ${name} and i am ${age}`)
// console.log(hello)

// const s='hello world'
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0,5).toUpperCase())
// const s='hello,world,bye,welcome'
// console.log(s.split(','))
 
                                // Arrays -variables that hold multiple values

// const fruits = ["apple","orange","banana"]
// fruits[3]='mango'
// fruits.push('watermelon')
// fruits.unshift('strawbeery')
// fruits.pop()
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf("orange"))
// console.log(fruits)

                                    // Object literals

// const person={
//     firstname: "kunal",
//     lastname:"verma",
//     age:22,
//     hobbies:["music","coding",'gym'],
//     address:{
//         street:"7",
//         city:"gurgaon",
//         state:"haryana",
//     }
// }
// console.log(person.firstname,person.lastname)
// console.log(person.address.city)

// const {firstname, lastname,address:{city}}=person;
// console.log(city);
// person.email='kunal@crownstack.com'
// console.log(person);

// const todos =[
//     {
//         id:1,
//         text:"take out trash",
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:"Meeting w boss",
//         isCompleted:true
//     },
//     {
//         id:3,
//         text:"Dentist appointment",
//         isCompleted:false
//     }
// ];
// console.log(todos[1].text)

// const todoJson= JSON.stringify(todos);
// console.log(todoJson)

// for
// for(let i=0; i<=10;i++){
//     console.log(`${i}*2=${i*2}`)
// }

// While

// let i=0;
// while(i<10){
//     console.log(`${i}-1=${i-1}`);
//     i++;
// }

// for
// const todos =[
//         {
//             id:1,
//             text:"take out trash",
//             isCompleted:true
//         },
//         {
//             id:2,
//             text:"Meeting w boss",
//             isCompleted:true
//         },
//         {
//             id:3,
//             text:"Dentist appointment",
//             isCompleted:false
//         },
//     ];
                              // convention old method
// for(let i=0; i<todos.length;i++){
//     console.log(todos[i].text);
// }
                             // Easy and better Method
// for(let todo of todos){  //todo of todos = todos[todo]==todos[i]
//     console.log(todo.text)
// }

                              // forEach,map,filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// })

// const todoText = todos.map(function(todo) {   //todos[todo]
//     return todo.text                          // todoText=todos[todo].text   
// })
// console.log(todoText);


// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// })
// console.log(todoCompleted);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text
// })
// console.log(todoCompleted);

// const x=6;
// const y=11;
// if(x>5 && y>10)
// {console.log('x more than 5 or y is greater than 10')
// }else if(x>10){
// console.log('x is greater than 10')
// }
// else{
// console.log("x is less than 10")
// }

// const x=10;
// const color='yellow'
// const color=x>10 ? 'red':'blue'  // ((= is if, ? is than , : is else))
// console.log(color)

// switch(color){
//  case'red':
//  console.log('color is red')
//  break;
//  case'blue':
//  console.log('color is blue')
//  break;
//  default:
//      console.log('color is not red or blue')
// }

//                                   Function

// function addnums(num1=12,num2=2){
//     return(num1+num2)
// }
// console.log(addnums(4,4))

// Arrow Function
// const addnums = (num1=12,num2=2)=>num1+num2
// console.log(addnums(4,4))
//**                           **                   **//
// const doublenums = num1=>num1*2;
// console.log(doublenums(5));

// todos.forEach((todo)=>console.log(todo));

//                                     OOPS
// Constructor Function
//  function person(firstname, lastname, dob){
//      this.firstname=firstname;
//      this.lastname=lastname;
//      this.dob=new Date(dob);
//      this.getBirthYear= function() {
//          return this.dob.getFullYear();
//      }
//      this.getFullName = function (){
//          return `${this.firstname} ${this.lastname}`
//      }
//      person.prototype.getBirthYear= function(){
//         return `${this.firstname} ${this.lastname}`
//      }
//      person.prototype.getFullName=function(){
//         return this.dob.getFullYear();
//      }
//  }
//                                  Class
// class person{
//     constructor(firstname, lastname, dob){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.dob=new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob;
//     }
//     getFullName(){
//         return `${this.firstname} ${this.lastname}`

//     }
// }
//  Instantiate object
// const person1= new person('kunal','verma','12-04-1998');
// const person2= new person('Abhijeet','Dhaka','04-12-1995');

// console.log(person1.getBirthYear());
// console.log(person1);
// console.log(person2);

//                                 DOM


