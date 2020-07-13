// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
//   ];
//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().


const list = document.querySelector('ul');
const container = document.createDocumentFragment();

  const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

ingredients.map(ingredient=>{
  const li = document.createElement('li');
  li.textContent = ingredient;
  // console.log(li);
  container.appendChild(li);
});

list.append(container);
console.log(list);
 




