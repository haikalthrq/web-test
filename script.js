const name = document.getElementById('name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = []    
    if (name.value === '' || name.value === null){
        message.push('Name is required')
    }
    if (email.value === null || email.value === '') {
        message.push('Email is required')
    }
    if (message.length > 0){
        e.preventDefault()
        errorElement.innerText = message.join(", ")
    } 
    e.preventDefault();
})

var firstIndex = 0;
function automaticSlide() {
    setTimeout(automaticSlide, 3000);
    var pics;
    const img = document.querySelectorAll('img');
    for (pics = 0; pics < img.length; pics++) {
        img[pics].style.display = "none";
    } 
    firstIndex++;
    if (firstIndex > img.length) {
        firstIndex = 1;
    }
    img[firstIndex - 1].style.display = "block";
}
automaticSlide();