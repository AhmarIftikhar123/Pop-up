const show_btn = document.getElementById('show');
const hide_btn = document.getElementById('hide');
const popup = document.querySelector('.popup');

show_btn.onclick = ()=>{
    popup.classList.add('show');
}

hide_btn.onclick = ()=>{
    popup.classList.remove('show');
}

