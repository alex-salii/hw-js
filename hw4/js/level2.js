//1
const myimgEle = document.getElementById('myimg');

function isLink(link) {
    if (link !== ' ' && link.length >= 10) {
        return link;
    } else {
        return null;
    }
}

function isNumber(number) {
    if (!isNaN(number)) {
        return number;
    } else {
        return null;
    }
}

function createImage(link, angle) {

    if (isLink(link) && isNumber(angle)) {
        let image = document.createElement('img');
        image.classList.add('myimg');
        image.setAttribute('src', link);
        image.setAttribute('alt', 'random image');

        image.style.transform = `rotate(${angle}deg)`;

        document.body.appendChild(image);
    }
}

function start(numberOfImages) {
    const questionImage = prompt('Введите ссылку');
    const questionAngle = +prompt('На сколько градусов повернуть?');

    let angleSum = 0;

    for (let i = 0; i < numberOfImages; i++) {

        angleSum += questionAngle;

        createImage(questionImage, angleSum);
    }
}
const numberOfImg = +prompt('Сколько нужно картинок?');

start(numberOfImg);

//2   доделать
function imTag {

    var myimg = document.getElementById('myimg');

    if (myimg === null) {
        alert(' нельзя удалить этот тег, потому что в вёрстке этого тега нету');
    } else {
        myimg.remove();
    }

}
imTag(myimg);






//3
table = document.createElement('table');

table.style.textAlign = 'right';

table.style.fontFamily = 'monospace';

for (i = 1; i < 10; i++) {

    row = document.createElement('tr');

    for (j = 1; j < 10; j++) {

        cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');

        cell.appendChild(document.createTextNode(i * j));

        cell.style.padding = '4px';

        cell.style.width = 100 / 9 + '%';

        row.appendChild(cell);

    }

    table.appendChild(row);

}

document.body.appendChild(table);


//4

table.onmouseover = function (event) {
    let target = event.target;
    target.style.background = 'blue';
    text.value += "mouseover " + target.tagName + "\n";
};

table.onmouseout = function (event) {
    let target = event.target;
    target.style.background = '';
    text.value += "mouseout " + target.tagName + "\n";
};

//5

var elem = document.getElementById('task');
elem.addEventListener('click', func);
var elem1 = document.getElementsByClassName('inp');

function func() {
    var sum = 0;
    for (var i = 0; i < elem1.length; i++) {
        sum += +elem1[i].value;
    }
    var newElem = document.getElementById('sum');
    newElem.value = sum;
}    


//6 
function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    };
}
var persons = [{
    name: 'Vasyan',
    age: 21
}, {
    name: 'Kolyan',
    age: 22
}, {
    name: 'Mashka',
    age: 17
}];
byField();

persons.sort(byField('age'));
persons.forEach(function (persons) {
    console.log(persons.age);
});


//7 нужно доделать в средине
var array = [' hello darkness   my old   friend ', ' i\'ve come to   talk  with   you again    '];
array = array.map(function (el) {
    return el.trim();
});
console.log(array);
// работает
var str = ' hello darkness   my old   friend ' + ' i\'ve come to   talk  with   you again    ';
str = str.replace(/ +/g, ' ').trim();

//8
let array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));


//вариант 2
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}

console.log(indices);