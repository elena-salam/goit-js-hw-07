// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и 
// выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории 
// (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelectorAll('li.item');
// console.log(categoriesRef);
console.log(`В списке ${categoriesRef.length} категории`);

//  ****************1 Var******************
// [...categoriesRef].forEach((el)=>{
//     // console.log(el.firstElementChild, el.lastElementChild);
//     // console.log(el.querySelectorAll('h2').textContent);
//     // console.log(el.querySelectorAll('li').length);
//     console.log(`Категория: ${el.firstElementChild.textContent} Количество элементов: ${el.lastElementChild.children.length}`);

// });

//  ****************2 Var******************
[...categoriesRef].forEach((el)=>{
   
    console.log(`Категория: ${el.querySelector('h2').textContent}, 
    Количество элементов: ${el.querySelectorAll('li').length}`);

});