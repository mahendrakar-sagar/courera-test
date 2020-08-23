//var x;
//x=5;
//console.log(x);
/*x=5;
if (x == undefined) {
	console.log("x is undefined");
}
else  {
	console.log("x has been defined")
}*/

/*var string ="hello";
string +=" world";
console.log(string + "!")*/

/*console.log((5+4)/3);
console.log(undefined/3)
*/

/*var x="4", y =4;
if (x ==y){
	console.log("x=is equal")
}*/

/*if( false || null || undefined || "" || NaN){
	console.log("This line wont executes")
}
else {
	console.log("All false")
}*/
/*if (true && "hello" && 1 && -1 && "false"){
	console.log("All true")
}*/

/*function a()
{
	return
	{
		name: "sagar";
	}
}
function b(){
	return {
		name: "sagar"
	}

}
console.log(a());
console.log(b());*/

/*var sum=0;
for (var i = 0; i < 10; i++) {
	console.log(i)
	sum=sum+i;
}
console.log("sym of 0 to through 9 is :"+sum)
*/

//Default values
/*function orderChicken(sideDish){
	sideDish =sideDish || "whatever!";
	console.log("chiken with "+ sideDish);

}
orderChicken(" out skin")
orderChicken();*/
/*var x=10;
if ((null) || (console.log("Hello")) || x>5){
	console.log("hello");
}*/
/*var company =new Object();
company.name="Facebook";
company.ceo=new Object

company.ceo.firstname="mark"
company.ceo.favcolor="red"
console.log(company)
console.log(company["name"]);//facebook

company["stock of company"]=110;

console.log("stock price is "+ company["stock of company"])//110

*/
//better way  using Object litretral
/*var facebook= {
	name:"facebook",
	ceo : {
		firstname: "mark",
		favcolor : "red"
	},
	"stock of company":110
}
console.log(facebook.ceo.firstname)
*/
//Function in javascript
/*function multiply(x,y){
	return x * y;
}
multiply.version ="v.1.0.0";
console.log(multiply.toString());

//Function factory


function makeMultiplier(multiplier){
	var myFunc= function(x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(10))
var doubleAll=makeMultiplier(2);
console.log(doubleAll(100));

//passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
}

var result= doOperationOn(5, multiplyBy3);
console.log(result);
result=doOperationOn(100,doubleAll);
console.log(result)*/


/*function test() {
	console.log(this)
	//console.log("Hello");
	this.myName="sagar";

}
test();
console.log(window.myName)*/
//function constractr
/*function Circle (radius) {
	this.radius =radius;*/
/*	this.getArea = 
	   function () {
	   	return Math.PI * Math.pow(this.radius, 2)
	   };*/
	   //This is we can do in simple way that
/*}
Circle.prototype.getArea =
function() {
	return Math.PI * Math.pow(this.radius, 2)
};
var myCircle= new Circle(10);
console.log(myCircle.getArea())
*/
/*function Dog (name) {
	this.name= name;
	var self=this;
}
Dog.prototype.bark = function () {
	console.log(self.name + "like barking")
}

var max=new Dog("Max", "Buddy")
max.bark();
*/

//================================================
//****************Arrays**************
/*var array=new Array();
array[0] = "sagar";
array[1]= 2;
array[2]= function (name) {
	console.log("hello "+name)
};
array[3] ={course:  "HTML,CSS & JS"};

console.log(array);
array[2][array[0]];
console.log(array[3].course)*/

//short hand array creations
/*var names = [
{ name : "sagar" } ,
{ name : "mahendrakar" },
"kumar"];
console.log(names);*/
//agin short
/*var names =["sagar","kumar" ,"mahendrakar"]

for (var i=0; i< names.length; i++){
	console.log("Hello "+names[i]);
}
*/
//agin short form is 
/*var names =["sagar","kumar" ,"mahendrakar"]
for (var name in names){
	console.log("Hello "+ names[name]);
}*/

/*var counter=0;
var myArray=["sagar", 2, {handle: "sagar mahendrakar"}];
for (var i = 0; i < myArray.length; i++) {
	counter++;
}
console.log(counter);*/
//=============================
//*************clousers**************
/*function make(multiplay){
function b() {
console.log ("multiplay "+ multiplay);
}
b();

return (
function (x){
return multiplay * x;
}
);
}
var doubleAll =make(2);
console.log(doubleAll(10));*/

/*(function(window){
	var obj ={};
	obj.dreamOn =function () {
		console.log("i want to see the global scope")
	};
	window.doer =obj;
})(window);
doer.dreamOn();*/














