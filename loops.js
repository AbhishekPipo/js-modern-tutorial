
//while loop
let i=0;
while(i<3){
    alert(i);
    i++;
}

//
let j=3;
while(j){
    alert(j);
    j--;
} // i==0 become falsy


let k=3
do{
    alert(k);
    k--;
}while(k>4)

//switch
let value=3;

switch(value){
    case '1': alert("bad")
    break;
    
    default: alert("not valid")
    break;
}

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}