// let firstName = 'John';
// let lastName = 'Adams';
// console.log(firstName + ' ' + lastName)
// firstName = 'Brandon'
// lastName = 'Smith'
// console.log(firstName + ' ' + lastName)

//*************************************//

// let c = 9;
// console.log(typeof c)

// let str = 'Hi 5!'
// console.log(typeof str)

// let y = 9 + '1';
// console.log(y);
// console.log(typeof y);

// let b = true
// console.log(typeof b) -//boolean это тип данных "булиевы значения" к которому относится true

// let x = 'a'/ 6
// console.log(typeof x) -  Строка 'a' не может преобразоваться в число, по это при принте будет выдавать NaN, который является типом данных number

//*************************************//

// Через const необходимо обьявлять значения которые не должны менятся, тобишь констатнты. Например: ссылки на объекты и масивы, функции, елементы DOM(DOM (Document Object Model) – это модель документа, которая позволяет JavaScript взаимодействовать с HTML и изменять содержимое страницы) 
// Примеры DOM елементов 
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Пример DOM</title>
//   </head>
//   <body>
//     <h1 id="title">Привет, мир!</h1>
//     <button class="btn">Нажми меня</button>
//   </body>
// </html>
// где <h1>, <button> - это DOM елементы

//*************************************//

// let num = 15;
// console.log(num > 10 && num<20);   // Так это должно выглядить если значение переменной менять вручную

// let numbers = [5, 12, 18, 25, 10, 20, 15, 30];
// numbers.forEach(num=> console.log(num>10&&num<20)); // Так выглядит проверка при наличии масива чисел и автоматической проверке каждого значения
// Оператор => это стрелочная функция, короткая запись function. Если бы мы писали вместо стрелочной функции function вот что бы получилось
// let numbers = [5, 12, 18, 25, 10, 20, 15, 30];
// numbers.forEach(function(num){ 
//     console.log(num>10&&num<20)
// } )

//*************************************//

// console.log(null||2||undefined) // выведет 2 поскольку null i indefined - это ложные значения, а 2 - истенное. а поскольку там используется 
// Операторы "ИЛИ" используются для проверки множества значений и возвращают первое значеие, которое считается истинным.

// const x = 5;
// const y = 10;
// console.log(x,y)
// console.log(x > 0 && y < 20); // true - потому что x>0 и y<20 (true и true)
// console.log(x < 0 && y > 0);  // false && true = false
// console.log(x < 0 && y < 0); // false && false = false
// console.log(x < 0 && "Hello"); // поскольку первый оператов "true", то выдает "Hello", если бы первый оператор был "false", то выдавало бы "false"

// const a = 0;
// const b = "World";
// console.log(a > 0 || b.length > 0); // false || true = true (второй оператор true по скольку b.length измеряет длинну строки или массива )
// console.log(a > 0 || b.length === 0); // false || false = false (оператор "===" сравнивает и значение и тип данных, а они не идентичны)
// console.log(a > 0 || ""); // Выведет пустую строку "" поскольку оператор || возвращает первое истинное значение, или последнее значение, если все ложные.
// console.log(a < 0 || "Hello"); // выведет "Hello", поскольку это единственное истенное значение 

