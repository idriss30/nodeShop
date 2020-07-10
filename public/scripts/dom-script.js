// navigation scripts
//create button listener

const button = document.querySelector(".collapse");
const toggleMenu = document.querySelector(".header_hidden-container");



// display menu on click mobile
button.addEventListener('click', ()=>{
    if(toggleMenu.style.display === 'flex'){
       toggleMenu.style.display = "none"
    }else{
        toggleMenu.style.display = 'flex';
    }
  
})