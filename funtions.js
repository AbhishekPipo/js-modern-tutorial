let userName = "John";

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userName;
  alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function

//
let userName = "John";

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = "Hello, " + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert(userName); // John, unchanged, the function did not access the outer variable


// from=ann remains same
function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  alert( from ); // Ann

//   default value
function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given

  showMessage("Ann", undefined); // no text given

  // text is empty

  function showMessage(text) {
    // ...
  
    if (text === undefined) { // if the parameter is missing
      text = 'empty message';
    }
  
    alert(text);
  }
  
  showMessage();

  // ?? used in funtion
  function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
  }
  
  showCount(0); // 0
  showCount(null); // unknown
  showCount(); // unknown

  //INBUILT FUNCTIONS

  pow(3,2) === pow(3^2)=9
  min(a,b)
  max(a,b)


  // funtion as arguments
  function sayHi() {
    alert( "Hello" );
  }
  
  alert( sayHi ); // shows the function code


  //funtions rember its lexical scope even after its returned to other function

  function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)


//   array second max withot splicing
let arr = [12, 5, 6, 11];
let max = arr[0];
let secondMax = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] < max) {
    secondMax = arr[i];
  }
}

console.log(secondMax);

// with splicing array second max
var secondMax = function() {
    var arr = [20, 120, 111, 215, 54, 78]; // initialize array
    var max = Math.max.apply(null, arr); // find maximum element
    arr.splice(arr.indexOf(max), 1); // remove maximum element from array
    return Math.max.apply(null, arr); // find maximum element again (now it's the 2nd maximum)
  };
  
  console.log(secondMax()); // outputs 120 (the 2nd largest element in the array)

  