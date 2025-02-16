// Типы данных: String 
// Строка состоит из текста "буквы", цифры "123", пунктуация и другие знаки "!"№;%:?*"


// строка состоит из спец симболов (кавычки, переход, строки и тд)
// Для использования, нужно за-экранирвоать - поставить один слэш перед
// let symbolString = '\'';
// console.log(symbolString); // Первая и последняя кавычка помечает как тип данных строка, слэш помечает что следующий симбол будует печататся. То бишь в данном случае показывается , что будет отображаться  одинарная кавычка 
// console.log('This test has single quote:\' single quote\'');
// Пример со слешем
// let symbol = '\/';
// console.log(symbol); // Принт "/"

// \r - перенос строки
// let r = "loren\rgepegeg";
// console.log(r);

// \n - текст отображается с новой строки
// let n = "First line\nSecond line";
// console.log(n);

// \t - абзац
// let t = "\tMy text tabbed"
// console.log(t)

// Задачка
// Что сделать чтоб исправит ошибку 
// let str = 'This's Peter's string';
// console.log(str)
// Решение
// let str = 'This\'s Peter\'s string';
// console.log(str)

// *******************************************************//

// Конкантинация строк 
// const str1 = 'Hello'
// const str2 = 'World'
// const res = str1 + ' ' + str2;
// console.log(res)
// или 
// console.log(str1 + ' ' + str2)

// Плюсы ставить не всегда удобно, по этому придумали:
// const firstName = 'John';
// const lastName = 'Smith';

// const res = 'Hello. My name is ' + firstName + ' ' + lastName + '.'
// console.log(res) 
// А можно так. Ставим обратніе кавычки ``(Shift+~) и делаем как прописано ниже
// const res = `Hello. My name is ${firstName} ${lastName}.`;
// console.log(res);
// Такой формат написания "${variable}"" вставляет обьявленную переменную, которая прописана внутри фигурных скобок в текст и приобразует переменную в строку

// *******************************************************//

// Методы строк 
// Методы строк- это уже готовые, написаные кусочки когда прописаны не нами и уже встроены в JS
// Каждый метод отвечает за одну определенную функцию

// Длинна строки
// const str = "Hello World"
// const strLength = str.length
// console.log(strLength) // Так же можно сразу прописывать через console.log
// console.log(str.length)

// Индекс буквы -порядковый номер елемента в строке 
// Индексы всегда начинается с 0
// Индекс ставится в квадратные скобки [] после переменной, без пробелов 
// const str = 'Hello World'
// console.log(str[0]) //H
// console.log(str[3]) //L
// console.log(str[13])// undefined

// Форматирование строк
// const str = 'Hello World'
// console.log(str.toUpperCase()) //Принт переменной с большим регистром
// console.log(str.toLowerCase()) //Принт переменной с маленьким регистром

// Найти букву зная индекс
// const str = 'Hello World'
// console.log(str.charAt(4)); //o
// console.log(str.charAt(str.length - 1)); 
// Еще вариант записи 
// const last = str.length - 1;
// console.log(str.charAt(last))

//Извлечение под-строки
// const str = 'Hello World'
// console.log(str.substring(1,4)); // - substring выдадает частичку строки в заданом диапозоне 1-е значение включая по 2-е не включая
// console.log(str.substring(1)) // если указать только один индекс, то будет принт с указаного 1-го индекса и до конца, поскольку нету второго значения


