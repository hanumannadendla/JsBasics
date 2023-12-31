//auto assignment will happend automatically if you have assign type of variable
//implicity defining by typescript
let a:string="hanuma";
console.log("welcome to typescript world "+a);

// try{
//     a=100;
// }catch(error){
//     console.log('Exception found '+error)
// }
//auto assignment will not happena and will igonore the type if it mentioned as any
//explicity defining by user
let b:any =true;
console.log(b);
//reassignment will allow the type as any
b="hanuma";
console.log(b);
console.log('===================================================');
console.log('value comparision')
console.log(a==b);   //== compares the values in javascript
console.log('value and type comparision');
console.log(a===b); //  === compares the value and type of the variable javascript. But in typescript both are same result
console.log('====================================================');
//unknown will work in same case as any but
let c:unknown ="unknown value string";
console.log(c);

c=10;

console.log(c);

let df:number =10;
console.log(df);

let tg:string ="hanuma";
console.log(tg);

let bignt:bigint =BigInt(1000);
console.log(bignt);

//we can't assign a value to this type of variable
let bc:never;

//Typescript never assign defaulut value to a variable
let bd:boolean;
//console.log(bd);

const ad ="test";
console.log(ad);


//Symbol values are created by calling symbol with constructor. Symbols are immutable and unique
let ab=Symbol('key'); //optiontional string key
let cb=Symbol('key');
console.log(ab===cb);









