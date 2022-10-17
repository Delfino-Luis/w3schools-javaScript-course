# JavaScript ES5
```html
ECMAScript 2009, also known as ES5, was the first major revision to JavaScript.

This chapter describes the most important features of ES5.
```

## ES5 Features
* ["use strict"]()
* [String[number] access]()
* [Multiline strings]()
* [String.trim()]()
* [Array.isArray()]()
* [Array forEach()]()
* [Array map()]()
* [Array filter()]()
* [Array reduce()]()
* [Array reduceRight()]()
* [Array every()]()
* [Array some()]()
* [Array indexOf()]()
* [Array lastIndexOf()]()
* [JSON.parse()]()
* [JSON.stringify()]()
* [Date.now()]()
* [Date toISOString()]()
* [Date toJSON()]()
* [Property getters and setters]()
* [Reserved words as property names]()
* [Object methods]()
* [Object defineProperty()]()
* [Function bind()]()
* [Trailing commas]()



## Browser Support
`ES5` is fully supported in all modern browsers:
| ![]() | ![]() | ![]() | ![]() | ![]() |
|----|----|----|----|----|
| Chrome	| Edge	| Firefox	| Safari	| Opera |
| Yes	|	Yes	| Yes	| Yes	| Yes |



## The "use strict" Directive
`"use strict"` defines that the JavaScript code should be executed in "strict mode".

With strict mode you can, for example, not use undeclared variables.

You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

`"use strict"` is just a string expression. Old browsers will not throw an error if they don't understand it.

Read more in [JS Strict Mode](https://www.w3schools.com/js/js_strict.asp).



## Property Access on Strings
The `charAt()` method returns the character at a specified index (position) in a string:

### Example
```js
var str = "HELLO WORLD";
str.charAt(0);            // returns H
```

ES5 allows property access on strings:

### Example
```js
var str = "HELLO WORLD";
str[0];                   // returns H
```

Property access on string might be a little unpredictable.

Read more in [JS String Methods](https://www.w3schools.com/js/js_string_methods.asp).



## Strings Over Multiple Lines
ES5 allows string literals over multiple lines if escaped with a backslash:
### Example
```js
"Hello \
Dolly!";
```

```html
The \ method might not have universal support.
Older browsers might treat the spaces around the backslash differently.
Some older browsers do not allow spaces behind the \ character.
```


A safer way to break up a string literal, is to use string addition:

### Example
```js
"Hello " +
"Dolly!";
```


## Reserved Words as Property Names
ES5 allows reserved words as property names:

### Object Example
```js
var obj = {name: "John", new: "yes"}
```


## String trim()
The `trim()` method removes whitespace from both sides of a string.

### Example
```js
var str = "       Hello World!        ";
alert(str.trim());
```

Read more in [JS String Methods](https://www.w3schools.com/js/js_string_methods.asp).



## Array.isArray()
The `isArray()` method checks whether an object is an array.

### Example
```js
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}
```

Read more in [JS Arrays](https://www.w3schools.com/js/js_arrays.asp).



## Array forEach()
The `forEach()` method calls a function once for each array element.

### Example
```js
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}
```

Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).



## Array map()
This example multiplies each array value by 2:

### Example
```js
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
```

Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).



## Array filter()
This example creates a new array from elements with a value larger than 18:

### Example
```js
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
```

Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).



## Array reduce()
This example finds the sum of all numbers in an array:

### Example
```js
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
```

Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).



## Array reduceRight()
This example also finds the sum of all numbers in an array:

### Example
```js
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
```

Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).



## Array every()
This example checks if all values are over 18:

### Example
```js
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
```
Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).



## Array some()
This example checks if some values are over 18:

### Example
```js
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}
```

Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).


## Array indexOf()
Search an array for an element value and returns its position.

### Example
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
```
Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).



## Array lastIndexOf()
`lastIndexOf()` is the same as `indexOf()`, but searches from the end of the array.

### Example
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
```

Learn more in [JS Array Iteration Methods](https://www.w3schools.com/js/js_array_iteration.asp).



## JSON.parse()
A common use of JSON is to receive data from a web server.

Imagine you received this text string from a web server:
```js
'{"name":"John", "age":30, "city":"New York"}'
```

The JavaScript function `JSON.parse()` is used to convert the text into a JavaScript object:
```js
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
```

Read more in our [JSON Tutorial](https://www.w3schools.com/js/js_json_intro.asp).



## JSON.stringify()
A common use of JSON is to send data to a web server.

When sending data to a web server, the data has to be a string.

Imagine we have this object in JavaScript:
```js
var obj = {name:"John", age:30, city:"New York"};
```

Use the JavaScript function `JSON.stringify()` to convert it into a string.
```js
var myJSON = JSON.stringify(obj);
```
```css
The result will be a string following the JSON notation.
```

myJSON is now a string, and ready to be sent to a server:

### Example
```js
var obj = {name:"John", age:30, city:"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
```

Read more in our [JSON Tutorial](https://www.w3schools.com/js/js_json_intro.asp).


## Date.now()
`Date.now()` returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).

### Example
```js
var timInMSs = Date.now();
```

`Date.now()` returns the same as getTime() performed on a `Date` object.

Learn more in [JS Dates](https://www.w3schools.com/js/js_dates.asp).



## Date toISOString()
The `toISOString()` method converts a Date object to a string, using the ISO standard format:

### Example
```js
const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();
```


## Date toJSON()
`toJSON()` converts a Date object into a string, formatted as a JSON date.

JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ:

### Example
```js
d = new Date();
document.getElementById("demo").innerHTML = d.toJSON();
```


## Property Getters and Setters
ES5 lets you define object methods with a syntax that looks like getting or setting a property.

This example creates a **getter** for a property called fullName:

### Example
```js
// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;
```

This example creates a **setter** and a **getter** for the language property:

### Example
```js
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
```

This example uses a setter to secure upper case updates of language:

### Example
```js
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  set lang(value) {
    this.language = value.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
```

Learn more about Gettes and Setters in [JS Object Accessors](https://www.w3schools.com/js/js_object_accessors.asp)



## Object.defineProperty()
`Object.defineProperty()` is a new Object method in ES5.

It lets you define an object property and/or change a property's value and/or metadata.

### Example
```js
// Create an Object:
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : true,
  configurable : true
});

// Enumerate Properties
var txt = "";
for (var x in person) {
  txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
```


Next example is the same code, except it hides the language property from enumeration:

### Example
```js
// Create an Object:
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : false,
  configurable : true
});

// Enumerate Properties
var txt = "";
for (var x in person) {
  txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
```

This example creates a setter and a getter to secure upper case updates of language:

### Example
```js
/// Create an Object:
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO"
};

// Change a Property:
Object.defineProperty(person, "language", {
  get : function() { return language },
  set : function(value) { language = value.toUpperCase()}
});

// Change Language
person.language = "en";

// Display Language
document.getElementById("demo").innerHTML = person.language;
```


## E5 Object Methods
ES5 added a lot of new Object Methods to JavaScript:

### Managing Objects
```js
// Create object with an existing object as prototype
Object.create(parent, donor)

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)
```


### Protecting Objects
```js
// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
```


Learn more in [Object ECMAScript5](https://www.w3schools.com/js/js_object_es5.asp).



## Function Bind()
With the `bind()` method, an object can borrow a method from another object.

This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object:

### Example
```js
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
```

Learn more in [Function bind()](https://www.w3schools.com/js/js_function_bind.asp).



## Trailing Commas
ES5 allows trailing commas in object and array definitions:

### Object Example
```js
person = {
  firstName: "John",
  lastName: " Doe",
  age: 46,
}
```

### Array Example
```js
points = [
  1,
  5,
  10,
  25,
  40,
  100,
];
```

```css
WARNING !!!

JSON does not allow trailing commas.
```


### JSON Objects:
```js
// Allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46}'
JSON.parse(person)

// Not allowed:
var person = '{"firstName":"John", "lastName":"Doe", "age":46,}'
JSON.parse(person)
```


### JSON Arrays:
```js
// Allowed:
points = [40, 100, 1, 5, 25, 10]

// Not allowed:
points = [40, 100, 1, 5, 25, 10,]
```