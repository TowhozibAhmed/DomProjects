const orderForm = document.getElementById('orderForm');




orderForm.addEventListener('submit', (e) => {

    e.preventDefault()

    let startDate = document.querySelector('input[type="date"]').value
    let startTime = document.querySelector('input[type="time"]').value
    let dateConcat = startDate + startTime;
    let currentTime = new Date();
    let endTime = new Date(startTime + startDate);



    let timeDiff = endTime.getTime() - currentTime.getTime();

    console.log(timeDiff);


})
