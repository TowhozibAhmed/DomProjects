const signUpForm = document.getElementById('signUpForm');
const showData = document.querySelector('.showData');
const validationMessage = document.querySelector('.validationMessage')
let skill;


const testBtn = document.getElementById('testBtn');



// testBtn.onclick = function () {

//     setInterval(() => {
//         validationMessage.innerHTML = `<p class="alert alert-danger" >All Fields Are Required <button class="btn-close" data-dismiss="alert">&times</button></p>`
//     }, 4000);


// }



function validationMessageFunction(msg, type = 'danger') {

    if (type == 'danger') {
        return `<p class="alert alert-danger p-2 d-flex align-items-center justify-content-between">${msg} <button class="btn-close" data-dismiss="alert"></button></p>`
    } else {
        return `<p class="alert alert-${type} p-2">${msg}</p>`
    }

}



signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let nameInput = document.querySelector('input[placeholder="Name"]');
    let emailInput = document.querySelector('input[placeholder="Email"]');
    let selectForm = document.querySelector('select');
    let genderSelect = document.querySelector('.genderSelect input[type="radio"]:checked');
    let skillSelect = document.querySelectorAll('.skillSelect input[type="checkbox"]:checked');

    function skills() {
        let skill = [];
        for (let i = 0; i < skillSelect.length; i++) {
            skill.push(` ${skillSelect[i].value}`)
        }
        return skill;
    }

    if (nameInput.value == '' || emailInput.value == '' || selectForm.value == '') {
        validationMessage.innerHTML = validationMessageFunction('All Fields Are Requireds')
    } else {
        validationMessage.innerHTML = validationMessageFunction('All Fields Info Are Correct', 'success')
        showData.innerHTML = `
        <p>Name : ${nameInput.value}</p>
        <p>Email : ${emailInput.value}</p>
        <p>Location : ${selectForm.value}</p>
        <p>Gender : ${genderSelect.value}</p>
        <p>Skills : ${skills()} </p>
      `
        localStorage.setItem('Name', nameInput.value);
        localStorage.setItem('Email', emailInput.value);
        localStorage.setItem('Location', selectForm.value);
    }

    // setTimeout(() => {

    //     validationMessage.innerHTML = ''

    // }, 6000);


})
