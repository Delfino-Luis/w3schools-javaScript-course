# JavaScript Booleans


A JavaScript Boolean represents one of two values: **true** or **false**.


## Boolean Values
Very often, in programming, you will need a data type that can only have one of two values, like

* YES / NO
* ON / OFF
* TRUE / FALSE


For this, JavaScript has a **Boolean** data type. It can only take the values **true** or **false**.



## The Boolean() Function
You can use the `Boolean()` function to find out if an expression (or a variable) is true:

### Example
```js
Boolean(10 > 9)
```

Or even easier:

### Example
```js
(10 > 9)
10 > 9
```



## Comparisons and Conditions
The chapter JS Comparisons gives a full overview of comparison operators.

The chapter JS Conditions gives a full overview of conditional statements.

Here are some examples:

| **Operator**	| **Description**	| **Example** |
|---------------|-------------------|-------------|
| ==	| equal to	| if (day == "Monday") |
| >	| greater than	| if (salary > 9000) |
| <	| less than	| if (age < 18) |


```css
The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.
```



## Everything With a "Value" is True
### Examples
```js
100

3.14

-15

"Hello"

"false"

7 + 1 + 3.14
```



## Everything Without a "Value" is False
The Boolean value of **0** (zero) is **false**:
```js
let x = 0;
Boolean(x);
```


The Boolean value of **-0** (minus zero) is **false**:
```js
let x = -0;
Boolean(x);
```

The Boolean value of **""** (empty string) is **false**:
```js
let x = "";
Boolean(x);
```


The Boolean value of **undefined** is **false**:
```js
let x;
Boolean(x);
```


The Boolean value of **null** is **false**:
```js
let x = null;
Boolean(x);
```



The Boolean value of **false** is (you guessed it) **false**:
```js
let x = false;
Boolean(x);
```



The Boolean value of **NaN** is **false**:
```js
let x = 10 / "Hallo";
Boolean(x);
```



## JavaScript Booleans as Objects
Normally JavaScript booleans are primitive values created from literals:
```js
let x = false;
```


But booleans can also be defined as objects with the keyword new:

```js
let y = new Boolean(false);
```


### Example
```js
let x = false;
let y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object
```


Do not create Boolean objects.

The `new` keyword complicates the code and slows down execution speed.

Boolean objects can produce unexpected results:



When using the `==` operator, x and y are **equal:**
```js
let x = false;
let y = new Boolean(false);
```


When using the `===` operator, x and y are **not equal:**
```js
let x = false;
let y = new Boolean(false);
```

```css
Note the difference between (x==y) and (x===y).
```


`(x == y)` true or false?
```js
let x = new Boolean(false);
let y = new Boolean(false);
```


`(x === y)` true or false?
```js
let x = new Boolean(false);
let y = new Boolean(false);
```



Comparing two JavaScript objects **always** return **false.**



## Complete Boolean Reference
For a complete reference, go to our [Complete JavaScript Boolean Reference](https://www.w3schools.com/jsref/jsref_obj_boolean.asp).

The reference contains descriptions and examples of all Boolean properties and methods.