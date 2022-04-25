
// Get Elements

let hour = document.querySelector('.h')
let minute = document.querySelector('.m')
let sec = document.querySelector('.s')




setInterval(() => {



    let time = new Date();


    let currentHour = time.getHours();
    let currentMinutes = time.getMinutes();
    let currentSeconds = time.getSeconds();
    sec.style.transform = `rotate(${rotate(60, currentSeconds)}deg)`;
    minute.style.transform = `rotate(${rotate(60, currentMinutes)}deg)`;
    hour.style.transform = `rotate(${rotate(12, currentHour) + 12}deg)`;


 

}, 1000)




function rotate(time, currentTime) {

    return (360 * currentTime) / time

}