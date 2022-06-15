//Information Update Buttons 

function quantityUpdate() {
    let qNum = document.querySelector('.total-quantity')
    qNum.innerHTML = 'Quantity: '+quantity
}

function priceUpdate() {
    let price = document.querySelector('.total-price')
    price.innerHTML = 'Total Price available at checkout is: $ '+totalPrice
}

//Variables
let quantity = 1
let price = 15.00
let addOne = document.getElementById("quantity-up")
let subOne = document.getElementById("quantity-down")
let remove = document.querySelector(".remove")

//Quantity and Remove Buttons
addOne.addEventListener('click', function() {
    quantity = quantity + 1
    console.log(quantity)
    totalPrice = price * quantity
    priceUpdate()
   
    quantityUpdate()
})

subOne.addEventListener('click', function() {
    if(quantity > 0) {
        quantity = quantity - 1

    }
    else{
        quantity = quantity + 0
    }
    totalPrice = price * quantity
    priceUpdate()
    quantityUpdate()
})

remove.addEventListener('click', function(){
    quantity = 0
    totalPrice = price * quantity
    quantityUpdate()
    priceUpdate()
})