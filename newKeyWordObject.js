//new key word creates a copy of object using objects teamplate

var User = function (fname, lname) {
  this.fname = fname;
  this.lname = lname;
};

var abhi = new User("abhi", "shek");

console.log(abhi);
