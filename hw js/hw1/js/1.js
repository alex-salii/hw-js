
console.log('hi')

var person = {
	name: 'Vasyan',
	age: '18',
	money: '350'

} 

var beer = {
	name: 'hoegaarden' ,
	price: '70'
}

var vodka = {
	name: 'absolut' ,
	price: '100'
}

var absent = {
	name: 'xenta' ,
	price: '140'
}

var whiskey = {
	name: 'bulet' ,
	price: '110'
}

var rum = {
	name: 'zacapa' ,
	price: '140'
}

var final = {
	status: 'Бомж' ,
	health: 'RIP'
}

console.log(absent.price > vodka.price);

console.log(vodka.price > whiskey.price);
 
console.log(whiskey.price === absent.price);

console.log(absent.price !== rum.price );

console.log(absent.price === rum.price );


console.log('Если заказать '  +
			 beer.name + ' и ' +
			 vodka.name +
			 ' тогда вечер получится хороший у ' +
			 person.name + 
			 'у него останется ' +
			 (person.money - vodka.price - beer.price) + ' грн ');
console.log('На ксолько бокалов ' +
			beer.name + 
			' хватит денег у ' +
			person.name + ' = ' + 
			( person.money / beer.price ));
console.log('Сколько сможет заказать ' + 
			person.name + ' ' +
			absent.name + ' = ' +
			( person.money / absent.price ) + 
			' и у него останется ' + 
			' = ' + (person.money % absent.price));

console.log(person.name +
			' заказал себе ' +
			beer.name + ' , ' +
			vodka.name + ' , ' + 
			whiskey.name + ' , ' +
			absent.name + ' , ' +
			rum.name + ' ' +
			' и теперь он ' + final.status + ' ' +
			' его состояние ' + final.health)
