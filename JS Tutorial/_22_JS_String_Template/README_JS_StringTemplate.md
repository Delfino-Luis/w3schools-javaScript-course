# JavaScript Template Literals


Synonyms:

* Template Literals
* Template Strings
* String Templates
* Back-Tics Syntax


## Back-Tics Syntax
**Template Literals** use back-ticks (``) rather than the quotes ("") to define a string:

### Example
```javascript
let text = `Hello World!`;
```


## Quotes Inside Strings
With **template literals**, you can use both single and double quotes inside a string:


### Example
```javascript
let text = `He's often called "Johnny"`;
```


## Multiline Strings
**Template literals** allows multiline strings:

### Example
```javascript
let text =
`The quick
brown fox
jumps over
the lazy dog`;
```


## Interpolation
**Template literals** provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:
```javascript
${...}
```



## Variable Substitutions
**Template literals** allow variables in strings:
```javascript
Example
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
```

Automatic replacing of variables with real values is called **string interpolation**.


## Expression Substitution
Template literals allow expressions in strings:

### Example
```javascript
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

```css
Automatic replacing of expressions with real values is called **string interpolation**.
```


## HTML Templates
### Example
```javascript
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
```



## Browser Support
`Template Literals` is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:
| ![](../../Icons/chrome.png) | ![](../../Icons/edge_browser_logo_icon_152998.png) | ![](../../Icons/firefox-logo.png) | ![](../../Icons/Wineass-Ios7-Redesign-Safari.ico) | ![](../../Icons/opera-icon-29.png) |
|--|--|--|--|--|
| Chrome | Edge | Firefox | Safari | Opera |
| Yes | Yes | Yes | Yes | Yes |

`Template Literals` is not supported in Internet Explorer.



## Complete String Reference
For a complete String reference, go to our:

[Complete JavaScript String Reference.](https://www.w3schools.com/jsref/jsref_obj_string.asp)

The reference contains descriptions and examples of all string properties and methods.

