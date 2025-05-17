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

 for(i=0;i<10;i++){
    if(i%2==0){
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


m=1
do{
    console.log(m)
    m++;
}
while(m<6);



let hero="go";
switch(hero){
    case "roman reigns":
        console.log(hero)
        break;
    case "john cena":
        console.log(hero)
        break;
    case "randy":
        console.log(hero)
        break;
    default:
        console.log("jacky chan")
        break;
    
}


n=5;
let result=(n%2==0) ?"even":"odd";
console.log(result);

count=0;
 for(i=0;i<10;i++){
    if(i%2==0){
     console.log(i)
     count=count+i;  
    }
 }
 console.log(count)


 w=0;
 for(i=0;i<10;i++){
    if(i%2!=0){
        console.log(i)
        w=w+i;
    }
 }
 console.log(w)


 function eadd(){
    let a=0;
     for(i=0;i<10;i++){
       if(i%2==0){
        console.log(i)
        a=a+i;
       }
     }
    console.log(a)
 }
 eadd()
 
 