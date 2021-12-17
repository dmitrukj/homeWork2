// Задание 1
let a1 = true + false
console.log(a1)
// ответ 1, т.к. true = 1  , false=0
let a2 = 12/'6'
console.log(a2)
// ответ 2,  всегда преобразовывает к числу , все кроме +
let a3 = "number" + 15 + 3
console.log(a3)
// ответ number153, сложение строки + чисел= преобразовывает в строку
let a4 = 15 + 3 + "number"
console.log(a4)
// ответ 18number, сначала идет сложение чисел, а затем преобразовывает в строку
let a5 = [1] > null
console.log(a5)
// ответ true, т.к. 1 больше 0
let a6 = "foo" + + "bar"
console.log(a6)
// ответ fooNaN,  из-за унарного оператора + bar преобразуется в число, а это не является числом, то получается NaN.а потом преобразовывается в строку
let a7 = 'true' == true
console.log(a7)
// ответ false, тк == приводит к одному типу- числу, 'true' = NaN  , true = 1
let a8 = false == 'false'
console.log(a8)
// ответ false, тк == приводит к одному типу- числу, false = 0 , 'false' = NaN
let a9 = null == ''
console.log(a9)
// ответ false , не поняла
let a10 = !!"false" == !!"true"
console.log(a10)
// ответ true , !! преобразует в строки true, тк они не пустые , а затем сравнивает
let a11 = ['x'] == 'x'
console.log(a11)
// ответ true , не поняла
let a12 = [] + null + 1
console.log(a12)
// ответ  null1 , тк [] становится строкой, ''+null+1 = 'null1'
let a13 = 0 || "0" && {}
console.log(a13)
// вообще не поняла
let a14 = [1,2,3] == [1,2,3]
console.log(a14)
// ответ false один и тот же тип, но разные объекты
let a15 = !!null
console.log(a15)
// ответ false, !! преобразует в boolean null=0 , а 0 = false
let a16 = !!undefined
console.log(a16)
// ответ false !! преобразует в boolean, undefined = NaN, все пустые значения false

// Задание 2

 let i = 1
 while (i){
    alert(i--);
 }
// когда i будет равно 0, условие станет ложным, и цикл остановится

// Задание 3


let b = 40
while (b<91) {
    console.log(b)
    b ++
}

// Задание 4

 let m = 11
 while (m<=340) {
      if ((m %4) ==0){
      console.log(m);}
      m++;
}

// Задание 5

for (let i = 100; i>-6; i--) {
    console.log(i);
}

// Задание 6

let str = '';
for (let i = 15; i>0; i--) {
    str = str +'y';
    console.log(str);
}

// Задание 7

for (let i = 2; i < 101; i+=2) {
    console.log(i);
}

// Задание 8

let sum = 0
for (let i = 0; i<=100; i ++) {
    sum +=i;
    console.log(sum)
}

// Задание 9

let str = ''
 for (let i = 1; i < 12; i+=2) {
     str = str + i
     console.log(str);
 }

 // Задание 10

let str = ''
for (let i = 123; i>117; i--) {
    str = str + '-' + i
    console.log(str)
}


// Задание 11

let str = ''
for (let i = 1; i<10; i++) {
    str = str + '-' + i
    console.log(str)
}

// Задание 12

let number = prompt("Введите число","");
const n = 25;
if (number>n){
 console.log("хорошо");
 }
 else {
     console.log("попробуйте снова");
 }

let number = prompt("Введите число","");
const n = 25;
number>n ? console.log("хорошо") :  console.log("попробуйте снова");


 // Задание 13

let number = prompt("Введите число","");
const v = 10;
if (number>10) {
    console.log ('все хорошо')
}
else  {
    console.log("не больше 10");
}

