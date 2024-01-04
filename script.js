// print
console.log('hello');
// variables
  a=10;    // non declared variables               
console.log(a);
// variable declaration
var a=10; // value is 10
console.log(a);
{
    var a=90; // value to 90
    console.log(a);

}
console.log(a);
var a=23;
console.log(a);
let b=24;
console.log(b);
{
let b=23;
console.log(b);
}
console.log(b);
b=45;
console.log(b);
const v=36;
{
    const v=78;
    console.log(v);
}
console.log(v);
// datatypes
console.log(typeof(v));
let firstName ='maya';
console.log(typeof(firstName));
 let isava = true;
 console.log(typeof(isava));
 // undefined
 var t;
 console.log(t);
 console.log(typeof(t));

 //arrays
 let arr1= [1,2,3,4,5];
 console.log(typeof(arr1));
 console.log(arr1[0]);

 //js objects
 let person={
  name:'arathi',
  age:32,
  place:'kollam'

 }
 console.log(person.place)
// use newkeyword in js
 let car=new Object();
 car.brand='hyundai';
 car.model='i10';
 car.color='black';
 console.log(car);
 //array of objects
  var arr_obj=[{name:'maya',location:'kochi'},{name:'ara',location:'tvm'}]
  console.log(arr_obj[1].location)
  //operators
  let tr=8;
  console.log(tr+=3);
  //increment operator
  let inc=7;
  let inc1=inc++;//postfix
  console.log(inc1);// 7
  console.log(inc);//8


  let inc2=++inc;//prefix
  console.log(inc2);// 9
  console.log(inc);//9

//conditional statements
if (inc===inc1) {
  console.log('the values are equal')
} else {
  console.log('the values are not equal')
}
//example
let d=5;
let e=6;

if (d<6) {
  console.log('the condition is true')
} else {
  console.log('the condition is  not true')
}

// logical operators
if ((inc===inc1)&&(inc==89)) {
  console.log('both values are equal and it is 89')
} 
else {
  console.log('the condition check failed');
}

// order of execution
let re=90;
let ne=100;
let x= (ne-re)+(8**(2));
console.log(x)

//functions
function addval(ad1,ad2) {
  var sum=ad1+ad2;
  console.log('the sum is' +sum);
}
addval(10,20);// fun call


function subval(sub1,sub2) {
  var dif=sub1-sub2;
  return dif;
  }
  var result1=subval(40,20);
console.log('the difference is' +result1);


function multval(mult1,mult2) {
  var multiplication=mult1*mult2;
  return multiplication;
  }
  var result2=multval(4,2);
console.log('the product is' +result2);


//looping statements
// program to print nos from 1 to 10
for (let i = 0; i < 10; i++) {
  console.log(i+1);
  
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
  
}

// create an array with 5 elements and print all the elements in the array
let arr3= [1,2,3,4,5];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
// for of loop
 for(x of arr3){
  console.log(x);
 }
 // for in loop
 let person1={name:'joe',age:78,place:'tvm'}
for(x in person){
  console.log(x);
  console.log(person1[x]);
}
// while loop
let j=0;
while (j<10) {
  console.log(j+1);
  j++;
}

do{
  console.log(j);
  j++;
 } while(j<=10);




