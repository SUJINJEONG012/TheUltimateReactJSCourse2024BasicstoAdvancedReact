import feed, {anotherFunction} from "./feed"

// const user= {
//     name : "Angela",
//     email : "peekaboo32@naver.com",
//     country : "Korea"
// };
// // const name = user.name;
// // const email = user.email;
// // const country = user.country;

// const {name:userName , email, country}  = user;
// console.log(userName, email, country);

// const products =["Product1","Product2","Product2"];
// const displayItems = products.map((product)=> `<li>${product}</li>`);
// console.log(displayItems);

// const ages = [5,23,14,30,21]
// console.log(ages);
// const adults = ages.filter((age)=> age > 18);
// console.log(adults);

const arr1 = [1,2,3,4];
const arr2 = [7,8,9,10];
const arr3 = [5,6];

//const numbers = arr1.concat(arr3, arr2);
const numbers = [...arr1, ...arr2, ...arr3];
console.log(numbers);

const obj1 = {
    name:"Angeal"
}
const obj2 ={
    hobby : ["Kudo", "Programing"],
}
const user = {...obj1, ...obj2, Youtube : "Code Bless" };
console.log(user);

//삼항연산자
const marks = 30;
const result = marks > 35 ? "Pass" : "Fail";
console.log(result);

// 모듈 
feed();
anotherFunction();