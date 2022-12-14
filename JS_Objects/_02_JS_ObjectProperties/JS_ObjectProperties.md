# JavaScript Object Properties
Properties are the most important part of any JavaScript object.


## JavaScript Properties
Properties are the values associated with a JavaScript object.

A JavaScript object is a collection of unordered properties.

Properties can usually be changed, added, and deleted, but some are read only.

## Accessing JavaScript Properties
The syntax for accessing the property of an object is:
```js
objectName.property      // person.age
```

or
```js
objectName["property"]   // person["age"]
```

or
```js
objectName[expression]   // x = "age"; person[x]
```

```css
The expression must evaluate to a property name.
```

### Example 1
```js
person.firstname + " is " + person.age + " years old.";
```

### Example 2
```js
person["firstname"] + " is " + person["age"] + " years old.";
```


## JavaScript for...in Loop
The JavaScript `for...in` statement loops through the properties of an object.

### Syntax
```js
for (let variable in object) {
  // code to be executed
}
```

The block of code inside of the `for...in` loop will be executed once for each property.

Looping through the properties of an object:

### Example
```js
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x];
}
```


## Adding New Properties
You can add new properties to an existing object by simply giving it a value.

Assume that the person object already exists - you can then give it new properties:

### Example
```js
person.nationality = "English";
```


## Deleting Properties
The `delete` keyword deletes a property from an object:

### Example
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
```

or delete person["age"];

### Example
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
```


The `delete` keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.

The `delete` operator is designed to be used on object properties. It has no effect on variables or functions.

The `delete` operator should not be used on predefined JavaScript object properties. It can crash your application.



## Nested Objects
Values in an object can be another object:

### Example
```js
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
```

You can access nested objects using the dot notation or the bracket notation:

### Example
```js
myObj.cars.car2;
```

or:

### Example
```js
myObj.cars["car2"];
```

or:

### Example
```js
myObj["cars"]["car2"];
```

or:

### Example
```js
let p1 = "cars";
let p2 = "car2";
myObj[p1][p2];
```


## Nested Arrays and Objects
Values in objects can be arrays, and values in arrays can be objects:

### Example
```js
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
```


To access arrays inside arrays, use a for-in loop for each array:

### Example
```js
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
```



## Property Attributes
All properties have a name. In addition they also have a value.

The value is one of the property's attributes.

Other attributes are: enumerable, configurable, and writable.

These attributes define how the property can be accessed (is it readable?, is it writable?)

In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).

( ECMAScript 5 has methods for both getting and setting all property attributes)


## Prototype Properties
JavaScript objects inherit the properties of their prototype.

The `delete` keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.