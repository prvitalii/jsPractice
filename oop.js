function Burger(chese=0, salad=0, mayo=0){
  this.chese=chese;
  this.salad=salad;
  this.mayo = mayo;
  this.price = function(){
    return this.chese * 2 + this.salad * 3 + this.mayo * 4
    };
};

var bg1 = new burger(2, 0, 1);
console.log(bg1.price());

// method call
// ++++++++++++++++++++++++++++
var obj = {
  str: 'obj string',
  fn: function(){
    console.log(this);
  }
};

obj.fn();
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
const obj = {
  counter: 0,
  counterUp(){
    this.counter++;
    this.logFn();
  },
  logFn(){
    console.log(this.counter);
  }
}

obj.counterUp();
obj.counterUp();
// ++++++++++++++++++++++++++++

// Introduction to new

function Person(lName, fName){
  this.lName = lName;
  this.fName = fName;
};

const son = new Person('Prokaziuk', 'Yehor');
console.log(son);

// Apply, Call, Bind, & arguments

// ++++++++++++++++++++++++++++
//call
function logThis(){
  console.log(this);
}

const obj = {val: 'Text'};
logThis();
logThis.call(obj);
// ++++++++++++++++++++++++++++
function logStuff(msg1='msg1', msg2='msg2'){
  console.log(this);
  console.log(`Status: ${msg1};`);
  console.log(`Delivery: ${msg2};`);
}

const shoes= {size: 8.5, color: 'choko', brand: 'chippewa'};
logStuff('sold', '$10');
logStuff.call(shoes, 'for sale', 'free');
// ++++++++++++++++++++++++++++
//argument
function nums(){
	const arr = [].slice.call(arguments);
	console.log(arr);
};

nums(1,5,10);
nums(2,3,5);
//all
function logArgs(arg1, arg2){
	console.log(this);
	console.log(`Arg#1: ${arg1}`);
	console.log(`Arg#2: ${arg2}`);
}
//normal function
logArgs('First argument', 'Second argument');
//call
const callObj = {method: 'Call'};
logArgs.call(callObj, 'First argument', 'Second argument');
//apply
const applyObj = {method: 'Apply'};
logArgs.apply(applyObj, ['First argument', 'Second Argument']);
//bind
const bindObj = {method: 'bind'};
const fnBind = logArgs.bind(bindObj, 'First argument', 'Second Argument');
fnBind();

