let a;
if(a !==null && a!==undefined){
    alert("true")
}else{
    alert("false")
} //false

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

// let height = 0;

// alert(height || 100); // 100
// alert(height ?? 100); // 0

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

