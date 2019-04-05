//rest/spread

//arr
const arr = [1, 2, 3, 4, 5];
const arr2 = ['arg1', 'arg2', ...arr];

console.log(arr2);

//obj
const obj = {item1:'boots', item2:'shorts'};
const obj1 = {...obj, item3:'helmet'};

console.log(obj1);

//strings
const str = 'vitalii';
const strArr = [...str];

console.log(strArr);

//arguments

function rest(){
	const args = [...arguments];
	console.log(args);
}

rest('friday');

//advance destructive
const arr =[1, 2, 3, 4, 5];
const [one, two, ...rest] = arr;

console.log(rest);

const obj = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
  key4: 'val4'
}
const{key1, ...others} = obj;

console.log(others);
