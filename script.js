const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const text = document.querySelector('.fancy');
const strText = text.textContent;

console.log(strText);

menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

