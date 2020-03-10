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


