/**
 * obj referencing and copying
 * */

const user = {
  name: "abhi",
  age: 22,
};

const clone = Object.assign({}, user);
clone.name = "shek"; //it shows that obj user is copied to clone obj
user.name = "pipo"; //user is const, eventhough we can modify name
console.log(clone, user);
