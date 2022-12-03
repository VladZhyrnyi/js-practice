//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const answer = prompt("Какое официальное название JavaScript?");

// if (answer === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// const answer = prompt("Какое официальное название JavaScript?");

// alert(answer === "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!");


//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max
const max = 50;
const min = 23;

for (let index = max; index >= min; index--) {
    
   console.log(index);
}
