//console.log("Hello World");
//for (let i=1;i<=5;i++){
//   console.log("Hello world");
//}

let n=100;
for (let i=1;i<=n;i++){
    //console.log(i);
    if(i%2==0){
        console.log(i+ "is a even number");
    }else{
        console.log(i+ "is a odd number");
    }
}

let num=5;
let fact=1;
for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact);

let i=1;
while(i<=5){
    console.log("Good morning")
    i+=1;
}

let j=1;
do{
    console.log("please");
    j++;
}while(j<=5);