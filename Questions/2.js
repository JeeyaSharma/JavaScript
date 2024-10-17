/*
Question 2: 
Create a array with a name cart with products (name,price, qty).
Calculate the price of the all the product that we have added in the cart.

var cart = [{ id: 1, name: 'iphone 16', price: 164000, qty : 1},
		{ id: 2, name: 'iphone 15', price: 84000, qty : 2},

}]
*/

// Ans:

var cart = [
    { id: 1, name: 'iphone 16', price: 164000, qty : 1},
    { id: 2, name: 'iphone 15', price: 84000, qty : 2}
]

let totalPrice=cart.reduce(function(sum,item){
    return sum+item.price*item.qty;
},0);

console.log(totalPrice);