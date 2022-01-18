function AddToCart() {
    var title = document.getElementById("title").innerHTML;

    var price = document.getElementById("price").innerHTML;
    var size = document.getElementsByName('radio');



    for (i = 0; i < size.length; i++) {
        if (size[i].checked)



            document.getElementById("cart").innerHTML = title + `<br>` + size[i].value + `<br>` + price;

    }

}


function showCart() {
    var cart = document.getElementById("cart");
    if (cart.style.display === "none") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
}