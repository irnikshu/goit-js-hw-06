const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    // const formElements = event.currentTarget.elements;
    // const mail = formElements.email.value;
    // const pasword = formElements.password.value;
    // const formData = {
    //     mail,
    //     pasword,
    // }
    // console.log(formData);
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            alert("Все поля должны быть заполнены")
        }
    });
    
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });
    
  
    // document.getElementById('login-form').reset();
    event.target.reset();
}