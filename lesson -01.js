// Модуль 1. Заняття 1. Змінні, типи та оператори

// const getOptions = require("@npmcli/fs/lib/common/get-options");

// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = (108 + 223) - (2 * 5);
// console.log(result);

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round().
//  Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots} bots in stock `;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання).
//  Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';


// const bmi = weight / height;
// console.log(bmi); // 28.8

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// // Example 8 - Логічні оператори
// // Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null.
// В іншому випадку має присвоюватися значення defaultValue.Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = null !== incomingValue ? incomingValue : defaultValue;
// console.log(value);

// Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 450;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// Спеціальні значення
// let userName;
// console.log(userName);

// let value = null;
// console.log(value);

// let status = null;
// console.log(typeof status); // виведе "object"

// function getFileName(file) {
//     const value = file.indexOf('.');
//     if (value !== -1) {
//         return file.slice(0, value);
//     }
    
    
//     return file.
 

// console.log(getFileName("index.js"))
// function calculateTotal(number) {
//     let sum = 0;
//     let num = 1;

//    while (num <= number) {
//     console.log(number);
//        sum += num;
//        num ++;
//     }
//     return sum;
// }
// console.log(calculateTotal(15))
// function calculateTotal(number) {
//   let sum = 0;
//     for (let i = 0; i <= number; i +=1) {
//         sum += i ;
//     }
//     return sum;
// }
// console.log(calculateTotal(3));

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for(let i = 0; i <= number; i ++ ){
//       if (i % 2 === 0) {
//           sum += i;
//     }
//   }
//   return sum;
// }
// console.log(calculateEvenTotal(7))

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
    
//     if (i % 5 === 0) {
//         number = i;
//         console.log(number);
//     break;
//     }
    
    
// }
// function findNumber(start, end, divisor){
//     for (let i = start; i <= end; i++){
//         if (i % divisor === 0) {
//             console.log(i)
//             return i;
            
//         }
        
//     }
    
// }
// console.log(findNumber(2, 6, 5));

// function getOrderQuantity(order) {
    
//     if (order.length >= 0) {
//         return order.length;
      
//   }
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
// function getLastElementMeta(array) {
//     const lastImdex = array.length - 1;
//     const lastElement = array[lastImdex];
//     return [lastImdex, lastElement];
   
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// function getExtremeElements(array) {
//     const firstElement = array[0];
//     const lastIndex = array[array.length-1];
//     return [firstElement, lastIndex];
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// function getLength(array) {
//   const leng = array.join("");
//   return leng.length
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]))
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// function getSlice(array, value) {
//     const index = array.indexOf(value);
//     if (index === -1) {
//         return [];
//     }
//     return array.slice(0, index + 1);
    
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));

// function createArrayOfNumbers(min, max) {
//     const pushNam = [];
//     for (let i = min; i <= max; i ++){
//         pushNam.push(i)
//     }
//     return pushNam
// }
// console.log(createArrayOfNumbers(1, 3));

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//     console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i++){
        
//          total += order[i]
//     }
//     return total;

// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// function getEvenNumbers(start, end) {
//     const total = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             total.push(i);
//         }
        
//     }
//     return total;
// }
// console.log(getEvenNumbers(2, 5));


// function checkStorage(storage, item) {
//     const itemFruits = item.toLowerCase();
//     const fruits = storage.includes(itemFruits);
    
//     if (fruits) {
//             return  `${itemFruits} is available to order!`;
//     } else {
//     return "Sorry! We are out of stock!";
//     }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

// function getCommonElements(array1, array2) {
//     var newArray = [];
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//                 newArray.push(array1[i]);
//         }
       
        
//     }
//     return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     if (totalPrice) {
//          return `You ordered ${quantity} droids worth ${totalPrice} credits!`
//      }
// }
// console.log(makeTransaction(3, 1000)); // "You ordered 5 droids worth 15000 credits!"
// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
//     if (totalPrice) {
//         return `Shipping to ${country} will cost ${totalPrice} credits`
//     }
// }
// // console.log(getShippingMessage("Australia", 1000, 50)); // "Shipping to Australia will cost 170 credits"

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     if (totalPrice > customerCredits) {
//         return "Insufficient funds!"
//     } else {
//         return `"You ordered ${quantity} droids worth ${totalPrice} credits!"`
//     }
// }
// console.log(makeTransaction(8, 2000, 10000));

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//        return message;
//     }
//     return message.slice(0, maxLength - 3) + "...";
// }

// console.log(formatMessage("Curabitur ligula sapien", 18)); // "Curabitur ligula..."

// function checkForSpam(message) {
//     const registerMes = message.toLowerCase();
//     return registerMes.includes('spam') || registerMes.includes('sale');
    
// }
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function getShippingCost(country) {
    
//     switch (country) {
//         case "China":
//             return `Shipping to China will cost 100 credits"`;
            
//         case "Chile":
//             return `Shipping to Chile will cost 250 credits"`;
            
//         case "Australia":
//             return `Shipping to Australia will cost 170 credits"`;
            
//         case "Jamaica":
//             return `Shipping to Jamaica will cost 120 credits"`;
            
    
//         default:
//             return "Sorry, there is no delivery to your country";
//     }
// }
// console.log(getShippingCost("Chile")); // "Shipping to Australia will cost 170 credits"
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let value of order) {
//         total += value;
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
// function createReversedArray() {
    
//     const args = Array.from(arguments);

//     return args.toReversed();
// }
// console.log(createReversedArray(12, 85, 37, 4))

// function calculateTax(amount, taxRate = 0.2) {
//     return amount * taxRate;
// }
// console.log(calculateTax(100));
// function slugify(title) {
//     return title.toLowerCase().split(" ").join("-");
//     // const sl = slugLower.slug("-")
    
// }
// console.log(slugify("Arrays for beginners"))

// function makeArray(firstArray, secondArray, maxArray) {
//     const newArray = firstArray.concat(secondArray);
//     console.log(newArray);
//     if (newArray.length > maxArray) {
//       return newArray.slice(0, maxArray);
//     }

    
//     return newArray.slice();
    
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]

// function filterArray(numbers, value) {
    // const newArray = [];
    // for (const number of numbers) {
    //     if (number > value) {
    //         newArray.push(number)
    //     }
    // }
    // return newArray;
    // return numbers.filter(number => number > value);
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
    // [emailInputName]: "henry.carter@aptmail.com",
    // [passwordInputName]: "jqueryismyjam",
    
// };
// console.log(credentials.email);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key),
//     values.push(apartment[key])
//     }
// console.log(keys);
// console.log(values)
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);

// }
// console.log(values)

// function countProps(object) {
//     const count = Object.keys(object);
//     console.log(count);
//     return count.length;
// }
// console.log(countProps({ name: "Mango", age: 2 })); // ====> 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //====> 3

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(values);

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const counts = Object.values(salaries)
//     console.log(counts);
//     for (const count of counts) {
//         totalSalary += count
//     }
            
//     return totalSalary;
    
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);
// function getProductPrice(productName) {
//   const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     for (const product of products) {
//         // console.log(product);
//         if (product.name === productName) {
//             return product.price
            
//         }
        
//     }
// }

// console.log(getProductPrice (""));

// console.log(getProductPrice("Grip"));
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];
// console.log(books.length);

// let totalRating = 0;
// console.log(totalRating);

// for (const book of books) {
//   totalRating += book.rating;
// }
// console.log(totalRating);
// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     const newProducts = []
//   for (const product of products) {
//     // console.log(propName);
//     // console.log(pro);
    
      
//       if (product[propName]) {
//           newProducts.push(product[propName])
//       }
        
//     }
//     return newProducts;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues(" categori"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
    
//     }
    
         
//   }
//   return `Product ${productName} not found!"`
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Scanner"));
// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   }
// }
// console.log(atTheOldToad.getPotion());
// console.log(atTheOldToad.addPotion("Invisibility"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//    addPotion(potionName) {
//     this.potions.push(potionName)
//   },
// };
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//     updatePotionName(oldName, newName) {
//       for (const potion of this.potions) {
//           if (potion.name === oldName) {
//            return potion.name =  newName;
//         }
//       }
//   }
 
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
// console.log(atTheOldToad.getPotions());

// function addOverNum(value, ...args) {
//     let totalNum = 0;
//     for (const arg of args) {
//         console.log(arg);
//         if (arg > value) {
//             totalNum += arg;
//         }
        
//     }
//     return totalNum
// };


// console.log(addOverNum(50, 15, 27) );
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36) );

// function getExtremeScores(scores) {
//     return {
//         best: Math.max(...scores),
//         worst: Math.min(...scores),
//     };

// };
//  console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
 
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// function isEnoughCapacity(products, containerSize) {
//     let total = 0;
//     const productFruts = Object.values(products);
//     for (const productFrut of productFruts) {
//         total += productFrut;
//         if (total > containerSize) {
//             return false;
            
//         };
            
        
//     }
//     return true;
// };
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// function calcAverageCalories(days) {
//   if (!days.length) return 0;
//   let total = 0;
//   for (const day of days) {
//      total += day.calories;
      
    
//   };
   
//   return total / days.length
// }
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270
// console.log(
//   calcAverageCalories([])
// ); // 0
// const profile = {
//     username: "Jacob",
//   playTime: 300,

//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`
//   },
//   changeUsername(newName) {
//     this.username = newName;
    
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   }

// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }


// const result = makePizza();
// const pointer = makePizza;

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//          return  callback(pizzaName);

// }

// console.log(makeMessage("Royal Grand", makePizza));
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(orderedItem => totalPrice += orderedItem);

//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//     const newArray = [];
//     numbers.forEach(number => {
//         if (number > value) {
//             newArray.push(number);
//         }
        
        
//     });
//     return newArray;
                
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function changeEven(numbers, value) {
    // const newArray = [];
    // numbers.forEach(number => {
    //     if (number % 2 === 0) {
    //         newArray.push(number + value);
    //     } else {
    //         newArray.push(number);
    //     }
               
        
    // });
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //       numbers[i] = numbers[i] + value;
// //       };
//     //     };
//     return newArray;
// };


// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);

// console.log(evenNumbers);
// console.log(oddNumbers);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }

 
// ];


// const getUserWithEmail = (users, email) => {
   
// }
// const users = [
//    {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
// ];


// const calculateTotalBalance = (users) => {
//    return users.reduce((value, user) =>  value + user.balance, 0);
// };
    
//     console.log(calculateTotalBalance(users));
// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

    
// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//  .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
// .toSorted((a, b) => a.localeCompare(b))
  
//   console.log(names);
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

  
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));

// console.log(child.hasOwnProperty("name"));

// console.log(child.age);
// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//       if (newPrice <= Car.maxPrice) {
//         this.#price = newPrice;
//       }
    
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 20000;
// console.log(audi.price); // 49000
// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price){
//       if (price <= Car.#maxPrice) {
//         return "Success! Price is within acceptable limits"
//       } else {
//           return "Error! Price exceeds the maximum"
//     }
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//     constructor(params) {
//       super(params.email)
//     this.email = params.email;
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   blacklistedEmails = [];
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     // this.blacklistedEmails.push(email);
//     this.access = params.access;
//     };
//   blacklist(email){
//       this.blacklistedEmails.push(email);
//     };
//     isBlacklisted(email) {
//       return  this.blacklistedEmails.includes(email);
//     }

    
  
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   }

// }
// const incrementBtn = document.querySelector(".js-increment");
// const decrementBtn = document.querySelector(".js-decrement");
// const valueEl = document.querySelector(".js-value");

// // console.log(incrementBtn);
// // console.log(decrementBtn);
// // console.log(valueEl);

// decrementBtn.addEventListener("click", function () {
//   console.log('клинкули на дект');
//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
  
// });

// incrementBtn.addEventListener("click", function () {
//   console.log('клинкули на інкем');
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// }


// class Storage {
//   #item = [];
//   constructor(item) {
//     this.#item = item;
//   }
//   getItems() {
//     return this.#item;
//   }
//   addItem(newItem) {
//     this.#item.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#item = this.#item.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value = this.#value + str;
    
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
    
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// <img src="https://picsum.photos/id/11/320/240" alt="Nature" />
/* Frame 2 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 16px;
// gap: 16px;

// width: 392px;
// height: 264px;

// background: #F6F6FE;
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Group 1 */

// width: 360px;
// height: 40px;


// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
