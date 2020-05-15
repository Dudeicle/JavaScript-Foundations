// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
var principal = "200000";
var yearlyinterestRate = "0.05";
var years = "30";
var name = "Brian";


// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/

var monthlyInterestRate = (yearlyinterestRate/12);
var periods = (years*12);

console.log(periods)

// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/

console.log("-----EQUATIONS AFTER THIS POINT-----")

/* M = P [ I ( 1 + I )^N ] 

/ [ ( 1 + I )^N – 1 ] */

let numerator = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods));

console.log(numerator)

let denominator = Math.pow((1 + monthlyInterestRate),periods)-1;

console.log(denominator);

monthlyRate = numerator / denominator;

console.log(monthlyRate);


console.log("-----MORTGAGE CALC BELOW HERE-----")

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

function mortgageCalculator (){
    const name = "Brian"
    const principal = "200000";
    const yearlyinterestRate = "0.05";
    const years = "30";
    const monthlyInterestRate = (yearlyinterestRate/12);
    const periods = (years*12);
    let numerator = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods));
    let denominator = Math.pow((1 + monthlyInterestRate),periods)-1;
    monthlyRate = numerator / denominator;
    return name + " your monthly rate is $" + monthlyRate;
}

console.log(mortgageCalculator());


console.log("-----TASK 4 BELOW HERE-----")

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

function mortgageCalculator2(principal, yearlyinterestRate, years, monthlyInterestRate, periods){
    monthlyRate = numerator / denominator;
    return monthlyRate;
}

console.log(mortgageCalculator2());

console.log("-----TASK 5 BELOW HERE-----")

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

function mortgageCalculator3(creditScore) {
creditScore = Math.random() * 801;

if (creditScore > 740) {
    yearlyinterestRate = yearlyinterestRate*.95;
} else if (creditScore < 740 && creditScore > 660) {
    yearlyinterestRate = yearlyinterestRate;
} else if (creditScore < 660) {
    yearlyinterestRate = yearlyinterestRate* 1.05;
}
return console.log("Your new interest rate is ", yearlyinterestRate, "%");
}

console.log(mortgageCalculator3());

console.log("-----TASK 6 IS BELOW HERE-----")

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/


function variableInterestRate () {
    const name = "Brian"
    const principal = 200000;
    let yearlyinterestRate = 0.04;
    const years = 30;
    yearlyinterestRate = yearlyinterestRate-0.02;
    
    for (i = 0; i < 10; i++) {
        let monthlyInterestRate = (yearlyinterestRate/12);
        const periods = (years*12);
        let numerator = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods));
        let denominator = Math.pow((1 + monthlyInterestRate),periods)-1;
        monthlyRate = numerator / denominator;

        console.log(monthlyRate);

        yearlyinterestRate = Math.round((yearlyinterestRate + .005) * 1000)/ 1000;

        console.log(yearlyinterestRate);

        
    }

}
console.log(variableInterestRate("Brian, with an interest rate of ", yearlyinterestRate, ", your monthly rate is ", monthlyRate));

// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
