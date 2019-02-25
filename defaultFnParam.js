// Default Function Parameters

function fnOld(param){
	if (param === undefined){
		param = 'Default Value';
	}
	sonsole.log(param);
}
function fnEs (param = 'Default Value'){
	console.log(param);
}

fnEs('My string passed in');
fnEs();

//Expression as parameters

function fn(param = 10 * 10){
	console.log(param);
	return param;
}

function fn2(param = fn(50)){
	console.log(param);
}

fn('String passed');
fn();
fn2();

// Variable availability

function va(param1=10, param2=param1){
	console.log(param1 + param2);
}

va(2,5);
va(50);
va();