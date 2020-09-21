//1

var person = [
    var a = {
       'brand': 'BMW' ,
       'color': 'red'
   } ;
    var b = {
    'age': '2015',
    'price':'4000'
    };
    var c = {
        'number': '6',
        'rating': '2'
    };


]


//2
var person = ['Hi'];
var arrayLength = person.length;
for (var i = 0; i < a; i++) {
    console.log(person[i]);

}

//3
var a = {
    name: "Vasan",
    surname: "Ivanov",
    age: 28,
}
var b = {
    name: "Ivan",
    surname: "petrov",
    age: 29,
}
var c = {
    name: "Petro",
    surname: "Prostoy",
    age: 30,
}
var persons = [a, b, c];

for (var person of persons) {
    var name = '';
    var surname = '';

    for (var key in person) {
        if (key === 'name') name = person[key];
        else if (key === 'surname') surname = person[key];
        else continue;
    }

    console.log(`Person: ${name} ${surname}`);

//4



//5
var persons = '{'nam': 'Petro', 'age': 25 }';

//6    

var persons = '{'nam': 'Petro', 'age': 25 }';

var a6 = {
    'num': '5',
    'rating': '12',
    'jasonnn': 'b12'   
}

//7


//8
    var array = [5, 9];
    array.average = () => {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i];
        }
        var avg = total / array.length;
        return avg;
    }

    var avg = array.average();
    console.log(avg);

    //9
    function sum3() {
        var result = 0;

        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    }

    alert(sum3(1, 2));

//10
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomInRange(1, 10);



//11
    function sum() {
        var result = 0;

        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    }

    alert(sum()); 
    alert(sum(1)); 
    alert(sum(1, 2)); 
    alert(sum(1, 2, 3)); 
    alert(sum(1, 2, 3, 4)); 

//12
    let arr = ['array', 'start', 'amount', 'insert'];

    delete arr[1];

    alert(arr[1]);


    alert(arr.length); 