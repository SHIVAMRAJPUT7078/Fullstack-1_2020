// To print something on the screen we use console.log
console.log("Hello world")
console.warn("This is a warning");
console.error("This is an errror");
// variables in js
//3. what r variables - containers to store data items
var num1 = 3;
var num2 = 110;
console.log(num1+num2)

//4. data types in js
// strings
var str = "this is a string";
var str2 = "this is strign 2";
console.log(str,str2);
//objects --> they r like key value pairs
var marks = {
    ravi:52,
    shyam:45,
    rohan:74,
}
console.log(marks)
// boolean
var a = true;
var b = false;
console.log(a,b);
// undefined
var un;
console.log(un)
// null
var values = null
console.log(values)

//5. two types of data types :
// a - primitive datatypes - {undefined,null,string,number,boolean,symbol}
// b - reference datatypes - {array,objects}

var arr = [1,2,3,4,5];   //var arr1 = [25,"shivam", true,45]
console.log(arr)
console.log(arr[2])

// js functions
function avg(a,b){
    return (a+b)/2;
}
c1 = avg(3,5)
c2 = avg(10,5)
console.log(c1c2)