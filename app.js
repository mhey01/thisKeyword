// 'this' in a method
var me = {
    firstName: "Matt",
    lastName: "Hey",
    age: 24,
    whatIsThis: function() {
        return this;
    }
};

document.getElementById('methodAns').innerHTML = me.whatIsThis();

// 'this' by itself
var a = this;

document.getElementById('windowAns').innerHTML = a;

// 'this' in a lone function
function hello() {
    return this;
};

document.getElementById('functionAns').innerHTML = hello();

// Question 1
var mike = {
    currentYear: 2019,
    job: 'teacher',
    whatIsThis: function() {
        return this;
    },
    age: 30
};

document.getElementById('q1Ans').innerHTML = mike.whatIsThis();

// Question 2
function cats() {
    var i = 0;
    function dogs() {
        i += 1;
    }
    dogs();  
    return this;
}
cats();

document.getElementById('q2Ans').innerHTML = cats();

// Question 3
function add2(number) {
    return number + 2;
};
add2(3);
var john = this;
var mike = {
    job: 'driver',
    age: 99
};

document.getElementById('q3Ans').innerHTML = john;