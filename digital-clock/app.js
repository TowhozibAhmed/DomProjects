
// const hours = document.getElementById('hours');
// const minutes = document.getElementById('minutes');
// const seconds = document.getElementById('seconds');



// setInterval(() => {

//     let date = new Date();

//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();

//     hours.innerHTML = h;
//     minutes.innerHTML = m;
//     seconds.innerHTML = s;


// }, 1000)


//// Another Way


const clock = document.querySelector('.clock');


let addZero = (time) => {
    return time < 10 ? '0' + time : time
}


clock.innerHTML = 'Loading...'


setTimeout(() => {


    setInterval(() => {

        let date = new Date();
    
        let h = date.getHours();
        // let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let m = date.getMinutes();
        let s = date.getSeconds();
    
        let hours = '';
        if (h == 0) {
            hours = 12
        } else if (h > 0 && h <= 12) {
            hours = h
        } else {
            hours = h - 12;
        }
    
        clock.innerHTML = `${addZero(hours)} : ${addZero(m)} : ${addZero(s)} ${h > 12 ? 'PM' : 'AM'}`
    
    }, 1000)

}, 1000)
