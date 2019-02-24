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


