// Shopping Cart
let cart = [];

function addCart(product) {
    cart.push(product);

    alert(product + " has been added to your cart!");

    updateCart();
}

function updateCart() {

    console.log(cart);

}

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector("input").value;

    alert("Thank you " + name + "! Your order request has been submitted successfully.");

    form.reset();

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
