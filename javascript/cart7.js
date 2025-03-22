window.onload = () => {
    let product = "Yeezy 450 'cloud Grey'";
    let price = 1500;
    document.getElementById("product").innerHTML = "product :"+ " " + product  ;
    document.getElementById("price").innerHTML = "price :"+ " " + price  ;
    document.getElementById("quantity").innerHTML = "quantity :"+ " WIP"   ;
    document.getElementById("size").innerHTML = "Size :"+ " WIP"   ;
    document.getElementById("Total").innerHTML = "Total :"+ " WIP"  ;

}
function checkLocation(){
    let location = document.querySelector("select").value;
    if(location == "CBD"){
        let shipping = 0;
        document.getElementById("shipping").innerHTML = "Shipping :"+ " " + shipping  ;
}else if(location == "Nairobi"){
    let shipping = 100;
    document.getElementById("shipping").innerHTML = "Shipping :"+ " " + shipping  ;

}else if(location == "Ruiru"){
    let shipping = 150;
    document.getElementById("shipping").innerHTML = "Shipping :"+ " " + shipping  ;

}else if(location == "Kisumu"){
    let shipping = 500;
    document.getElementById("shipping").innerHTML = "Shipping :"+ " " + shipping  ;

}else if(location == "Mombasa"){
    let shipping = 500;
    document.getElementById("shipping").innerHTML = "Shipping :"+ " " + shipping  ;

}
}