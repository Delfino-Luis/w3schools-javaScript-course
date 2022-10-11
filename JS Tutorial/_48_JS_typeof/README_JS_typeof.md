# JavaScript typeof


In JavaScript there are 5 different data types that can contain values:

* `string`
* `number`
* `boolean`
* `object`
* `function`

There are 6 types of objects:

* `Object`
* `Date`
* `Array`
* `String`
* `Number`
* `Boolean`


And 2 data types that cannot contain values:

* `null`
* `undefined`



## The typeof Operator
You can use the `typeof` operator to find the data type of a JavaScript variable.

### Example
```js
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```


Please observe:

* The data type of NaN is number
* The data type of an array is object
* The data type of a date is object
* The data type of null is object
* The data type of an undefined variable is **undefined** *
* The data type of a variable that has not been assigned a value is also **undefined** *

You cannot use `typeof` to determine if a JavaScript object is an array (or a date).



## Primitive Data
A primitive data value is a single simple data value with no additional properties and methods.

The `typeof` operator can return one of these primitive types:

* `string`
* `number`
* `boolean`
* `undefined`


### Example
```js
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
```


## Complex Data
The `typeof` operator can return one of two complex types:

* `function`
* `object`
The `typeof` operator returns "object" for objects, arrays, and null.

The `typeof` operator does not return "object" for functions.

### Example
```js
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"
```


The `typeof` operator returns "`object`" for arrays because in JavaScript arrays are objects.



## The Data Type of typeof
The `typeof` operator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.

But, the `typeof` operator always **returns a string** (containing the type of the operand).



## The constructor Property
The `constructor` property returns the constructor function for all JavaScript variables.

### Example
```js
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}
```

You can check the constructor property to find out if an object is an `Array` (contains the word "Array"):

### Example
```js
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
```

Or even simpler, you can check if the object is an **Array function:**

### Example
```js
function isArray(myArray) {
  return myArray.constructor === Array;
}
```

You can check the constructor property to find out if an object is a `Date` (contains the word "Date"):

### Example
```js
function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}
```

Or even simpler, you can check if the object is a Date function:

### Example
```js
function isDate(myDate) {
  return myDate.constructor === Date;
}
```


## Undefined
In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`.

### Example
```js
let car;    // Value is undefined, type is undefined
```

Any variable can be emptied, by setting the value to `undefined`. The type will also be `undefined`.

### Example
```js
car = undefined;    // Value is undefined, type is undefined
```


## Empty Values
An empty value has nothing to do with `undefined`.

An empty string has both a legal value and a type.

### Example
```js
let car = "";    // The value is "", the typeof is "string"
```



## Null
In JavaScript `null` is "nothing". It is supposed to be something that doesn't exist.

Unfortunately, in JavaScript, the data type of `null` is an object.

You can consider it a bug in JavaScript that `typeof null` is an object. It should be `null`.

You can empty an object by setting it to `null`:

### Example
```js
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object
```

You can also empty an object by setting it to `undefined`:

### Example
```js
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined
```



## Difference Between Undefined and Null
`undefined` and `null` are equal in value but different in type:
```js
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
```



## The instanceof Operator
The `instanceof` operator returns `true` if an object is an instance of the specified object:

### Example
```js
const cars = ["Saab", "Volvo", "BMW"];

(cars instanceof Array);
(cars instanceof Object);
(cars instanceof String);
(cars instanceof Number);
```



## The void Operator
The **void** operator evaluates an expression and returns **undefined**. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).

### Example
```html
<a href="javascript:void(0);#">
  Useless link
</a>

<a href="javascript:void(document.body.style.backgroundColor='red');">
  Click me to change the background color of body to red
</a>
```
