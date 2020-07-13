// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

/* <input id="font-size-control" type="range" /> */
/* <br /> */
/* <span id="text">Абракадабра!</span> */

const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener('input', (handleRangeChange));

function handleRangeChange(event){
    console.log(event.target.value);
    const val = range.value;
    text.style.fontSize = val+ 'px';

};

// можно установить атрибуты мин и макс значения счетчика.
// range.setAttribute('min', '10');
// range.setAttribute('max', '30');