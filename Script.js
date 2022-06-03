let namstbutton=document.querySelector('button');
namstbutton.addEventListener('click',inputMsg);
function inputMsg(){
    let name = prompt('Enter your name');
    namstbutton.textContent= 'Roll no.1:' + name;
}
