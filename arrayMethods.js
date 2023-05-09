
//some
var arr=[1,2,3,4,5];
var b=arr.some((x)=>{
    return x>=18;
})
console.log(b);


//map 

var arr=[1,18,3,4];
var b=arr.map((x)=>{
    return (x*18);
})

console.log(b);


//findIndex
//find
var arr=[1,18,3,4];
var b=arr.map((x)=>{
    return (x*18);
})

console.log(b);

//find
//find
var arr=[1,18,3,4];
var b=arr.find((x)=>{
    return (x===18);
})

console.log(b);

//filter

let arr=[1,2,3,4];

var b=arr.filter((x)=>{
    return x<4;
})
console.log(b)

//to string
let arr=[1,2,3,4];

var b=arr.toString((x)=>{
    return x;
})
console.log(typeof b)

//valueOf

let arr=[1,2,3,4];

console.log(arr.valueOf());


//fill()

let arr=[1,2,3,4];

arr.fill("ram")
console.log(arr.valueOf()) //["ram","ram","ram","ram"]


//fill array value starting from position 3
let arr=[1,2,3,4];

arr.fill("ram",3)
console.log(arr.valueOf())


//for each
let arr=[1,2,3,4];
arr.forEach((x)=>{
    console.log(x*2)
})

//concat
let arr=[1,2,3,4];

let b=arr.concat(5,6)

console.log(b)

//concat two arrays
let arr=[1,2,3,4];

let c=[5,6]

let d=arr.concat(c)
console.log(d)


////join
let arr=[1,2,3,4];

let c=[5,6]

let d=arr.concat(c)
let e=d.join("+");
console.log(e)


//slice
let x=["map","slice","splice","concat","join","find","filter","some","valueof"]
let z=x.slice(1,3)
console.log(z)


//splice
let x=["map","slice","splice","concat","join","find","filter","some","valueof"]
let z=x.splice(1,3)
console.log(z)


//reduce
let arr=[1,2,3,4]

let b=arr.reduce((acc,cur)=>{
    acc+=cur;
    return acc;
},10)//intial value of acc

console.log(b)  //20

//max using reduce
let arr=[1,2,3,4]

let b=arr.reduce((max,cur)=>{
    if(cur>max){
        max=cur;
    }
    return max;
},0)

console.log(b)

// symbols
//symbols

var a=Symbol("abhi");
var b=Symbol("abhi");

console.log((a===b) );


