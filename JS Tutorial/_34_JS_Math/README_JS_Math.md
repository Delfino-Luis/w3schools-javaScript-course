# JavaScript Math Object

```css
The JavaScript Math object allows you to perform mathematical tasks on numbers.
```


### Example
```js
Math.PI;
```


## The Math Object
Unlike other objects, the Math object has no constructor.

The Math object is static.

All methods and properties can be used without creating a Math object first.

## Math Properties (Constants)
The syntax for any Math property is : `Math.property`.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:

### Example
```js
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
```


 
## Math Methods
The syntax for Math any methods is : `Math.method(number)`


## Number to Integer
There are 4 common methods to round a number to an integer:

| Math.round(x)	| Returns x rounded to its nearest integer |
|---------------|------------------------------------------|
| Math.ceil(x)	| Returns x rounded up to its nearest integer |
| Math.floor(x)	| Returns x rounded down to its nearest integer |
| Math.trunc(x)	| Returns the integer part of x (new in ES6) |



## Math.round()
`Math.round(x)` returns the nearest integer:

### Examples
```js
Math.round(4.6);
```
```js
Math.round(4.5);
```
```js
Math.round(4.4);
```



## Math.ceil()
`Math.ceil(x)` returns the value of x rounded **up** to its nearest integer:

### Example
```js
Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);
```



## Math.floor()
`Math.floor(x)` returns the value of x rounded **down** to its nearest integer:

### Example
```js
Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);
```



## Math.trunc()
`Math.trunc(x)` returns the integer part of x:

### Example
```js
Math.trunc(4.9);
Math.trunc(4.7);
Math.trunc(4.4);
Math.trunc(4.2);
Math.trunc(-4.2);
```



## Math.sign()
`Math.sign(x)` returns if x is negative, null or positive:

### Example
```js
Math.sign(-4);
Math.sign(0);
Math.sign(4);
```


Math.trunc() and Math.sign() were added to [JavaScript 2015 - ES6](https://www.w3schools.com/js/js_es6.asp).



## Math.pow()
`Math.pow(x, y)` returns the value of x to the power of y:

### Example
```js
Math.pow(8, 2);
```



## Math.sqrt()
`Math.sqrt(x)` returns the square root of x:

### Example
```js
Math.sqrt(64);
```



## Math.abs()
`Math.abs(x)` returns the absolute (positive) value of x:

### Example
```js
Math.abs(-4.7);
```



## Math.sin()
`Math.sin(x)` returns the sine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.

### Example
```js
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
```



## Math.cos()
`Math.cos(x)` returns the cosine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.

### Example
```js
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
```



## Math.min() and Math.max()
`Math.min()` and `Math.max()` can be used to find the lowest or highest value in a list of arguments:

### Example
```js
Math.min(0, 150, 30, 20, -8, -200);
```

### Example
```js
Math.max(0, 150, 30, 20, -8, -200);
```



## Math.random()
`Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive):

### Example
```js
Math.random();
```

You will learn more about `Math.random()` in the next chapter of this tutorial.



## The Math.log() Method
`Math.log(x)` returns the natural logarithm of x.

The natural logarithm returns the time needed to reach a certain level of growth:

### Examples
```js
Math.log(1);
```
```js
Math.log(2);
```
```js
Math.log(3);
```

Math.E and Math.log() are twins.

How many times must we multiply Math.E to get 10?
```js
Math.log(10);
```


## The Math.log2() Method
`Math.log2(x)` returns the base 2 logarithm of x.

How many times must we multiply 2 to get 8?
```js
Math.log2(8);
```


## The Math.log10() Method
`Math.log10(x)` returns the base 10 logarithm of x.

How many times must we multiply 10 to get 1000?
```js
Math.log10(1000);
```


## JavaScript Math Methods
| **Method**	| **Description** |
|---------------|-----------------|
| [abs(x)](https://www.w3schools.com/jsref/jsref_abs.asp)	| Returns the absolute value of x |
| [acos(x)](https://www.w3schools.com/jsref/jsref_acos.asp)	| Returns the arccosine of x, in radians |
| [acosh(x)](https://www.w3schools.com/jsref/jsref_acosh.asp)	| Returns the hyperbolic arccosine of x |
| [asin(x)](https://www.w3schools.com/jsref/jsref_asin.asp)	| Returns the arcsine of x, in radians |
| [asinh(x)](https://www.w3schools.com/jsref/jsref_asinh.asp)	| Returns the hyperbolic arcsine of x |
| [atan(x)](https://www.w3schools.com/jsref/jsref_atan.asp)	| Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians |
| [atan2(y, x)](https://www.w3schools.com/jsref/jsref_atan2.asp)	| Returns the arctangent of the quotient of its arguments |
| [atanh(x)](https://www.w3schools.com/jsref/jsref_atanh.asp)	| Returns the hyperbolic arctangent of x | 
| [cbrt(x)](https://www.w3schools.com/jsref/jsref_cbrt.asp)	| Returns the cubic root of x |
| [ceil(x)](https://www.w3schools.com/jsref/jsref_ceil.asp)	| Returns x, rounded upwards to the nearest integer |
| [cos(x)](https://www.w3schools.com/jsref/jsref_cos.asp)	| Returns the cosine of x (x is in radians) |
| [cosh(x)](https://www.w3schools.com/jsref/jsref_cosh.asp)	| Returns the hyperbolic cosine of x |
| [exp(x)](https://www.w3schools.com/jsref/jsref_exp.asp)	| Returns the value of Ex |
| [floor(x)](https://www.w3schools.com/jsref/jsref_floor.asp)	| Returns x, rounded downwards to the nearest integer |
| [log(x)](https://www.w3schools.com/jsref/jsref_log.asp)	| Returns the natural logarithm (base E) of x |
| [max(x, y, z, ..., n)](https://www.w3schools.com/jsref/jsref_max.asp)	| Returns the number with the highest value |
| [min(x, y, z, ..., n)](https://www.w3schools.com/jsref/jsref_min.asp)	| Returns the number with the lowest value |
| [pow(x, y)](https://www.w3schools.com/jsref/jsref_pow.asp)	| Returns the value of x to the power of y |
| [random()](https://www.w3schools.com/jsref/jsref_random.asp)	| Returns a random number between 0 and 1 |
| [round(x)](https://www.w3schools.com/jsref/jsref_round.asp)	| Rounds x to the nearest integer |
| [sign(x)](https://www.w3schools.com/jsref/jsref_sign.asp)	| Returns if x is negative, null or positive (-1, 0, 1) |
| [sin(x)](https://www.w3schools.com/jsref/jsref_sin.asp)	| Returns the sine of x (x is in radians) |
| [sinh(x)](https://www.w3schools.com/jsref/jsref_sinh.asp)	| Returns the hyperbolic sine of x |
| [sqrt(x)](https://www.w3schools.com/jsref/jsref_sqrt.asp)	| Returns the square root of x |
| [tan(x)](https://www.w3schools.com/jsref/jsref_tan.asp)	| Returns the tangent of an angle |
| [tanh(x)](https://www.w3schools.com/jsref/jsref_tanh.asp)	| Returns the hyperbolic tangent of a number |
| [trunc(x)](https://www.w3schools.com/jsref/jsref_trunc.asp)	| Returns the integer part of a number (x) |




## Complete Math Reference
For a complete reference, go to our [Complete Math Object Reference](https://www.w3schools.com/jsref/jsref_obj_math.asp).

The reference contains descriptions and examples of all Math properties and methods.