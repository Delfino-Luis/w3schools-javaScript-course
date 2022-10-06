# JavaScript Date Objects

### Example
```js
const d = new Date();
```


## JavaScript Date Output
By default, JavaScript will use the browser's time zone and display a date as a full text string:

**Fri Oct 07 2022 01:40:03 GMT+0200 (Hora da África do Sul)**

```css
You will learn much more about how to display dates, later in this tutorial.
```



## Creating Date Objects
Date objects are created with the `new Date()` constructor.

There are **4 ways** to create a new date object:
```js
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```


## new Date()
`new Date()` creates a new date object with the **current date and time:**

### Example
```js
const d = new Date();
```

```css
Date objects are static. The computer time is ticking, but date objects are not.
```



## new Date(year, month, ...)
`new Date(year, month, ...)` creates a new date object with a **specified date and time.**

7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

### Example
```js
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
```

**Note:** JavaScript counts months from **0** to **11**:

**January** = **0.**

**December** = **11.**

Specifying a month higher than 11, will not result in an error but add the overflow to the next year:



Specifying:
```js
const d = new Date(2018, 15, 24, 10, 33, 30);
```

Is the same as:

```js
const d = new Date(2019, 3, 24, 10, 33, 30);
```


Specifying a day higher than max, will not result in an error but add the overflow to the next month:

Specifying:
```js
const d = new Date(2018, 5, 35, 10, 33, 30);
```

Is the same as:
```js
const d = new Date(2018, 6, 5, 10, 33, 30);
```



## Using 6, 4, 3, or 2 Numbers
6 numbers specify year, month, day, hour, minute, second:

### Example
```js
const d = new Date(2018, 11, 24, 10, 33, 30);
```

5 numbers specify year, month, day, hour, and minute:

### Example
```js
const d = new Date(2018, 11, 24, 10, 33);
```

4 numbers specify year, month, day, and hour:

### Example
```js
const d = new Date(2018, 11, 24, 10);
```

3 numbers specify year, month, and day:

### Example
```js
const d = new Date(2018, 11, 24);
```

2 numbers specify year and month:


### Example
```js
const d = new Date(2018, 11);
```

```css
You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
```

### Example
```js
const d = new Date(2018);
```



## Previous Century
One and two digit years will be interpreted as 19xx:

### Example
```js
const d = new Date(99, 11, 24);
```

### Example
```js
const d = new Date(9, 11, 24);
```



## new Date(dateString)
`new Date(dateString)` creates a new date object from a **date string:**

### Example
```js
const d = new Date("October 13, 2014 11:13:00");
```

```css
Date strings are described in the next chapter.
```



## JavaScript Stores Dates as Milliseconds
JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
```css
Zero time is January 01, 1970 00:00:00 UTC.
```

Now the time is: **1665099603677** milliseconds past January 01, 1970




## new Date(milliseconds)
`new Date(milliseconds)` creates a new date object as **zero time plus milliseconds:**

### Example
```js
const d = new Date(0);
```

01 January 1970 **plus** 100 000 000 000 milliseconds is approximately 03 March 1973:

### Example
```js
const d = new Date(100000000000);
```
January 01 1970 **minus** 100 000 000 000 milliseconds is approximately October 31 1966:

### Example
```js
const d = new Date(-100000000000);
```

### Example
```js
const d = new Date(86400000);
```

```css
One day (24 hours) is 86 400 000 milliseconds.
```




## Date Methods
When a Date object is created, a number of **methods** allow you to operate on it.

Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

```css
Date methods and time zones are covered in the next chapters.
```


## Displaying Dates
JavaScript will (by default) output dates in full text string format:

### Example
```js
Fri Oct 07 2022 01:40:03 GMT+0200 (Hora da África do Sul)
``` 
When you display a date object in HTML, it is automatically converted to a string, with the `toString()` method.

### Example
```js
const d = new Date();
d.toString();
```

The `toUTCString()` method converts a date to a UTC string (a date display standard).

### Example
```js
const d = new Date();
d.toUTCString();
```

The `toDateString()` method converts a date to a more readable format:

### Example
```js
const d = new Date();
d.toDateString();
```

The `toISOString()` method converts a Date object to a string, using the ISO standard format:

### Example
```js
const d = new Date();
d.toISOString();
```




## Complete JavaScript Date Reference
For a complete Date reference, go to our:

[Complete JavaScript Date Reference](https://www.w3schools.com/jsref/jsref_obj_date.asp).

The reference contains descriptions and examples of all Date properties and methods.