//assign first and last name to variables
var firstName: string = "Paula";
var lastName: string = "Suarez";

console.log(firstName);
console.log(lastName);

//assign value 50 for 50 states to a constaint
const states: number = 50;
console.log(states);

//assign numbers and add 5 + 4
var number1: number = 5;
var number2: number = 4;
console.log(number1 + number2);

//charCodeAt() comparison between first letter of my name to the letter "L"

//finding ASCII value of letter P
var p: string = "Paula";
var pUnicode = p.charCodeAt(0);
console.log(pUnicode);


//finding ACSII value of letter L
var l: string = "L";
var lUnicode = l.charCodeAt(0);
console.log(lUnicode);

//comparing if ASCII value of P is greater than ASCII value of letter L.
if (pUnicode > lUnicode) {
    // code to run if condition is true
    console.log("Back at the end of the line!");
} else {
    // code to run if condition is not true
    console.log("Next!");
}

//setting up my function from lecture example

let myAdd = function (num1: number, num2: number): number {
    return num1 + num2;
};
console.log(myAdd(5, 5,));


function sayHello() {
    const message: string = "hello world.....!!!!!";
    alert(message);
}

sayHello();


//checkAge function that checks under 21--alert that they can't view page if 21 or older they can view page.
function checkAge1(name: string, age: number) {
    if (age < 21) {
        console.log('Sorry ' + name + ' you are not old enough to view this page.  This is checkAge1 function.');
    } else {
        console.log('Congrats ' + name + ' you are old enough to view this page. This is checkAge1 function.');
    }
}

//Calling checkAge function and passing 5 individuals each with a name and age argument.

checkAge1('Jules', 41);
checkAge1('CJ', 21);
checkAge1('Joe', 27);
checkAge1('Billy', 18);
checkAge1('Mary', 17);


//Array with fav veggies
var veggies: string[] = ['green beans', 'tomatoes', 'lettuce'];
//testing alert 
//alert(veggies[1]);

//Using same array with for each loop to display list in console
veggies.forEach(function (veggies) {
    console.log(veggies);
});

//Array with an 5 objects and two properties where the properties will be passed to the ckAge function that will check if older or under 21.

const person: IPerson[] = [

    {
        name: 'Paula',
        age: 41
    },
    {
        name: 'Viven',
        age: 2
    },
    {
        name: 'Hernan',
        age: 47
    },
    {
        name: 'Julien',
        age: 5
    },
    {
        name: 'Dog',
        age: 23
    },
]


interface IPerson {
    name: string;
    age: number;
}



// var person: string[] = [
//     {
//         name: 'Paula',
//         age: 41
//     },
//     {
//         name: 'Viven',
//         age: 2
//     },
//     {
//         name: 'Hernan',
//         age: 47
//     },
//     {
//         name: 'Julien',
//         age: 5
//     },
//     {
//         name: 'Dog',
//         age: 23
//     },
// ]


var i: number;
for (i = 0; i < person.length; i++) {
    console.log(checkAge(person[i].name, person[i].age));

    function checkAge(name: string, age: number) {
        if (age < 21) {
            console.log('Sorry ' + name + ' you are not old enough to view this page.');
        } else {
            console.log('Congrats ' + name + ' you are old enough to view this page.');
        }
    }



}

//Create a function that passes a string as an argument and getting length of string.  Should be 5 or "Paula".

var theName: string = 'Paula';
console.log(getLength1(theName));
function getLength1(theName) {
    console.log(theName.length);
}

//Different function passing string argument and getting length after clicking button.
//var myname = 'Suarez';
//console.log(myfunction(myname));
//document.write('<button id="button" type="button" onclick="myfunction(myname);">click</button>');
//function myfunction(myname) {
//alert(myname.length);
//}

//Using function from above to pass "Hellow World" and getting length back--should be 11.  Store length in a variable the test whether it is an odd (display appropriate message) or even and displate appropriate message.
var aName: string = 'Hello World';
console.log(getLength(aName));
function getLength(aName) {
    var x: number = aName.length;
    console.log(x);

    if (x % 2 == 0)
        console.log("The world is even and nice!");
    else
        console.log("The world is odd place!");

}








