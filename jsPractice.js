// Default Parameters

function fn (param = 'Default Value'){
	console.log(param);
}

fn('My string passed in');
fn();

// Variable availability

function va(param1=10, param2=param1){
	console.log(param1 + param2);
}

va(2,5);
va(50);
va();

// Arrow Functions () => {}
const standartFnSub =function(num1, num2){
	console.log(num1-num2);
	return(num1-num2);
}

const arrowFnSub = (num1,num2) =>{
	console.log(num1-num2);
	return(num1-num2);
}
standartFnSub(7,2);
arrowFnSub(9,3);

// No Return Needed
const standartFnAdd = function(num1, num2){
	return num1+num2;
}
const arrowFnAdd = (num1, num2) => num1+num2;

standartFnAdd(2,7);
arrowFnAdd(2,7);

// No Parentheses Needed
const add10 = function(num1){
	return num1 + 10;
}
const add10ArrFn = num1 => num1 + 10

add10(2);
add10ArrFn(5);

//Callbacks, map
const arr = [{prop:'abc'},{prop:'def'}];

const props = arr.map(function(obj){
	return obj.prop;
})
const propsArrFn = arr.map((obj) => obj.prop);

console.log(props);
console.log(propsArrFn);





