/**
 * Day 6!
 */

 // Scoping



 var myVariable = 3;

 function myFunction () {
     console.log( myVariable ); // Can we see myVariable here? Yes, we can see GLOBALLY scoped variable inside the function

     var myFunctionScopeVariable = 64; // Decalared in a local (function) scope
     console.log( myFunctionScopeVariable ); // We can see it in the function

    // Funtion inside of a function!? Is this even possible!?
    function myNestedFunction () {  //Yes!
        var myNestedFuntionVariable = 'I\'m very nested!';
        console.log( myNestedFuntionVariable ); //Local acess works

        console.log( 'Accessing function scope variable in nested function: ' + myFunctionScopeVariable );

        console.log( myVariable ); //Global variable are visible all the way inside here

        //Even more nesting!?
        function myDoubleNestedFunction() {
            var doubleNestedVar = 'Double nested var, here!';

            console.log( doubleNestedVar);

            // myNestedFunction(); // Can I run this here!? Yup! However this causes recursion and, without a terminating condition, will run forever!
        }

        myDoubleNestedFunction(); // This works, same scope that the function was defined in
    }

    myNestedFunction(); //run it to try

    // console.log( myNestedFuntionVariable ); // Not visible
 }

 myFunction();  //Let's run and see
 // console.log( myFunctionScopeVariable ); // Can we acess it oustide the function? No.

 // myNestedFunction(); // Can we run the nested function!? Nope! It is not available globally if it was defined in a localized scope!



 /**
  * Functions returning functions.
  */

function addNums ( x, y ) {
    return ( Number( x ) + Number( y ) );
}

function subtractNums ( x, y ) {
    return ( x - y );
}

function multiplyNums ( x, y ) {
    return ( x * y );
}

function divideNums ( x, y ) {
    return ( x / y );
}

function myMath ( operation ) {
    switch ( operation ) {
        case "add": 
            return addNums; // "return" ends the function, so do not need "break"
        case "subtract": 
            return subtractNums;
        case "multiply": 
            return multiplyNums;
        case "divide": 
            return divideNums;
        default:
            return 'Invalid operation.';
    }
}

// console.log( myMath( 'add', 64, 6));
// console.log( myMath( 'add' )( 64, 6 ) ); //the second set of parentheses is the values passed to the function returned by myMath.

var result = myMath( 'divide' )(9,3);
var newResult = myMath( 'multiply' )( 2, result );
console.log( newResult );



/*
*Now let's try with ..... anonymous functions.
*/

function newTestFunction( myString ) {
    myString = 'Entered string is: ' + myString;
    return function( additionalString ) {
        if ( additionalString != undefined ) {
            myString += ', ' + additionalString;
        }
        return function( yetAnotherString ) {
            if ( yetAnotherString != undefined ) {
                myString += ', ' + yetAnotherString + '!!!';
            }
            return myString;
        }
    }
}

console.log( newTestFunction( 'A B C D E F G' )( 'H I J K L M N O P' )( 'Q R S T U V W X Y Z' ) );


