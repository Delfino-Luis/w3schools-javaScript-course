# JavaScript Window Navigator
The `window.navigator` object contains information about the visitor's browser.

## Window Navigator
The `window.navigator` object can be written without the window prefix.

Some examples:

* `navigator.cookieEnabled`
* `navigator.appCodeName`
* `navigator.platform`


## Browser Cookies
The `cookieEnabled` property returns true if cookies are enabled, otherwise false:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>
```


## Browser Application Name
The `appName` property returns the application name of the browser:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
</script>
```

## Warning
This property is removed (deprecated) in the latest web standard.

Most browsers (IE11, Chrome, Firefox, Safari) returns **Netscape** as appName.



## Browser Application Code Name
The `appCodeName` property returns the application code name of the browser:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
</script>
```


## Warning
This property is removed (deprecated) in the latest web standard.

Most browsers (IE11, Chrome, Firefox, Safari, Opera) returns **Mozilla** as appCodeName.


## The Browser Engine
The `product` property returns the product name of the browser engine:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
</script>
```


## Warning
This property is removed (deprecated) in the latest web standard.

Most browsers returns **Gecko** as product.


## The Browser Version
The `appVersion` property returns version information about the browser:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.appVersion;
</script>
```


## The Browser Agent
The `userAgent` property returns the user-agent header sent by the browser to the server:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.userAgent;
</script>
```


## Warning !!!
The information from the navigator object can often be misleading, and should not be used to detect browser versions because:

* Different browsers can use the same name
* The navigator data can be changed by the browser owner
* Some browsers misidentify themselves to bypass site tests
* Browsers cannot report new operating systems, released later than the browser


## The Browser Platform
The `platform` property returns the browser platform (operating system):

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.platform;
</script>
```


## The Browser Language
The `language` property returns the browser's language:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.language;
</script>
```


## Is The Browser Online?
The `onLine` property returns true if the browser is online:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.onLine;
</script>
```


## Is Java Enabled?
The `javaEnabled()` method returns true if Java is enabled:

### Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>
```