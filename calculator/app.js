
let calArray = [];
let calData;

let getVal = (val) => {


    calArray.push(val)


    document.querySelector('.calculator-monitor-main').innerHTML = calArray.join('')
    document.querySelector('.calculator-monitor-output').innerHTML = 0

}



let allClear = () => {


    calArray = []

    document.querySelector('.calculator-monitor-main').innerHTML = 0
    document.querySelector('.calculator-monitor-output').innerHTML = ''
    console.log(calArray);

}




let finalResult = () => {

    calData = calArray.join('')

    document.querySelector('.calculator-monitor-output').innerHTML = eval(calData)

}



let back = () => {

    calArray.pop()

    document.querySelector('.calculator-monitor-main').innerHTML = calArray.join('')
 

}
