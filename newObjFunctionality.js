//New Object Functionality
//Properties
var name = 'Sophia';
var age = 25;

var person = {
	name: name,
	age: age
}

var person = {
	name,
	age
}
caonsole.log(person);

//Methods
const name = 'Julia';
const age = '19';

const obj1 = {
	age,
	name,
	growUp: function(){
		this.age++;
	}
}

const obj2 = {
	age,
	name,
	growUp(){
		this.age++
	}
}

//Setters & Getters
var person = {
	fName: 'Vitalii',
	lName: 'Klichko',
	get fullName(){
		return this.fName + ' ' + this.lName; 
	},
	set fullName(name){
		const space = name.indexOf(' ');
		this.fName = name.slice(0, space);
		this.lName = name.slice(space + 1); 
	}
}