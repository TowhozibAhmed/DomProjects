const productForm = document.getElementById('productForm');
let addProduct = document.getElementById('addProduct');
let publish = document.getElementById('publish');
let closeBtn = document.getElementById('closeBtn');
let productLists = document.getElementById('productLists');
let clearProducts = document.getElementById('clearProducts');
let addProductWrapper = document.querySelector('.addProduct__wrapper');

addProduct.addEventListener('click', () => {

    addProductWrapper.style.display = 'block'

})

closeBtn.addEventListener('click', () => {

    addProductWrapper.style.display = 'none'

})

clearProducts.addEventListener('click', () => {

    localStorage.clear();
    allProducts()

})


productForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;
    let productSalePrice = document.getElementById('productSalePrice').value;
    let productImage = document.getElementById('productImage').value;



    if (productName == '' || productPrice == '' || productSalePrice == '' || productImage == '') {
        alert('All Fields Are Required!!')
    } else {


        let productDataArray;
        let productDataGet = getData('Product-Details')


        if (productDataGet) {
            productDataArray = productDataGet;
        } else {
            productDataArray = []
        }

        productDataArray.push({
            name: productName,
            productPrice: productPrice,
            productSalePrice: productSalePrice,
            productImage: productImage,
        })


        sendData('Product-Details', productDataArray);
        allProducts()

    }

})

allProducts()

function allProducts() {

    productLists.innerHTML = ``



    let productDataStore = getData('Product-Details')



    productDataStore.map((pdata) => {
        productLists.innerHTML += `
        <div class="col-md-4">
            <div class="single__product__card card card-body">
                <div class="single__product__card__thumb">
                    <img src="${pdata.productImage}"
                        alt="Product Image">
                </div>
                <div class="single__product__card__content">
                    <h4>${pdata.name}</h4> 
                    <p><b><del> ${pdata.productPrice}</del></b>   <b>${pdata.productSalePrice}</b></p> 
                    <div class="card__btn pt-2">
                        <button class="btn btn-success">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
      `
    })


}











// let productDatas = getData('Product-Details')

// productForm.addEventListener('submit', (e) => {
//     e.preventDefault()



//     if (productName.value == '' || productPrice.value == '' || productSalePrice.value == '' || productImage.value == '') {
//         alert('All Fields are Required')
//     } else {


//         let productName = document.getElementById('productName');
//         let productPrice = document.getElementById('productPrice');
//         let productSalePrice = document.getElementById('productSalePrice');
//         let productImage = document.getElementById('productImage');




//         let productDataArray = [];
//         if (productDatas) {
//             productDataArray = productDatas;
//         } else {
//             productDataArray = []
//         }


//         productDataArray.push({
//             name: productName.value,
//             productPrice: productPrice.value,
//             productSalePrice: productSalePrice.value,
//             productPhoto: productImage.value
//         })

//         sendData('Product-Details', productDataArray)

//         allProducts()



//     }

// })


// allProducts()


// let clearData = document.getElementById('clearProducts');

// clearData.addEventListener('click', () => {

//     localStorage.clear()
//     productLists.innerHTML = '';

// })