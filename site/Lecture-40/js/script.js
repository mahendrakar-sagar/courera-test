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


function test() {
	console.log("Hello");
}
test();






