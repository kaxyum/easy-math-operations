function addition(firstnumber, secondnumber)
{
    return firstnumber + secondnumber;
}

function subtraction(firstnumber, secondnumber)
{
    return firstnumber - secondnumber;
}

function multiplication(firstnumber, secondenumber)
{
    return firstnumber * secondenumber;
}

function division(firstnumber, secondnumber)
{
    return firstnumber / secondnumber;
}

module.exports = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division
};