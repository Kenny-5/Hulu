const menuicon = document.getElementById('mbp');
const drop = document.getElementById('the-dropdowns');

menuicon.addEventListener('click', function(){
     drop.classList.toggle('reveal');
})