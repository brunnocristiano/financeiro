// TOGGLE MENU
var burger = document.getElementById('open-burger');
var menu = document.getElementById('menu-mobile-wrapper');
var btnX = document.getElementById('btn-close-menu');

burger.onclick = () => {
    (menu.style.display === "none") ? menu.style.display = "block" : menu.style.display = "none";
}

btnX.onclick = () => {
    (menu.style.display === "block") ? menu.style.display = "none" : menu.style.display = "block";
}

// FORM VALIDATION
var select = document.querySelector('#transaction-type');
var item = document.querySelector('#item.name');
var product = document.querySelector('#product-price');
var error = document.querySelector('.error');

function formValidation(frm) 
{
    if (select.value == "" || select.value == null || item.value == " " || item.value == null || product.value == "" || product.value == null)
    {
        error.innerHTML = "<em><strong>[ERRO]: Preencha todos os campos do formulÃ¡rio</em></strong>";
        error.style.color = 'red';
        // incluir setTimeout para fazer resetar o form.
    } 
    else 
    {
        console.log('Form OK')
    }
    console.log('Not a valid form')
    return false;
}


