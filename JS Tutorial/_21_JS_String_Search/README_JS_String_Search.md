# JavaScript String Search


## JavaScript Search Methods
* String indexOf()
* String lastIndexOf()
* String startsWith()
* String endsWith()


## JavaScript String indexOf()
The `indexOf()` method returns the index of (the position of) the `first` occurrence of a specified text in a string:

### Example
```javascript
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");
```


## Note
JavaScript counts positions from zero.

0 is the first position in a string, 1 is the second, 2 is the third, ...


## JavaScript String lastIndexOf()
The `lastIndexOf()` method returns the index of the `last` occurrence of a specified text in a string:

### Example
```javascript
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");
```

Both `indexOf()`, and `lastIndexOf()` return -1 if the text is not found:

### Example
```javascript
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("John");
```
Both methods accept a second parameter as the starting position for the search:

### Example
```javascript
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate", 15);
```

The `lastIndexOf()` methods searches backwards (from the end to the beginning), meaning: if the second parameter is `15`, the search starts at position 15, and searches to the beginning of the string.

### Example
```javascript
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate", 15);
```



## JavaScript String search()
The `search()` method searches a string for a specified value and returns the position of the match:

### Example
```javascript
let str = "Please locate where 'locate' occurs!";
str.search("locate");
```


## Did You Notice?
The two methods, `indexOf()` and `search()`, are **equal?**

They accept the same arguments (parameters), and return the same value?

The two methods are **NOT** equal. These are the differences:

The `search()` method cannot take a second start position argument.
The `indexOf()` method cannot take powerful search values (regular expressions).

You will learn more about regular expressions in a later chapter.



## JavaScript String match()
The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

### Example 1
Search a string for "ain":
```javascript
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);
```

Read more about regular expressions in the chapter [JS RegExp](https://www.w3schools.com/js/js_regexp.asp).


## Note
If a regular expression does not include the g modifier (to perform a *global* search), the match() method will return only the first match in the string.



## Syntax
```javascript
string.match(regexp)
```
| regexp | Required. The value to search for, as a regular expression. |
|------|------------|
| Returns: | An Array, containing the matches, one item for each match, or null if no match is found |


### Example 2
Perform a global, case-insensitive search for "ain":
```javascript
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);
```



## JavaScript String includes()
The `includes()` method returns true if a string contains a specified value.

### Example
```javascript
let text = "Hello world, welcome to the universe.";
text.includes("world");
```

### Syntax
```javascript
string.includes(searchvalue, start)
```
|searchvalue | Required. The string to search for |
|----------|-------------|
| start	| Optional. Default 0. Position to start the search |
| Returns: | Returns `true` if the string contains the value, otherwise `false` | 
| JS Version: | ES6 (2015) |


Check if a string includes "world", starting the search at position 12:
```javascript
let text = "Hello world, welcome to the universe.";
text.includes("world", 12);
```


## Browser Support
`includes()` is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:
| ![](../../Icons/compatible_chrome.png) | ![](../../Icons/compatible_edge.png) | ![](../../Icons/compatible_firefox.png) | ![](../../Icons/compatible_safari.png) | ![](../../Icons/compatible_opera.png) |
|----|----|----|----|----|
| Chrome | Edge | Firefox | Safari | Opera |
| Yes | Yes | Yes | Yes | Yes |

`includes()` is not supported in Internet Explorer.



## JavaScript String startsWith()
The `startsWith()` method returns `true` if a string begins with a specified value, otherwise `false`:

### Example
```javascript
let text = "Hello world, welcome to the universe.";

text.startsWith("Hello");
```



### Syntax
```javascript
string.startsWith(searchvalue, start)
```


## Parameter Values
| **Parameter**	| **Description** |
|---------------|-----------------|
| searchvalue | Required. The value to search for. |
| start	| Optional. Default 0. The position to start the search. |

### Examples
```javascript
let text = "Hello world, welcome to the universe.";

text.startsWith("world")    // Returns false
```

```javascript
let text = "Hello world, welcome to the universe.";

text.startsWith("world", 5)    // Returns false
```

```javascript
let text = "Hello world, welcome to the universe.";

text.startsWith("world", 6)    // Returns true
```

## Note
The `startsWith()` method is case sensitive.



## Browser Support
`startsWith()` is an ES6 feature (JavaScript 2015).

| ![](../../Icons/compatible_chrome.png) | ![](../../Icons/compatible_edge.png) | ![](../../Icons/compatible_firefox.png) | ![](../../Icons/compatible_safari.png) | ![](../../Icons/compatible_opera.png) |
|----|----|----|----|----|
| Chrome | Edge | Firefox | Safari | Opera |
| Yes | Yes | Yes | Yes | Yes |

`startsWith()` is not supported in Internet Explorer.



## JavaScript String endsWith()
The `endsWith()` method returns `true` if a string ends with a specified value, otherwise `false`:

### Example
Check if a string ends with "Doe":
```javascript
let text = "John Doe";
text.endsWith("Doe");
```


### Syntax
```javascript
string.endsWith(searchvalue, length)
```



## Parameter Values
| **Parameter**	| **Description** |
|---------------|-----------------|
| searchvalue | Required. The value to search for. |
| length | Optional. The length to search. |


Check if the 11 first characters of a string ends with "world":
```javscript
let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);
```

## Note
The `endsWith()` method is case sensitive.



## Browser Support
`endsWith()` is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:
| ![](../../Icons/compatible_chrome.png) | ![](../../Icons/compatible_edge.png) | ![](../../Icons/compatible_firefox.png) | ![](../../Icons/compatible_safari.png) | ![](../../Icons/compatible_opera.png) |
|----|----|----|----|----|
| Chrome | Edge | Firefox | Safari | Opera |
| Yes | Yes | Yes | Yes | Yes |

`endsWith()` is not supported in Internet Explorer.




## Complete String Reference
For a complete String reference, go to our:

[Complete JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp).

The reference contains descriptions and examples of all string properties and methods.