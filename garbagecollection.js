// user has a reference to the object
let user = {
    name: "John"
  };

  //now obj not reachable
  user=null;

  //hence user is deleted

  /**
   * multiple objects pointing to the same space 
   */
  // user has a reference to the object
let user = {
    name: "John"
  };
  
  let admin = user; //reference to space of user obj is created

//now user is pointing to the space but admin pointing to the space

//hence space is reachable so not deleted
  user=null;


  