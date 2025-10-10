// what is object  in javaScript
//javaScript in two way to declare a object singleton and object literals

//singleton means object create to constructor way to deaclre means 
// Object.create() //this is constructor way to declare object

//literals object means simple way to declare a object
let obj1={ //this is object literals
  name:"sarthak",
  age:20,
  city:"surat"  
} 
console.log(obj1)

//two way to object value access
console.log(obj1.name)//dot notation 
console.log(obj1["name"]) //square brackets to accesss


// how to value change value in object

obj1.name="sartha tarsariya"
console.log(obj1) //{ name: 'sartha tarsariya', age: 20, city: 'surat' }

//add value in object

obj1.isLoggedIn=true
console.log(obj1) //{ name: 'sartha tarsariya', age: 20, city: 'surat', isLoggedIn: true }

//delete value in object to use delete keyword

delete obj1.isLoggedIn
console.log(obj1) //{ name: 'sartha tarsariya', age: 20, city: 'surat' }

// freeze method 

// freeze method to use object in use to no other change in object 

Object.freeze(obj1)
obj1.name="sarthak" //onject in value not update becaues use to freeze method
console.log(obj1)