/**
 * Let's try Jacva scropt afgain!
 * Multi-line comment
 */

// Single line comment


// Basic assignment:

/*
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

 
/**

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

/*
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

// Add ALL of our DATALIST to the body! Yay! We should be able to see it now!
document.body.appendChild( myDataList );

/**
 * Collecting elements.
 */

 //Get by ID:


 /*
var myHeading = document.getElementById( 'my-heading' );
myHeading.title = 'This is a heading.'; // Tooltip attribute.
// myHeading.style.color = 'darkgray'; //PLEASE avoid using inline styles... this is the CSS file's job!!
myHeading.className = 'gray-text'; // Use classes instead!

/**
 * Events!
 */


// We can add event-listeners to a target element

/*
myHeading.addEventListener( 'mouseover', function ( event ) {
    this.className = 'salmon-text'; // In an event the "this" keyword represents our element (myHeading)
} );

myHeading.addEventListener( 'mouseleave', function ( event ) {
    this.className = 'indigo-text';
} );


myHeading.addEventListener( 'click', function ( event ) {
    var bigClass = 'big-text';
    if ( !this.className.includes( bigClass ) ) {
        this.className += ' big-text'; // Concatenating a new class!
        // Remember, you must have a space between classes.
    }
} );

/**
 * Let's make a function
 */
/*
 function addTwoNumbers ( x, y ) {
     x = Number( x ); // Enforce data-type (number).
     y = Number( y );
     return ( x + y );
 };

function currentDayString () {
    var date = new Date();
    var dateString = '';
    dateString += date.getFullYear();
    dateString += '.'; 
    dateString += ( date.getMonth() + 1 );
    dateString += '.'; 
    dateString += ( date.getDay() + 1 );
    return dateString;
}

console.log( 'The current date is: \r\n ' + currentDayString() ); // \r\n is return/newline.
*/
/* conditionals */










// check for equivalency (type-agnostic)
console.log( 1 == true );  //true
console.log( 'Hello, World!' == true); // False
console.log( -137 == true);  // False
console.log( 'test' == 'test'); // True
console.log( 36 == '36' );  //True
console.log( 0 == false ); //True
console.log( `test string` == "test string"); //True

// value comparison including type
console.log( 1 === true ); //false
console.log( '' === true );  //false
console.log( -137 === true); // False
console.log( 'test' ===  'test'); // True
console.log( 36 === '36' );  //False
console.log( 0 === false ); //False
console.log( `test string` === "test string"); //True


// Hamburger menu

// grab menu
var myNav = document.querySelector( 'nav' );

// and menu button
var myNavButton = document.querySelector( '.menu-button' );


myNavButton.addEventListener( 'click', function ( event ) {
    // When clicked, add/remove the "nav-open" class (in HTML.)
    myNav.classList.toggle( 'nav-open' );
} );
