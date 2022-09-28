# JavaScript String Methods

String methods help you to work with strings.



## String Methods and Properties
Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

JavaScript String Length
The `length` property returns the length of a string:

### Example
```javascript
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
```



## Extracting String Parts
There are 3 methods for extracting a part of a string:

* `slice(start, end)`
* `substring(start, end)`
* `substr(start, length)`



## JavaScript String slice()
`slice()` extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

### Example
Slice out a portion of a string from position 7 to position 13 (13 not included):
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
```


## Note
JavaScript counts positions from zero.

First position is 0.

Second position is 1.

If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6:

### Example
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
```

If you omit the second parameter, the method will slice out the rest of the string:

### Example
```javascript
let part = str.slice(7);
```

or, counting from the end:

### Example
```javascript
let part = str.slice(-12);
```



## JavaScript String substring()
`substring()` is similar to `slice()`.

The difference is that start and end values less than 0 are treated as 0 in `substring()`.

### Example
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
```

If you omit the second parameter, `substring()` will slice out the rest of the string.



## JavaScript String substr()
`substr()` is similar to `slice()`.

The difference is that the second parameter specifies the **length** of the extracted part.

### Example
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
```

If you omit the second parameter, `substr()` will slice out the rest of the string.

### Example
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
```

If the first parameter is negative, the position counts from the end of the string.

### Example
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
```

## Replacing String Content
The `replace()` method replaces a specified value with another value in a string:

### Example
```javascript
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```

## Note
The `replace()` method does not change the string it is called on.

The `replace()` method returns a new string.

The `replace()` method replaces **only the first** match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

By default, the `replace()` method replaces **only the first** match:

### Example
```javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```


By default, the `replace()` method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

### Example
```javascript
let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");
```


To replace case insensitive, use a **regular expression** with an `/i` flag (insensitive):

### Example
```javascript
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
```

## Note
Regular expressions are written without quotes.

To replace all matches, use a **regular expression** with a `/g` flag (global match):

### Example
```javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
```


## Note
You will learn a lot more about regular expressions in the chapter [JavaScript Regular Expressions](https://www.w3schools.com/js/js_regexp.asp).



## Converting to Upper and Lower Case
A string is converted to upper case with `toUpperCase()`:

A string is converted to lower case with `toLowerCase()`:



## JavaScript String toUpperCase()

### Example
```javascript
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
```



## JavaScript String toLowerCase()

```javascript
Example
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
```



## JavaScript String concat()
`concat()` joins two or more strings:

### Example
```javascript
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
```

The `concat()` method can be used instead of the plus operator. These two lines do the same:

### Example
```javascript
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
```

## Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.



## JavaScript String trim()
The `trim()` method removes whitespace from both sides of a string:

### Example
```javascript
let text1 = "      Hello World!      ";
let text2 = text1.trim();
```


## JavaScript String trimStart()
ECMAScript 2019 added the String method `trimStart()` to JavaScript.

The `trimStart()` method works like `trim()`, but removes whitespace only from the start of a string.

### Example
```javascript
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
```

JavaScript String `trimStart()` is supported in all browsers since January 2020:
![](./img_01.png)



## JavaScript String Padding
ECMAScript 2017 added two String methods: `padStart()` and `padEnd()` to support padding at the beginning and at the end of a string.



## JavaScript String padStart()
The `padStart()` method pads a string with another string:

### Example
```javascript
let text = "5";
let padded = text.padStart(4,"x");
```

### Example
```javascript
let text = "5";
let padded = text.padStart(4,"0");
```

## Note
The `padStart()` method is a string method.

To pad a number, convert the number to a string first.

See the example below.

### Example
```javascript
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
```



## Browser Support
`padStart()` is an ECMAScript 2017 feature.
It is supported in all modern browsers:
![](./img_02.png)

`padStart()` is not supported in Internet Explorer.



## JavaScript String padEnd()
The `padEnd()` method pads a string with another string:

### Example
```javascript
let text = "5";
let padded = text.padEnd(4,"x");
```

### Example
```javascript
let text = "5";
let padded = text.padEnd(4,"0");
```

## Note
The `padEnd()` method is a string method.

To pad a number, convert the number to a string first.

See the example below.

### Example
```javascript
let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");
```



## Browser Support
`padEnd()` is an ECMAScript 2017 feature.
It is supported in all modern browsers:
![](./img_02.png)

`padEnd()` is not supported in Internet Explorer.



## Extracting String Characters
There are 3 methods for extracting string characters:

* `charAt(position)`
* `charCodeAt(position)`
* Property access [ ]



## JavaScript String charAt()
The `charAt()` method returns the character at a specified index (position) in a string:

### Example
```javascript
let text = "HELLO WORLD";
let char = text.charAt(0);
```



## JavaScript String charCodeAt()
The `charCodeAt()` method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

### Example
```javascript
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
```



## Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:

### Example
```javascript
let text = "HELLO WORLD";
let char = text[0];
```

## Note
Property access might be a little **unpredictable:**

* It makes strings look like arrays (but they are not)
* If no character is found, [ ] returns undefined, while charAt() returns an empty string.
* It is read only. str[0] = "A" gives no error (but does not work!)

### Example
```javascript
let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work
```



## Converting a String to an Array
If you want to work with a string as an array, you can convert it to an array.



## JavaScript String split()
A string can be converted to an array with the `split()` method:

### Example
```javascript
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
```

If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:

### Example
```javascript
text.split("")
```



## Complete String Reference
For a complete String reference, go to our:

[Complete JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp).

The reference contains descriptions and examples of all string properties and methods.
