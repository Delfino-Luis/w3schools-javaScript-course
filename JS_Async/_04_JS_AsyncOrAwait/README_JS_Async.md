# JavaScript Async

### *"async and await make promises easier to write"*

**async** makes a function return a Promise

**await** makes a function wait for a Promise


## Async Syntax
The keyword `async` before a function makes the function return a promise:

### Example
```js
async function myFunction() {
  return "Hello";
}
```

Is the same as:
```js
function myFunction() {
  return Promise.resolve("Hello");
}
```

Here is how to use the Promise:
```js
myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

### Example
```js
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

Or simpler, since you expect a normal value (a normal response, not an error):

### Example
```js
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);}
);
```


## Await Syntax
The `await` keyword can only be used inside an `async` function.

The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues:
```js
let value = await promise;
```


### Example
Let's go slowly and learn how to use it.

### Basic Syntax
```js
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

```html
The two arguments (resolve and reject) are pre-defined by JavaScript.

We will not create them, but call one of them when the executor function is ready.

Very often we will not need a reject function.
```


### Example without reject
```js
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```


### Waiting for a Timeout
```js
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```


### Waiting for a File
```js
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();
```


Browser Support
ECMAScript 2017 introduced the JavaScript keywords `async` and `await`.

The following table defines the first browser version with full support for both:
| ![](../../Icons/compatible_chrome.png) | ![](../../Icons/compatible_edge.png) | ![](../../Icons/compatible_firefox.png) | ![](../../Icons/compatible_safari.png) | ![](../../Icons/compatible_opera.png) |
|---|---|---|---|---|
| Chrome 55	| Edge 15	| Firefox 52	| Safari 11	| Opera 42 |
| Dec, 2016	| Apr, 2017	| Mar, 2017	| Sep, 2017	| Dec, 2016 |