
let calArray = [];
let calData;

let getVal = (val) => {




    calArray.push(val)


    document.querySelector('.calculator-monitor-main').innerHTML = calArray.join('')
    document.querySelector('.calculator-monitor-output').innerHTML = 0

}


let finalResult = () => {

    calData = calArray.join('')

    document.querySelector('.calculator-monitor-output').innerHTML = eval(calData)

}