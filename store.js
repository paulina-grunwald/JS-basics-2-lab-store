// TODO:
// var products = []// TODO:
// var products = []
var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },a
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = [];
// Declare `products`, the different that you will be selling under each of the departments.

var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();
  // Add the product with the matching referenceNumber to the shoppingCart
  var productLength = products.length;
  for(i=0; i < productLength; i++ ) {
    if (products[i].referenceNumber === refNr) {
      shoppingCart.push(products[i].referenceNumber)
    } 
  }
}

  displayProductsFromShoppingCart();

  // calculate the total price of your cart, and use it:
  displayTotalPrice(totalPrice) {
    var shoppingCartLength = shoppingCart.length;
    for (var i = 0; i < shoppingCartLength; i++) {
      totalPrice=+shoppingCart.price[i];
    }
    return totalPrice
  };

  // Ask the user if they want to continue shopping,
  var continueShopping= function() {
    var question = prompt("Do you want to continue shopping?");
    // if yes, call this function again
    if (continueShquestionopping.toLocaleLowerCase == "yes" || "y") {
      var continueShopping = prompt("Do you want to continue shopping?");

    } else if (continueShopquestionping.toLocaleLowerCase == "no" || "n") {
    "Goodbye!"
    } else {
      var question = prompt("Please answer yes or no. Do you want to continue shopping?");
    }
  }

};

var displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents
  shoppingCart.forEach(function(item) {
    return item
})
  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
  let questionRefNum = window.prompt("Which product would you like to buy? Input reference number.s")
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};

var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },a
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = [];
// Declare `products`, the different that you will be selling under each of the departments.

var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();
  // Add the product with the matching referenceNumber to the shoppingCart
  var productLength = products.length;
  for(i=0; i < productLength; i++ ) {
    if (products[i].referenceNumber === refNr) {
      shoppingCart.push(products[i].referenceNumber)
    } 
  }
  return shoppingCart
}

  displayProductsFromShoppingCart();

  // calculate the total price of your cart, and use it:
  displayTotalPrice(totalPrice) {
    var shoppingCartLength = shoppingCart.length;
    for (var i = 0; i < shoppingCartLength; i++) {
      totalPrice=+shoppingCart.price[i];
    }
    return totalPrice
  };

  // Ask the user if they want to continue shopping,
  var continueShopping= function() {
    var question = prompt("Do you want to continue shopping?");
    // if yes, call this function again
    if (continueShquestionopping.toLocaleLowerCase == "yes" || "y") {
      var continueShopping = prompt("Do you want to continue shopping?");

    } else if (continueShopquestionping.toLocaleLowerCase == "no" || "n") {
    "Goodbye!"
    } else {
      var question = prompt("Please answer yes or no. Do you want to continue shopping?");
    }
  }

};

var displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents

  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
