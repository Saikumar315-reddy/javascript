// Push Method : It is used to add an one or more elements in the end of an array.
/* var check =[1,2,3,4,5];
console.log(check);
var arr = check.push(7);
console.log(check);

//Pop Method : It is used to remove the element of last index /last element
var don=[1,2,3,4,5,6]
console.log(don);
var arr1=don.pop()
console.log(don)

//Concat :combines two or more Arrays
let num1=[21,32,23,12,13]
let num2=[19,27,54,50]
let num3=[34,89,54,67]
let arr3=num1.concat(num2,num3)
console.log(arr3);

//Splice : it is used to

let array=[1,2,3,4,5,6]
let newarray=array.splice(1,3,22,43,45,65,54)
console.log(newarray);
console.log(array);

//slice: it is used to cut the array according to indexes

let arrt=[1,2,3,4,5,6,7,8]
let newarrt=arrt.slice(0,4)
console.log(newarrt);
console.log(arrt);

// Shift : removes the first element of an array

let shoot=[1,2,3,4,5,6,7]
let arr12=shoot.shift();
console.log(shoot);


// Unshift : add one or more elements at the start of an array.

let numbers=[1,2,3,4,5,6]
let num=numbers.unshift(7,8)
console.log(numbers)    */

//  
const items=[
    {name : "bike", price:100},
    {name : "tv", price:200},
    {name : "album", price:10},
    {name : "book" , price:5},
    {name : "phone", price:500},
    {name : "keyboard", price:1000},
    {name : "computer", price:25},
]
// filter :
 const filteredItems = items.filter((item)=>{
    return item.price
 })
 console.log(filteredItems);
//Map:
const itemName= items.map((item)=>{
    return item.name
 })
 console.log(itemName);

 //find:
const findItem= items.find((item)=>{
    return item.name=="album"
 })
 console.log(findItem);

 //some:
const lessThan= items.some((item)=>{
    return item.price>=2000;
 })
 console.log(lessThan);

 //every:
const less= items.every((item)=>{
    return item.price<=1000;
 })
 console.log(less);

 //reduce:
const addTotal= items.reduce((currentTotal,item)=>{
    return item.price + currentTotal
 },0)
 console.log(addTotal);

 //include:
const arr123=[1,2,3,4,5,56,]
const includesItem = arr123.includes(1)
console.log(includesItem);

 
