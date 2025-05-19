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

 let movie=["rosario","jo","malignent","holy night","tall grass"];
 console.log(movie)
 console.log(movie[4])    
 for(let mo in movie){           
    console.log(mo)
 }
 for(was of movie){
    console.log(was)
 }
 var size=movie.length;
 console.log(size)


 ar=[1,14,11,25];
 for(var index in ar){
    console.log(index)
 }
 for(inx of ar){
    console.log(inx)
 }

var arr=["randy","john cena","roman","sethrollins"];
 for(var key of arr){
    console.log(key)
 }

 var ice={brand:"arun",flavour:"vannila"}
 for(value in ice){
 console.log(ice[value])
 }
 for(key in ice){
    console.log(key)
 }
for(val in ice){
    console.log(ice[val])
}

var r=4+"priya";
console.log(r)

// spread operator
a=["thala","gbu","aadhi","anbuarivu"];
b=["arjundas",...a];
console.log(b)
console.log(a)
console.log(a[2])

// destructuring operator
var m=[90,98,89,78];
var [cs,ca,py,fs]=m;
console.log(cs)
console.log(ca)
console.log(py)
console.log(fs)
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age, city } = person;
console.log(person); 
console.log(name,age,city)

const nest= { 
    data: [
        { id: 1, name: 'Item 1' }, 
        { id: 2, name: 'Item 2' }
    ] 
};
const { data: [a1,a2] } = nest;
console.log(a1.id);
console.log(a2); // Output: Item 1

const nested = { 
    data: [
        { id: 1, name: 'Item 1' }, 
        { id: 2, name: 'Item 2' }
    ] 
};
const { data: [{ nmae: firstItemName }] } = nested;
console.log(firstItemName); // Output: Item 1



// call back function
function food(){
    console.log("my fav food is curdrice");
}
function love(callback){
    console.log("food lover");
    callback();
}
love(food)

const btn=document.getElementById("btnl");
btn.onclick=function(){
    alert("vaanga palagalam")

    window.open("https://www.instagram.com/")
}


const btn1=document.querySelectorAll("btn");
btn1.onclick=function(){
    alert("welcome genius!!!")
    window.open("https://www.google.co.in/")
}
