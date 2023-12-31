// console.log('==========================');
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log('================');
// let i=0;
// while(i<10){
//     console.log(i++);
// }
console.log('===========');
let as:string[] = [];
as.push("hanuma");
as.push("raj");
as.push('chowdary');
as.push('venu');
as.push('navaneeth');

console.log(as);
console.log('.......................');
for(let abc of as){
    console.log(abc);
}
console.log('........................');

let ak=as.pop()??'';
console.log(as);
as.sort();

as[1]=ak;
console.log(as);
let abc:string[] ='welcome to the world abc'.split(' ');
console.log(abc);
console.log('======================')
let st="hanuma";
let sta: string[] =st.split('');
console.log(sta);
sta.reverse();
let cv=sta.join();
console.log(cv);
let bv: string= '';
sta.forEach((ac)=>{
bv=bv+ac;
});
console.log(bv);
console.log('====================');
//vowels and constants separtion
const vowels: string[]=['a','e','i','o','u'];

sta.forEach((a)=>{
    if(vowels.includes(a)){
        console.log('vowel.. '+a.toLocaleLowerCase());
    }else{
        console.log('consonant..'+a.toLocaleUpperCase());
    }
});
console.log('====================');
let k=0;
do{
    if(k%2==0){
        console.log('even..'+k++);
    }else{
        console.log('odd..'+k++);
    }

}while(k<10);
console.log('======================');
