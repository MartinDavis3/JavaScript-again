/**
 * Let's try Jacva scropt afgain!
 * Multi-line comment
 */

// Single line comment

// Basic assignment:
var myVariable='38.987'
console.log(  myVariable + 5);  //Ooop, one of these is a string so plus is concatenation

myVariable=parseFloat( myVariable); //Floating point number, decimal maintained
console.log( myVariable );

myVariable = parseInt ( myVariable);
console.log( myVariable )

myVariable = Number( myVariable );     //Converted to any number type it can.
console.log( myVariable)

myVariable = myVariable + 5;  //Addition
console.log( myVariable )

myVariable = myVariable.toString();
console.log( myVariable )

/**
 *  Other types?
 */

 var myArrayOfDataTypes = [
    // Booleans:
    true,
    false,
    // Null:
    null,
    // Number (float/integer):
    34,
    168.793,
    'Hello, World!',
    // Value not defined:
    undefined,
    // Not a number:
    NaN,
    [1, 2, 3, 4, 5]
 ];


 /**
 *  Creating elements for a webpage.
 */

// Create datalist.
var myDataList = document.createElement( 'DL' );  // Won't show yet! We didn't tell it where to go.

for (var i=0; i < myArrayOfDataTypes.length; i++)
{
    // Create datalist title.
    var dataListTitle = document.createElement( 'DT' );
    dataListTitle.textContent = typeof myArrayOfDataTypes[i];  // Output the datatype.

    // Create datalist data.
    var dataListData = document.createElement( 'DD' );
    dataListData.textContent = myArrayOfDataTypes[i];
    
    // Add our new elements to our datalist.
    myDataList.appendChild( dataListTitle );
    myDataList.appendChild( dataListData );

}
var myHeadingText = 'Our Data-Type Test:';
document.body.innerHTML += `<!-- Back ticks are used in JS for multi-line strings. -->
    <h2>
        `+myHeadingText+`
    </h2>
`;

// Add ALL of that to the body! Yay! We should be able to see it now!
document.body.appendChild( myDataList );

