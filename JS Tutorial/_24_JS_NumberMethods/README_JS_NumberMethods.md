# JavaScript Number Methods

Number methods help you work with numbers.

## Number Methods and Properties
Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

## The toString() Method
The `toString()` method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

### Example
```js
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
```


## The toExponential() Method
`toExponential()` returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:

### Example
```js
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);
```

The parameter is optional. If you don't specify it, JavaScript will not round the number.

## The toFixed() Method
`toFixed()` returns a string, with the number written with a specified number of decimals:

### Example
```js
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);
```

`toFixed(2)` is perfect for working with money


## The toPrecision() Method
`toPrecision()` returns a string, with a number written with a specified length:

### Example
```js
let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);
```


## The valueOf() Method
`valueOf()` returns a number as a number.

### Example
```js
let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();
```

In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The `valueOf()` method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a `valueOf()` and a `toString()` method.



## Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert variables to numbers:

* The `Number()` method
* The `parseInt()` method
* The `parseFloat()` method

These methods are not **number** methods, but **global** JavaScript methods.


## Global JavaScript Methods
JavaScript global methods can be used on all JavaScript data types.

These are the most relevant methods, when working with numbers:
| **Method** | **Description** |
|------------|-----------------|
| Number() | Returns a number, converted from its argument. |
| parseFloat() | Parses its argument and returns a floating point number |
| parseInt() | Parses its argument and returns an integer |



## The Number() Method
`Number()` can be used to convert JavaScript variables to numbers:

### Example
```js
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");
```

If the number cannot be converted, `NaN` (Not a Number) is returned.



## The Number() Method Used on Dates
`Number()` can also convert a date to a number.

### Example
```js
Number(new Date("1970-01-01"))
```

The `Number()` method returns the number of milliseconds since 1.1.1970.

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

### Example
```js
Number(new Date("1970-01-02"))
```

### Example
```js
Number(new Date("2017-09-30"))
```



## The parseInt() Method
`parseInt()` parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

### Example
```js
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");
```

If the number cannot be converted, `NaN` (Not a Number) is returned.



## The parseFloat() Method
`parseFloat()` parses a string and returns a number. Spaces are allowed. Only the first number is returned:

### Example
```js
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");
```

If the number cannot be converted, `NaN` (Not a Number) is returned.


## Number Properties
| **Property** | **Description** |
|--------------|-----------------|
| MAX_VALUE	| Returns the largest number possible in JavaScript |
| MIN_VALUE	| Returns the smallest number possible in JavaScript |
| POSITIVE_INFINITY	| Represents infinity (returned on overflow) |
| NEGATIVE_INFINITY	| Represents negative infinity (returned on overflow) |
| NaN | Represents a "Not-a-Number" value |



## JavaScript MIN_VALUE and MAX_VALUE
`MAX_VALUE` returns the largest possible number in JavaScript.

### Example
```js
let x = Number.MAX_VALUE;
```

`MIN_VALUE` returns the lowest possible number in JavaScript.

### Example
```js
let x = Number.MIN_VALUE;
```


## JavaScript POSITIVE_INFINITY
### Example
```js
let x = Number.POSITIVE_INFINITY;
```

`POSITIVE_INFINITY` is returned on overflow:

### Example
```js
let x = 1 / 0;
```


## JavaScript NEGATIVE_INFINITY
### Example
```js
let x = Number.NEGATIVE_INFINITY;
```


`NEGATIVE_INFINITY` is returned on overflow:

### Example
```js
let x = -1 / 0;
```


## JavaScript NaN - Not a Number

### Example
```js
let x = Number.NaN;
```

`NaN` is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in `NaN` (Not a Number):

### Example
```js
let x = 100 / "Apple";
```



## Number Properties Cannot be Used on Variables
Number properties belongs to the JavaScript's number object wrapper called **Number**.

These properties can only be accessed as `Number.MAX_VALUE`.

Using myNumber.MAX_VALUE, where *myNumber* is a variable, expression, or value, will return `undefined`:

### Example
```js
let x = 6;
x.MAX_VALUE
```


## Complete JavaScript Number Reference
For a complete Number reference, visit our:

[Complete JavaScript Number Reference.](https://www.w3schools.com/jsref/jsref_obj_number.asp)

The reference contains descriptions and examples of all Number properties and methods.