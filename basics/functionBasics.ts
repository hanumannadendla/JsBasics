function test(a:string){
    console.log('welcome to abc mall '+a);
}
test('hanuma');

function welcomeNote(a='mall'){
    console.log('welcome to '+a);
}
welcomeNote('abc mall');

console.log('===========================');
function fact(a:number):number{
    if(a<=0){
        return 1;
    }else{
        return (a*fact(a-1));
    }
}
console.log(fact(4));
console.log('=========================');
//annomous function constructor calling and declaration
var mySum=function(dv:number, cva:number) {
    return dv+cva;
}
console.log(mySum(2,4));
console.log('=====================');
//recuresive annomous function declaration and
(function(){
    console.log('abc');
})();
console.log('............................');