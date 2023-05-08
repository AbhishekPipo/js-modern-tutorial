alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true


alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( true == 1 ); // true
alert( false == 0 ); // true v r not checking type just checking ==


let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

alert( '' == false ); // true


///null and undefined are both not same  when we use ===

alert( null === undefined ); // false
//null and undeined is true when we check using not strict operator ==
alert( null == undefined ); // false

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true


// undefined is not greaterthan 0 nor lessthan 0 nor equal to zero


alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)