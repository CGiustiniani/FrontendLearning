# Operators

## Operators

### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (`=`), which assigns the value of its right operand to its left operand. That is, `x = y` assigns the value of `y` to `x`.

**Compound assignment operators**

<table>
<thead>
<tr>
<th>Name</th>
<th>Shorthand operator</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Assignment</td>
<td>x = y</td>
<td>x = y</td>
</tr>
<tr>
<td>Addition assignment</td>
<td>x += y</td>
<td>x = x + y</td>
</tr>
<tr>
<td>Subtraction assignment</td>
<td>x -= y</td>
<td>x = x - y</td>
</tr>
<tr>
<td>Multiplication assignment</td>
<td>x *= y</td>
<td>x = x * y</td>
</tr>
<tr>
<td>Division assignment</td>
<td>x /= y</td>
<td>x = x / y</td>
</tr>
<tr>
<td>Remainder assignment</td>
<td>x %= y</td>
<td>x = x % y</td>
</tr>
<tr>
<td>Exponentiation assignment</td>
<td>x **= y</td>
<td>x = x ** y</td>
</tr>
<tr>
<td>Logical AND assignment</td>
<td>x &&= y</td>
<td>x && (x = y)</td>
</tr>
<tr>
<td>Logical OR assignment</td>
<td>x ||= y</td>
<td>x || (x = y)</td>
</tr>
<tr>
<td>Logical nullish assignment</td>
<td>x ??= y</td>
<td>x ?? (x = y)</td>
</tr>
</tbody>
</table>

### Comparison operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values.

```javascript
let var1 = 3;
let var2 = 4;
```

**Comparison operators**

<table>
<thead>
<tr>
<th>Operator</th>
<th>Description</th>
<th>Examples returning true</th>
</tr>
</thead>
<tbody>
<tr>
<td>Equal (==)</td>
<td>Returns true if the operands are equal.</td>
<td>
3 == var1<br/>
"3" == var1<br/>
3 == '3'</td>
</tr>
<tr>
<td>Not equal (!=)</td>
<td>Returns true if the operands are not equal.</td>
<td>
var1 != 4<br/>
var2 != "3"
</td>
</tr>
<tr>
<td>Strict equal (===)</td>
<td>Returns true if the operands are equal and of the same type.</td>
<td>3 === var1</td>
</tr>
<tr>
<td>Strict not equal (!==)</td>
<td>Returns true if the operands are of the same type but not equal, or are of different type.</td>
<td>
var1 !== "3"<br/>
3 !== '3'
</td>
</tr>
<tr>
<td>Greater than (>)</td>
<td>Returns true if the left operand is greater than the right operand.</td>
<td>
var2 > var1<br/>
"12" > 2
</td>
</tr>
<tr>
<td>Greater than or equal (>=)</td>
<td>Returns true if the left operand is greater than or equal to the right operand.</td>
<td>
var2 >= var1<br/>
var1 >= 3
</td>
</tr>
<tr>
<td>Less than (<)</td>
<td>Returns true if the left operand is less than the right operand.</td>
<td>
var1 < var2<br/>
"2" < 12
</td>
</tr>
<tr>
<td>Less than or equal (<=)</td>
<td>Returns true if the left operand is less than or equal to the right operand.</td>
<td>
var1 <= var2<br/>
var2 <= 5
</td>
</tr>
</tbody>
</table>

### Arithmetic operators

An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).

**Arithmetic operators**

<table>
<thead>
<tr>
<th>Operator</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Remainder (%)</td>
<td>Binary operator. Returns the integer remainder of dividing the two operands.</td>
<td>12 % 5 returns 2.</td>
</tr>
<tr>
<td>Increment (++)</td>
<td>Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.</td>
<td>If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.</td>
</tr>
<tr>
<td>Decrement (--)</td>
<td>Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.</td>
<td>If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.</td>
</tr>
<tr>
<td>Unary negation (-)</td>
<td>Unary operator. Returns the negation of its operand.</td>
<td>If x is 3, then -x returns -3.</td>
</tr>
<tr>
<td>Unary plus (+)</td>
<td>Unary operator. Attempts to convert the operand to a number, if it is not already.</td>
<td>
+"3" returns 3.<br/>
+true returns 1.
</td>
</tr>
<tr>
<td>Exponentiation operator (**)</td>
<td>Calculates the base to the exponent power, that is, base<sup>exponent</sup></td>
<td>
2 ** 3 returns 8.<br/>
10 ** -1 returns 0.1.
</td>
</tr>
</tbody>
</table>


### Logical operators

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

**Logical operators**

<table>
<thead>
<tr>
<th>Operator</th>
<th>Usage</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Logical AND (&&)</td>
<td>expr1 && expr2</td>
<td>Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.</td>
</tr>
<tr>
<td>Logical OR (||)</td>
<td>expr1 || expr2</td>
<td>Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.</td>
</tr>
<tr>
<td>Logical NOT (!)</td>
<td>!expr</td>
<td>Returns false if its single operand that can be converted to true; otherwise, returns true.</td>
</tr>
</tbody>
</table>

#### Tasks

```javascript
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false

var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat

var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !'Cat'; // !t returns false
```

### String operators

The concatenation operator (`+`) concatenates two string values together, returning another string that is the union of the two operand strings.

```javascript
console.log('my ' + 'string'); // console logs the string "my string".

let mystring = 'alpha';
mystring += 'bet'; // evaluates to "alphabet" and assigns this value to mystring.
```

### Conditional (ternary) operator

```javascript
condition ? val1 : val2
```

If `condition` is true, the operator has the value of `val1`. Otherwise it has the value of `val2`. You can use the conditional operator anywhere you would use a standard operator.

```javascript
var status = (age >= 18) ? 'adult' : 'minor';
```

### Falsy values

A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

```javascript
if (false);
if (null);
if (undefined);
if (0);
if (-0);
if (0n);
if (NaN);
if ("");
```
