/* 

Topics Covered

*************************************************************

-> Introduction:
    We add functionality in wepage using JavaScript.

*************************************************************

-> Variable:
* It is a container that hold given data or value.
* It is simply the name of a storage location in memory.

Example: 
    We can take example of of small part of RAM. The name of that particular part is variable name and the value stored at that part is called its value.  

        name = "Munib"

        ____________________
        |                  |
        |                  |
        |     "Munib"      |    name
        |                  |
        |                  |
        ____________________

*************************************************************

-> DataTypes in JavaScript:

*************************************************************

    In JavaScript we have 7 Primitive Types.

        1. Number
        2. Boolean
        3. String
        4. Undefined
        5. Null
        6. Bigint
        7. Symbol

    To check the datatype of any variable in JavaScript we use typeof keyword.

    name = "Munib";
    typeof(name);

We we create a variable in JavaScript we don't need to mention the type of variable. JS automatically detect the type of that variable.

*************************************************************

                Discussing Each DataType in Detail

*************************************************************

1. Number:
        * Positive & Negative 
        * Integers 
        * Floating Numbers (including Decimals)

        a  = 9 ;

There is a particular limit of storing number in JS. After reaching the limit JS automatically upgrade the value to the nearest number. e.g:

                        a = 22.999999999999999999 ;

If we assign value like this, JS will automatically upgrade the value to 23.

                        a = 23 ;

************************* Operations in JS ******************

-> Arithmetic Operations:

    * Addition 
             sum  = a + b

    * Subtraction
             diff = a - b

    * Multiplication
             prod = a * b

    * Division
             div  = a / b

    * Modulo (also called reminder operator)        

             rem  = a % b                        
                                                b | a
                                                ____________
                                                      rem

    * Exponentiation (power operator)
            exp  = a ** b

*************************************************************

NaN in JS:

*************************************************************

        The NaN global property is a value representing Not-A-Number.

        -> (It is basically a NUMBER in JS BUT the value it is representing ia not a valid number. )

        typeof(NaN)

        -> All the operations that we will perform with NaN will return NaN.
            NaN + 1
            NaN - 1
            NaN * NaN           
            NaN / NaN

*************************************************************

Operation Precedence (Priority):

*************************************************************

This is general order of solving and expression in JS.

1. Parentheses ()
2. Exponentiation **
3. Multiplication * , Division / , Modulo %
4. Addition + , Subtraction -
5. Left to Right

Example:
    
        a = 10 + 2 * 3 - 4 / 2
        a = 10 + 6 - 2
        a = 16 - 2
        a = 14

*************************************************************

let, const and var:

*************************************************************

    These are the keywords used to declare a variable in JS.

    1. let:
        * It is block scoped.
        * It can be updated but not re-declared.
        * It is not hoisted.
        * It is the best practice to use let instead of var.
        * It is used when we want to change the value of variable in future.
        * It is used when we want to limit the scope of variable to a block.
        * It is used when we want to avoid hoisting.

    2. const:
        * It is block scoped.
        * It can neither be updated nor re-declared.
        * It is not hoisted.
        * It is used when we want to declare a constant value.
        * It is used when we want to limit the scope of variable to a block.
        * It is used when we want to avoid hoisting.

    3. var:
        * It is function scoped.
        * It can be updated and re-declared.
        * It is hoisted.
        * It is used when we want to declare a variable globally.
        * It is used when we want to declare a variable in a function.
        * It is used when we want to use hoisting.
    
    Example:
    
            let x = 10;
            const y = 20;
            var z = 30;


*************************************************************

Assignment Operators :

*************************************************************

age = age + 1               
age += 1                    

age = age -1
age -= 1

age = age * 1
age *= 1


*************************************************************

Unary Operators :           [Binary Operators]

*************************************************************

It is called unary because it uses only one operend.

age = age + 1
age += 1                                       // assignment operator
age++           //PRE-Increment             // unary operator


age = age - 1 
age -= 1                                    // assignment operator
age--           //PRE-Decrement          // unary operator


age = age + 1
age += 1                                       // assignment operator
++age           //POST-Increment             // unary operator


age = age - 1 
age -= 1                                    // assignment operator
--age           //POST-Decrement          // unary operator



[ ** Differnce b/w pre and post uranry operators ** ]

-> Pre-Increment : 
    * first use
    * Then update 

-> Post Increment :
    * first update
    * Then use






*************************************************************

Identifier Rules:

*************************************************************

All JavaScript variables must be identified with unique names (identifiers).

    * Names can contain letters, digits, underscores, and dollar signs.
    * No space.
    * Names must begin with a letter.
    * Names can also begin with $ and underscore.
    * Names are case sensitive (y and Y are different variables.)
    * Reserved words (like JavaScript keywords) CANNOT be used as names.


CASE in JavaScript :

-> camelCase (JS naming convenetion)
-> snake_case
-> PascalCase


*************************************************************

Boolean in JS:

*************************************************************

Boolean represents a truth value - > true or false / yes or no





*************************************************************

What is TypeScript ?

Static Typed, where Js is dynamic typed

-> It is a strict version of JavaScript
-> We can not change the datatype of any variable
-> Designed by Microsoft

*************************************************************





























































































































*/
