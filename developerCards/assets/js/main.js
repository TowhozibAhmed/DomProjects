//  Get Elements

const addDeveloperForm = document.getElementById('addDeveloperForm');
const developerCardsWrapper = document.getElementById('developerCards')
const clearData = document.getElementById('clearData')

clearData.addEventListener('click', (e) => {

    e.preventDefault()

    localStorage.removeItem('devsData');

    allDevs();

})

addDeveloperForm.addEventListener('submit', function (e) {

    e.preventDefault();


    let name = this.querySelector('input[name="name"]')
    let gender = this.querySelector('input[name="gender"]:checked')
    let skills = this.querySelectorAll('input[name="skills"]:checked')
    let photo = this.querySelector('input[name="photo"]')

    //  Get Skill Data

    let skillsData = [];

    for (let i = 0; i < skills.length; i++) {

        skillsData.push(skills[i].value);

    }


    let dataArray;

    if (getData('devsData')) {
        dataArray = getData('devsData');
    } else {
        dataArray = [];
    }

    dataArray.push({
        name: name.value,
        gender: gender.value,
        skills: skillsData,
        photo: photo.value,
    })



    sendData('devsData', dataArray)


    allDevs()

})

allDevs()

function allDevs() {



    developerCardsWrapper.innerHTML = ''

    let allDevsData = getData('devsData');

    allDevsData.map(data => {


        let skillList = '';

        data.skills.map(dataList => {
            skillList += ` <li class="list-group-item">${dataList}</li>`
        })


        developerCardsWrapper.innerHTML += `
        
        <div class="col-md-4 col-sm-6">
            <div class="single__developer__card card">
                <div class="single__developer__card__thumb">
                    <img src="${data.photo}"
                        alt="Developer Photo">
                </div>
                <div class="single__developer__card__content card-body">
                    <h4>${data.name}</h4>
                    <p>Gender: <span>${data.gender}</span></p>
                    <hr>
                    <p>Skills :</p>
                    <hr>
                    <ul class="list-group">
                        ${skillList}
                    </ul>
                </div>
            </div>
        </div> 

        `

    })



}
