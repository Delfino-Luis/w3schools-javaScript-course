# ECMAScript 2021

```css
Original JavaScript version numbers were ES5 (2009) and ES6 (2015).

Since 2016 versions are named by year.
```


## New Features in ES2021
* Promise any():
`const first = await Promise.any([prom1,prom2,prom3]);`
* [String replaceAll()](#)
* [* Numeric Separators (_)](#)



## Warning
These features are relatively new. Old browser may need an alternative code (Polifill)



### JavaScript String ReplaceAll()
ES2021 intoduced the string method `replaceAll()`:

### Example
```js
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
```

The `replaceAll()` method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

### Example
```js
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
```


### Note
[ES2020](https://www.w3schools.com/js/js_2020.asp) introduced the string method matchAll().



## JavaScript Numeric Separator (_)
ES2021 intoduced the numeric separator (_) to make numbers more readable:

### Example
```js
const num = 1_000_000_000;
```

The numeric separator is only for visual use.

### Example
```js
const num1 = 1_000_000_000;
const num2 = 1000000000;
(num1 === num2);
```

The numeric separator can be placed anywhere in a number:

### Example
```js
const num1 = 1_2_3_4_5;
```

### Note
The numeric separator is not allowed at the beginning or at the end of a number.

In JavaScript only variables can start with _.

The numeric separator is supported in all browsers since January 2020:

| ![](../../Icons/compatible_chrome.png) | ![](../../Icons/compatible_edge.png) | ![](../../Icons/compatible_firefox.png) | ![](../../Icons/compatible_safari.png) | ![](../../Icons/compatible_opera.png) |
|-----|----|-----|----|-----|
| Chrome 75	| Edge 79	| Firefox 74	| Safari 13.1 |	Opera 67 |
| Jun 2019	| Jan 2020	| Oct 2019	| Sep 2019	| Jun 2019 |
