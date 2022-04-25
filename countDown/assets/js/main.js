const start = document.getElementById('start');
const stop = document.getElementById('stop');
const countInput = document.getElementById('countInput');
const output = document.getElementById('output');
const loader = document.querySelector('.loader-progress')

let countValue;

let count;

function loaderFunction(startValue, currentValue) {

    return (currentValue * 100) / startValue;

}


start.addEventListener('click', () => {
    countValue = countInput.value;

    if (countValue == '') {
        output.innerHTML = 'Invalid Number';
    } else {
        output.innerHTML = 'Loading..';
    }


    count = setInterval(() => {

        output.innerHTML = countValue;

        let loaderWidth = loaderFunction(countInput.value, countValue)

        loader.style.width = `${loaderWidth}%`;


        if (loaderWidth >= 50 && loaderWidth < 100) {
            loader.style.backgroundColor = 'green';
        } else if (loaderWidth < 50 && loaderWidth >= 25) {
            loader.style.backgroundColor = 'yellow';
        } else if (loaderWidth < 25) {
            loader.style.backgroundColor = 'red';
        }

        if (countValue == 0) {
            clearInterval(count)
        }

        countValue--

    }, 1000)

    setInterval(() => {



    }, 1000)

})


stop.addEventListener('click', () => {

    clearInterval(count)

})