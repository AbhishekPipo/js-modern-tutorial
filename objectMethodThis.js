// this reference to the OBJECT that executing Current Function

//this references when below
//method -> obj **this references to the objects when method inside obj

//function -> global obj (window) * **now this refrences to the global object beacause its not
//in any objects

//object method->obj
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

//this -> global(window) object
function name() {
  console.log(this);
}

name();

/**
 * below funtion is global function or regular funtion
 */
var video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(tag); //if we add this inside this function we get error
    });
  },
};

video.showTags();

/**to overcome this we pass one more argument as "this" */

var video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();
