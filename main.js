//Первое задание

// let x = prompt('Введите свое имя')
// let y = +prompt('Введите год рождения')
// let a = +prompt('Введите нынешний год')

// function dz(min,max) {
//    return x + ' Ваш возраст ' + ( a - y )

// }
// console.log(dz(x,y,a));

// Второе задание




let que = +prompt('Введите колличестро примеров');

function Example(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function symbolExample() {
    return Math.floor(Math.random() * (5 - 1) + 1);
}

for(let i = 0; i < que; i++) {
    let exampleNum1 = Example(1, 10), exampleNum2 = Example(1, 10), exampleSymbol = symbolExample(), example = 0;
    if(exampleSymbol == 1) {
        example = exampleNum1 + exampleNum2;
        exampleSymbol = '+';
    }else if(exampleSymbol == 2){
        example = exampleNum1 - exampleNum2;
        exampleSymbol = '-';
    }else if(exampleSymbol == 3){
        example = exampleNum1 * exampleNum2;
        exampleSymbol = '*';
    }else if(exampleSymbol == 4){
        example = exampleNum1 / exampleNum2;
        exampleSymbol = '/';
    }
    let answer = +prompt(exampleNum1 + exampleSymbol + exampleNum2);
    console.log(example == answer ? 'Ваш ответ верный - ' + answer : 'Ваш ответ не верный -' + answer  + '!' + ' Правильный ответ - ' + example  + '!'); 
}