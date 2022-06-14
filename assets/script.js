//Quantity Button

function quantityUpdate() {
    let qNum = document.querySelector('.total-quantity')
    qNum.innerHTML = 'Quantity: '+quantity
}

let quantity = 1
let addOne = document.getElementById("quantity-up")
let subOne = document.getElementById("quantity-down")
let remove = document.querySelector(".remove")

addOne.addEventListener('click', function() {
    quantity = quantity + 1
    console.log(quantity)
    quantityUpdate()
})

subOne.addEventListener('click', function() {
    if(quantity > 0) {
        quantity = quantity - 1

    }
    else{
        quantity = quantity + 0
    }
    quantityUpdate()
})

remove.addEventListener('click', function(){
    quantity = 0
    quantityUpdate()
})





