# JavaScript Arrow Function

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:
```js
let myFunction = (a, b) => a * b;
```

### Before Arrow:
```js
hello = function() {
  return "Hello World!";
}
```

With Arrow Function:
```js
hello = () => {
  return "Hello World!";
}
```

It gets shorter! If the function has only one statement, and the statement `returns` a value, you can remove the brackets and the return keyword:

### Arrow Functions Return Value by Default:
```js
hello = () => "Hello World!";
```

**Note:** This works only if the function has only one statement.

If you have parameters, you pass them inside the parentheses:

Arrow Function With Parameters:
hello = (val) => "Hello " + val;

In fact, if you have only one parameter, you can skip the parentheses as well:

### Arrow Function Without Parentheses:
```js
hello = val => "Hello " + val;
```

## What About **this**?
The handling of `this` is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of `this`.

In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the `this` keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.

### Example
With a regular function `this` represents the object that calls the function:
```js
// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
```

### Example
With an arrow function `this` represents the owner of the function:
```js
// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
```


Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.


## Browser Support
The following table defines the first browser versions with full support for Arrow Functions in JavaScript:
| ![](../../Icons/compatible_chrome.png) | ![](../../Icons/compatible_edge.png) | ![](../../Icons/compatible_firefox.png) | ![](../../Icons/compatible_safari.png) | ![](../../Icons/compatible_opera.png) |
|------|-------|--------|----------|---------|
| Chrome 45	| Edge 12 | Firefox 22 | Safari 10	| Opera 32 |
| Sep, 2015	| Jul, 2015	| May, 2013	| Sep, 2016	| Sep, 2015 |