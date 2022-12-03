console.log("Page Successfully Loaded script.js");

var website="https://codingforeverybody.com/";
var teacherName = "Lokesh Ghosh";


console.log(website);
/*
if (teacherName=="Lokesh Ghosh") {
    var apples=5;
    const height="5'5\"";
    console.log("I have",apples,"apples");
    console.log("I am",height);
    
}
*/
/*
const name="Lokesh Ghosh";
let profession ="Student";

*/
 
//Data Structure/Data Types
/*const str="A string";
const num=5;
const flt=3.43;
const bool=true;// or false
const list=["item 1", 2, "Three", 3.14, []]; //Array = List
const thing = null;
const notDefined = undefined; //Currently holds not value
const getAge=function(){return 32;} //This is a function
const obj ={
    'name':'Lokesh',
    'profession': 'Student'
    //Object ; can be accessed with obj['name']; 
}
*/

//Selecting  element by their ids
/*const box=document.getElementById("box");
box.innerText="Something New";
box.innerHTML="Something <strong>new is bolded</strong>";
*/

//Object
/*
let person={};
console.log(typeof(person));
person={'name':'Lokesh',
        'job':'Student',
        'age':21,
        'favFoods':['Paneer Butter Masala','chole kulche', 'Barfi']
    }

// console.log(person);

const cat={
    'name':'Oscar',
    'words':'Meow',
    'action':'Nap',
    'size':'Big'
}
*/

// cat['action'];


//String Methods
/*
const course="Javascript 101: Coding for Beginners";
// course.slice(16,21);
console.log(course.search("Coding"));
console.log(course.slice(16,22));
console.log(course.substr(16,6));
console.log(course.substring(16,6));
console.log(course.replace("Coding","Programming"));
console.log(course.toUpperCase());
console.log(course.toLowerCase());

const spacy="        lots of spaces        ";
console.log(spacy);

console.log(spacy.trim());


words=course.split(" ");

console.log(words);
*/

//Demystifying Data Types
/*
console.log(typeof(course));

const boolean =false;
console.log(typeof(boolean));
*/

//Casting Data Types 
/*
age="31";
console.log(typeof(age));
console.log(age*32);
age="my age is 22";
console.log(age*2); //This will give NaN(Not A Number)
age = "31";
age= Number(age);
console.log(typeof(age));
console.log(age);
   
age= Object(age);
console.log(typeof(age));
console.log(age);
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
age=31;
age=String(age);
console.log(age);
console.log(typeof(age));
age=age.replace("1","3");

console.log(age);



age=prompt("What is your age?");
console.log(age);
age= Number(age);
myage=10;
console.log(age+myage);
*/


//string concatenation
/*
var name="Lokesh";
var age=25;
// console.log(name+" is my name"+age+" is my age");
console.log(`My name is ${name}. And my age is ${age}.`); //This is called template literal
*/

//Java Script Numbers
/*
num =123;
num2= "456.7";
console.log(num+ num2);
num2=Number(num2);
console.log(num+ num2);
*/

//Array
/*
lst=["one", 2, 3.9, "four", [], {}]
console.log(lst);
lst.push("New item here");
console.log(lst);
const newItem = lst.pop();
console.log(lst);
console.log(newItem);
*/

//Array Iteration
const arr=["Zero", "One", "Two", "Three"];
/*
for(let i=0; i<arr.length; i++){
    // console.log(i);
    console.log(arr[i]);
}
*/

// arr.forEach(num=>{
//     console.log(num);
// })


//Selecting multiple DOM nodes
/*
const elems=document.querySelector(".this-class"); //to select only 1st one
const elems2=document.querySelectorAll(".this-class"); //to select all at once
console.log(elems.innerText); 
console.log(elems);
console.log(elems2);
*/ 

/*
const element= document.querySelectorAll("li");
console.log(element);

element.forEach(node=>{
    console.log(node.innerText);
  
});

element.forEach(node=>{
    console.log(node.innerText);
    node.innerText="This is changed!";
});

element.forEach((node, index) => {
    node.innerText = `Hello this is item ${index+1}`;
});

element.forEach(node=>{
    node.classList.add("custom-class","second-class");
});

*/



//Functions in Java Script
/*
function addNumbers(param1, param2){
    //Logic 
    return "an answer";

}

const total=addNumbers(); //an answer
console.log(total);  
*/


// function re-using code
/*
function addNumbers(num1, num2){
    const total= num1+num2;
    return total;

}

const addedTotal=addNumbers(1,9);
console.log(addedTotal);  


function greeting(name){
    console.log(`Hello ${name}`);
}

let printName= greeting("Lokesh");
console.log(printName);

*/

//Function the rest operator
/*
function addNumber(greetingName, ...numbers){
    let total=0;
    for(index in numbers){
      
      total=total+numbers[index];
      
    }
    return `Hey ${greetingName}: The total is ${total}` ;
  }
  let final = addNumber("Lokesh",1,4,7,45,5);
  console.log(final);
  */


// Object with Funtions
/*
const person ={
    'name':'Lokesh',
    'age':21,
    'height':"5'7\"",
    'speak': function(want="cookies"){
        console.log(`Hey Lokesh, I want ${want}`);
    },
    talk(to="Karan"){ //This is called object literal
        console.log(`I am talking ${to}`);
    }



}

const person2={
    'name':'Ghosh',
    'age':23,
    'height':"6'0\"",
   
}
person['favfood']="Paneer Butter Masala";
console.log(person);
console.log(person['favfood']);
person.speak();
person.speak(person.favfood);
person.talk();
person.talk("amanda");


console.log(person2);

*/


