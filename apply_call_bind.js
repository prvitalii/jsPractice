//call
function logThis(){
  console.log(this);
}

const obj = {val:'hello'}

logThis();
logThis.call(obj);


//call passing obj + args
function logThisArgs(arg1, arg2){
  console.log(this);
  console.log(arg1);
  console.log(arg2);
}

const obj = {val: '5'};

logThisArgs('1st arg', '2nd arg');
logThisArgs.call(obj, '1st arg', '2nd arg');

//apply
logThisArgs.apply(obj, ['1st arg', '2nd arg']);

//bind
const fnBound = logThisArguments.bind(obj, '1st arg', '2nd arg');
fnBound();
//unnknown functions parameters
function add(){
  console.log(arguments);
}

add(4);
add(5,6);
add(6,7,8);

function add(){
  const args = [].slice.call(arguments);
  console.log(args);
}

add(4);
add(5,6);
add(6,7,8);



