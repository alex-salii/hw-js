///1

let green = document.querySelector('.green') ;
function greenClickHandler(event) {
	console.log('2');
};

let yellow = document.querySelector('.yellow') ;
function yellowClichandler(event) {
	console.log('5');
};


let blue = document.querySelector('.blue') ;
function blueClichandler(event) {
	console.log('8');
};

let red = document.querySelector('.red') ;
function redClichandler(event) {
	console.log('10');
};

green.addEventListener('click',greenClickHandler);
yellow.addEventListener('click', yellowClichandler);
blue.addEventListener('click', blueClichandler);
red.addEventListener('click', redClichandler);

let timer; // пока пустая переменная
let x =30; // стартовое значение обратного отсчета
countdown(); // вызов функции
function countdown(){  // функция обратного отсчета
    document.getElementById('rocket').innerHTML = x;
    x--; // уменьшаем число на единицу
    if (x<0){
        clearTimeout(timer); // таймер остановится на нуле
    	alert ('game over' + ' у тебя ' + sum + ' очков ' );
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
}

let sum = 0

const greenCircle = document.querySelector('.green')
    greenCircle.addEventListener('click', function () {
        let points = document.createElement('points')
        let score = document.querySelector('.score')
        score.append(points)
        sum += 2
    })

const yellowCircle = document.querySelector('.yellow')
    yellowCircle.addEventListener('click', function () {
        let points = document.createElement('points')
        let score = document.querySelector('.score')
        score.append(points)
        sum += 5
    })

const blueCircle = document.querySelector('.blue')
    blueCircle.addEventListener('click', function () {
        let points = document.createElement('points')
        let score = document.querySelector('.score')
        score.append(points)
        sum += 8
    })

const redCircle = document.querySelector('.red')
    redCircle.addEventListener('click', function () {
        let points = document.createElement('points')
        let score = document.querySelector('.score')
        score.append(points)
        sum += 10
    })



//2


Function.prototype.makeProfileTimer = function(...arg){

var time = performance.now();

var x = this(...arg);

time = performance.now() - time;

console.log('Время выполнения = ', time);

return x;

};

 

function otherFunc(a,b){

    console.log(a,b);

}
 
otherFunc.makeProfileTimer(1,2);



//3

(function() {
  let countdown = 5;
    
  function t(){
    console.log(countdown--);

    if(!countdown)
        clearInterval(timer);
  }

  let timer = setInterval(t, 1000);
})();

//4
function myBind(func, context , bindArgs) {
  function wrapper() {
    let args = Object.assign(bindArgs,arguments);
    return func.apply(context, args);
  }
  return wrapper;
}
let pow5 = myBind(Math.pow, Math, [undefined, 5])
let cube = myBind(Math.pow, Math, [undefined, 3]);
alert(pow5(2));//32
alert(cube(3));//27
let zeroPrompt = myBind(prompt, window, [undefined, "0"])
let someNumber = zeroPrompt("Введите число")
alert(someNumber);







