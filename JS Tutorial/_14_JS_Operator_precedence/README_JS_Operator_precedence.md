# JavaScript Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression.

Multiplication JavaScript Operator Precedence
Operator precedence describes the order in which operations are performed in an arithmetic expression.

Multiplication (`*`) and division (`/`) have higher precedence than addition (`+`) and subtraction (`-`).

### Example
As in traditional mathematics, multiplication is done first:
```javascript
let x = 100 + 50 * 3;
```

### Example
As in traditional mathematics, the precedence can be changed by parentheses:
```javascript
let x = (100 + 50) * 3;
```

When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction), they are computed from left to right:

### Example
```javascript
let x = 100 + 50 - 3;
```

## JavaScript Operator Precedence Values
## Operator Precedence 
Expressions in parentheses are computed **before** the rest of the expression
Function are executed **before** the result is used in the rest of the expression

| Value	| Operator | Description | Example |
|-------|----------|-------------|---------|
| 18 | ( )	| [Expression Grouping]() | (100 + 50) *3 |
| 17 | . | [Member Of]() | person.name |
| 17 | [] | [Member Of]() | person["name"] |
| 17 | ?. | [Optional Chaining]() [ECMAScript 2020]() | x ?. y |
| 17 | () | [Function Call]() | myFunction() |
| 17 | [new	New with Arguments]() | new Date("October 13, 2022") |
| 16 | new | [New without Arguments]() | new Date() |


## Increment Operators 
Posfix increments are executed **before** prefix increments
| | | | |
|---|---|---------------------|--------|
| 15 | ++ | [Postfix Increment]() | i++ |
| 15 | -- | [Postfix Decrement]() | i-- |
| 14 | ++ | [Prefix Increment]() | ++i |
| 14 | -- | [Prefix Decrement]() | --i |


## Logical Operators
| | | | |
|---|---|-----------------------|--------|
| 14 | ! | [Logical NOT]() | !(x==y) |
| 14 | ~ | [Bitwise NOT]() | ~x |


## Unary Operators
| | | | |
|---|---|-----------------------|--------|
| 14 | + | [Unary Plus]() | +x |
| 14 | - | [Unary Minus]() | -x |
| 14 | typeof |	[Data Type]() | typeof x |
| 14 | void	| [Evaluate Void]()	| void(0) |
| 14 | delete | [Property Delete]()	| delete myCar.color |


## Arithmetic Operators
Exponentiations are executed **before** multiplications
Multiplications and divisions are executed **before** additions and subtractions
| | | | |
|---|---|-----------------------|--------|
| 13 | ** | [Exponentiation](), [ECMAScript 2016]()	| 10 ** 2 |
| 12 | * | [Multiplication]() | 10 * 5 |
| 12 | / | [Division]()	| 10 / 5 |
| 12 | % | [Division Remainder]() | 10 % 5 |
| 11 | + | [Addition]()	| 10 + 5 |
| 11 | - | [Subtraction]() | 10 - 5 |
| 11 | + | [Concatenation]() | "John" + "Doe" |


## Shift Operators
| | | | |
|---|---|-----------------------|--------|
| 10 | << | [Shift Left]()	| x << 2 |
| 10 | >> | [Shift Right (signed)]() | x >> 2 |
| 10 | >>>	| [Shift Right (unsigned)]() | x >>> 2 |


## Relational Operators
| | | | |
|---|---|-----------------------|--------|
| 9	| in | [Property in Object]() | "PI" in Math |
| 9	| instanceof | [Instance of Object]() | x instanceof Array |


## Comparison Operators
| | | | |
|---|---|-----------------------|--------|
| 9	| <	| [Less than]()	| x < y  |
| 9	| <= | [Less than or equal]() | x <= y |
| 9	| >	| [Greater than]() | x > y |
| 9	| >= | [Greater than or equal]() | x >= Array |
| 8	| == | [Equal]() | x == y |
| 8	| === | [Strict equal]() | x === y |
| 8	| != | [Unequal]() | x != y |
| 8	| !== | [Strict unequal]() | x !== y |


## Bitwise Operators
| | | | |
|---|---|-----------------------|--------|
| 7	| &	| [Bitwise AND]() | x & y |
| 6	| ^	| [Bitwise XOR]() | x ^ y |
| 5	| \| | [Bitwise OR]() | x | y |


## Logical Operators
| | | | |
|---|---|-----------------------|--------|
| 4	| && | [Logical AND]() | x && y |
| 3	| \|\| | [Logical OR]()	| x \|\| y |
| 3	| ?? | [Nullish Coalescing](), [ECMAScript 2020]() |	x ?? y |


## Conditional (ternary) Operator
| | | | |
|---|---|-----------------------|--------|
| 2	| ? : | [Condition]() | ? "yes" : "no" |


## Assignment Operators
Assignments are executed **after** other operations
| | | | |
|---|---|-----------------------|--------|
| 2	| =	| [Simple Assignment]()	| x += y |
| 2	| += | [Addition Assignment]() | x += y |
| 2	| -= | [Subtraction Assignment]() | x -= y | 
| 2	| *= | [Multiplication Assignment]() | x *= y |
| 2	| **= | [Exponentiation Assignment]() | x **= y |
| 2	| /= | [Division Assignment]() | x /= y |
| 2	| %= | [Remainder Assignment]()	| x %= y |
| 2	| <<= | [Left Shift Assignment]() | x <<= y |
| 2	| >>= | [Right Shift Assignment]() | x >>= y |
| 2	| >>>= | [Unsigned Right Shift]() | x >>>= y |
| 2	| &= | [Bitwise AND Assignment]() | x &= y | 
| 2	| \|= | [Bitwise OR Assignment]() | x \|= y |
| 2	| ^= | [Bitwise XOR Assignment]() | x ^= y |
| 2	| &&= | [Logical AND Assignment]() | x &= y |
| 2	| \|\|=	| [Logical OR Assignment]()	| x \|\|= y |
| 2	| => | [Arrow]() | x => y |
| 2	| yield() | Pause / Resume | yield x |
| 2	| yield* | Delegate | yield* x |
| 2	| ... | Spread | ... x |	 	 	 
| 1	| ,	| Comma	| x , y |