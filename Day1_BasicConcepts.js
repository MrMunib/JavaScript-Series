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
        |    "Munib"       |    name
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
    
*************************************************************

*/
