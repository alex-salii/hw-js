
/*1 Перепишите пример ниже, используя if.*/
var color = prompt("Введите цвет","");
if(color == "red"){
     document.write("<div style='background-color: red;'>красный</div>");
 }
if(color == "black"){document.write("<div style='background-color: black; color: white;'>черный</div>");
}
if (color =="blue"){ document.write("<div style='background-color: blue;'>синий</div>");
}
if (color =="green"){document.write("<div style='background-color: green;'>зеленый</div>");
}
if(color !=="red" && color !== "black" && color !=="blue" &&  color !=="green")
{ document.write("<div style='background-color: gray;'>Я не понял</div>");
}
break;

/*2 Спросите у пользователя сколько ему лет используя prompt().
 Проверте ввел ли он корректное значение (число от нуля до 100).
 Выведите в консоль мессадж с ошибкой если неправильное*/

var age = prompt('Сколько Вам лет?');

if (age < 100) { 
     alert('OK');
 } else if (age >100) {
 	alert('подумай еще');
 }
consol.log(age);

//3 Напишите switch который выводит колличество дней в месяце указаном в переменной(jan, fab, march ...).

void getMonthDays()    {
    int month;
 
    printf("\nEnter Month ");
    scanf("%d", &month); 
    
    switch(month) {
        case 1: printf("JANUARY = 31 days"); break;
        case 2: {
            int year;
            
            printf("\nEnter Year ");
            scanf("%d", &year); 
            
            if (year % 4 == 0) {
                printf("FEBRUARY = 29"); 
            } else {
                printf("FEBRUARY = 28"); 
            }
            
            break;
        }
        case 3: printf("MARCH = 31 days"); break;
        case 4: printf("APRIL = 30 days"); break;
        case 5: printf("MAY = 31 days"); break;
        case 6: printf("JUNE = 30 days"); break;
        case 7: printf("JULY = 31 days"); break;
        case 8: printf("AUGUST = 31 days"); break;
        case 9: printf("SEPTEMBER = 30 days"); break;
        case 10: printf("OCTOBER = 31 days"); break;
        case 11: printf("NOVEMBER = 30 days"); break;
        case 12: printf("DECEMBER = 31 days"); break; 
        default: printf("Net takogo mesiatsa"); 
    }   
}


int main() {    
    char resp = 'n';
    
    while (resp == 'n') {
        getMonthDays();
    
        printf("\nExit? (y/n)");        
        resp = getch();             
    } 



//4 Напишите код который приветсвует пользователя в зависимости от того сколько ему лет. Приветсвия придумайте сами. Например: 'Привет сопля', 'Привет', 'Приветсвую', 'Здравствуйте', 'Здравствуйте многоувожаемый старый мурдый человек'.

var name = prompt ("NAME?");
var age = prompt('age?');
if (age < 18) {
	console.log('здарова');
} else if (age < 25) {
	console.log('привет');
} else if (age < 30) {
	console.log('здраствуйте');
} else if (age > 30) {
	console.log('мое почтение');
} else {
	console.log('ты что такое');
}

//5 Рассширьте предыдущий код добавив к привествию фразу про погоду(или время дня). 'Привет. Хороший день сегодня', 'Привет. Хороший вечер сегодня'


var name = prompt ("NAME?");
var age = prompt('age?');
if (age < 18) {
	console.log('здарова' + ' отличный день сегодня');
} else if (age < 25) {
	console.log('привет' + ' какой прекрассный вечер');
} else if (age < 30) {
	console.log('здраствуйте' + ' подскажите сколько времени');
} else if (age > 30) {
	console.log('мое почтение.' + ' Какой замечательный день');
} else {
	console.log('ты что такое' + '');
}

//6 Сделайте декларативную JSON структура для html кода ниже

//{"body" : [
//{"span" : "Enter a data please:" , },

//{"button" : "OK", "button" : "Cansel" }


//]}



{"body" : [
{
"div" : {
	"span": "Enter a data please:",

}


]
}
// 7
 let notebook = {
            brand: prompt('Введите название брэнда вашего ноута'),
            type:  prompt('Какого типа ваш ноут?'),
            model: prompt('Какой модели ваш ноут?'),
            ram: prompt('Сколько планок озу на вашем ноуте?'),
            size: prompt('Каков размер вашего ноута?'),
            weight: prompt('Каков вес вашего ноута?'),
            resolution: {
            width: prompt('Какая ширина экрана в вашем ноуте?'),
            height: prompt('Какая высота экрана в вашем ноуте?')
            },
            }; 

        let phone = {
            brand: prompt('Введите название брэнда вашего телефона'),
            model: prompt('Введите название модели вашего телефона'),
            ram: prompt('Сколько планок озу на вашем телефоне?'),
            color: prompt('Какого цвета ваш телефон?'),
            };

        let person = {
            name: prompt('Введите имя'),
            surname: prompt('Введите фамилию'),
            married: confirm('Этот человек состоит в браке?')
            } 

            console.log( notebook );
            console.log( phone   );
            console.log( person );  


//8
alert("сообщение");
var x = prompt("Введите x", "1");
if (confirm("Точно "+x+"?"))
    alert("Вы нажали Ок");
else 
    alert("Вы нажали Отмена");


//9
// Получаем количество чисел которые нам надо вывести
var count = window.prompt('Please enter number.', 0);

// Определяем базовое число
var currentNumber = 2;

//Продолжаем цикл до тех пор пока количество требуемых для отображения чисел не достигнет нуля  
while(count != 0) {
    if(isNatural(currentNumber)) {
        console.log(currentNumber);
        count--;
    } 
    currentNumber++;
}

// Определяем функцию которая проверяет натурайное ли число или нет
function isNatural(number) {
    for (var i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}



//9
// Получаем количество чисел которые нам надо вывести
var count = window.prompt('Please enter number.', 0);

// Определяем базовое число
var currentNumber = 2;

//Продолжаем цикл до тех пор пока количество требуемых для отображения чисел не достигнет нуля  
while(count != 0) {
    if(isNatural(currentNumber)) {
        console.log(currentNumber);
        count--;
    } 
    currentNumber++;
}

// Определяем функцию которая проверяет натурайное ли число или нет
function isNatural(number) {
    for (var i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

//10
var i = 0;

    while(true) {

    i++;

    if(Math.random() > 0.9) {

        alert(i);

        break;

    }

}

//11
var n = prompt('укажите любое число'); 

let str = ''; 

for (let i = 0; i < n; i++) {
	str = str + '#';
}

console.log(str); 

//12

const array = Array.from([0,1, 2, 3, 4], x => x ** 3);

alert(array); 


//вариант 2
var n = prompt('любое число');

var array = Array.from([(n)], x => x ** 3);

alert(array);
