let a=10;
let b=20;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a==b)
console.log(a!=b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)

function sub(){
    var a=20;
    var b=10;
    console.log(a-b)
}
sub()
 
var mul=(a,b)=>{
    console.log(a*b)
}
mul(10,4)



 a=10;
 b=20;
 console.log(`${a}+${b}=${a+b}`)


 c='welcome';
 console.log(c)


 n=23
 if(n%2==0){
    console.log('even')
 }
 else{
    console.log('odd')
 }

 for(i=0;i<5;i++){
    if(i%2!=0){
        console.log(i)
    }
 }

 for(i=0;i<10;i++){
    if(i%2==0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i}is odd`)
    }
 }


n=1;
while(n<=10){
    if(n%2==0){
        console.log(`${n} is even`)
    }
    else{
        console.log(`${n}is odd`)
    }
    n++;
}