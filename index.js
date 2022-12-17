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
// const max = 50;
// const min = 23;

// for (let index = max; index >= min; index--) {

// //    if (index % 2 === 0) {
// //     console.log(index);
// //    }
//     if ( index % 2 !== 0 ) {
//   continue
//     } else {
//  console.log(index)
//     }

// }
//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести строку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const login = prompt('Введите логин');

// console.log(login);

// if (login === "Админ") {
//   const password = prompt('Введите пароль');
//   console.log(password === "Я главный" ? 'Здравствуйте!' : 'Неверный пароль!');
// } else if (login === null) {
//   console.log('Отменено');
// } else {
//   console.log("Я вас не знаю");
// }

// 5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let result = "";
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);

// let number = prompt("Ведіть число");
// let total = 0;

// do {
//   total += Number(number);
//   number = prompt("Ведіть число");
// } while (number === true);

// while (number) {
//   total += Number(number);
//   number = prompt("Ведіть число");

//   console.log(total);
// }

// console.log(total);


// ___ Practice 12.17.22 ----------------------------------------------------------------

// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//     griffindor: [{
//             name: "Harry",
//             points: 17
//         },
//         {
//             name: "Hermiona",
//             points: 19
//         },
//         {
//             name: "Ron",
//             points: 14
//         },
//     ],
//     sliserin: [{
//             name: "Draco",
//             points: 117
//         },
//         {
//             name: "Goyl",
//             points: 14
//         },
//         {
//             name: "Crabbe",
//             points: 5
//         },
//     ],

//     getPoints(faculty) {
//       let sum = 0;
//       for (const {points} of this[faculty]) {
//         sum += points;
//       }
//       return sum;
//     },

//     getBest() {
//       let name = '';
//       let bestPoints = 0;

//       const keys = Object.keys(this);
//       for (const key of keys) {
//         if (typeof this[key] === 'object' && this.getPoints(key) > bestPoints) {
//           bestPoints = this.getPoints(key);
//           name = key;
//         }
//         // console.log(typeof this[key]);
//       }
//       return name;
//     }
// }


// console.log(hogvarts.getBest())


// ___ CodeWars: count dublicates in string ----------------------------------------------------

// function duplicateCount(text) {
//   const letterArray = text.split('');
//   const dublicates = [];
//   for (let i=0; i<letterArray.length; i++) {
//     for (let j=i+1; j<letterArray.length; j++) {
//       if (letterArray[i] === letterArray[j] && !dublicates.includes(letterArray[i])) {
//         dublicates.push(letterArray[i]);
//       }
//     }
//   }
//   return dublicates.length
// }

// console.log(duplicateCount('aabbccabde'))



// ___ CodeWars: sum of interval ---------------------------------------------------------------

function getSum( a,b ) {
   //Good luck!
  // let sum = 0;
  // if (a === b) {
  //   return 0;
  // } else if (a < b) {
  //   for (let i=a; i<=b; i++) {
  //   sum += i;
  //   } 
  // } else {
  //   for (let i=b; i<=a; i++) {
  //   sum += i;
  //   }
  // }
  // return sum;

  min = Math.min(...arguments);
  max = Math.max(...arguments); 

  return (max - min + 1) * ((max - min) / 2)
}

console.log(getSum(0, 10));
