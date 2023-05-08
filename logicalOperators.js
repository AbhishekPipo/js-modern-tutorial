// or

if(1 || 0){
    alert("truthy")
}

let hrs=9;
// let hrs=9;
if(hrs<10 || hrs>18){
    alert("office is closed")
}

let isWeekend=true;
if(hrs<10 || hrs>18 || isWeekend){
    alert("office is closed")
}

// 
let a=true;
let b=true;

if( a && b){
    alert("true")
}

// Don’t replace if with || or &&