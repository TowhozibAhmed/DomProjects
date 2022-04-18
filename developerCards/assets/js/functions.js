
function sendData(key, dataName) {

    let productDataStore = JSON.stringify(dataName);
    localStorage.setItem(key, productDataStore)

    return true;

}


function getData(key) {

    let dataName = localStorage.getItem(key);

    return dataName ? JSON.parse(dataName) : false;


}







// function allProducts() {

//     productLists.innerHTML = ''

//     let allData = ''

//     productDatas.map(pdata => {

//         allData += ` 
            // <div class="col-md-4">
            //     <div class="single__product__card card card-body">
            //         <div class="single__product__card__thumb">
            //             <img src="${pdata.productPhoto}"
            //                 alt="Product Image">
            //         </div>
            //         <div class="single__product__card__content">
            //             <h4>${pdata.name}</h4> 
            //             <p><b><del> ${pdata.productPrice}</del></b>   <b>${pdata.productSalePrice}</b></p> 
            //             <div class="card__btn pt-2">
            //                 <button class="btn btn-success">Add to Cart</button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
//        `
//     })


//     productLists.innerHTML = allData


// }
