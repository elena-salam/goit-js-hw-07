// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.



const inputRef = document.querySelector('#name-input');
const nameLableRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInputChange);


function handleInputChange(event){
    if(event.target.value === ''){
        nameLableRef.textContent = 'незнакомец';
    }else{
        nameLableRef.textContent = event.target.value
    };
    
};
