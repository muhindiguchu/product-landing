window.onload = () => {
    let product = "Yeezy 450 'cloud Black'";
    let price = 1500;

    // Set product and price
    document.getElementById("product").innerHTML = product;
    document.getElementById("price").innerHTML = price;

    // Create quantity input
    document.getElementById("quantity").innerHTML = '<input type="number" id="quantityInput" value="0" min="0" max="10" onchange="calculateTotal()"/>';

    // Initialize Total
    let Total = 0;

    // Function to calculate total
    window.calculateTotal = function () {
        let quantity = parseInt(document.getElementById("quantityInput").value) || 0;
        Total = price * quantity;
        document.getElementById("Total").innerHTML = "Total: " + Total;
    };

    // Set initial total
    calculateTotal();
//Set size
document.getElementById("size").innerHTML = '<select id="sizeSelect" onchange="calculateTotal()"><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>';

let product2 = "Converse Chuck Taylor";
    let price2 = 2000;

    // Set product and price
    document.getElementById("product2").innerHTML = product2;
    document.getElementById("price2").innerHTML = price2;

    // Create quantity input
    document.getElementById("quantity2").innerHTML = '<input type="number" id="quantityInput2" value="0" min="0" max="10" onchange="calculateTotal2()"/>';

    // Initialize Total
    let Total2 = 0;

    // Function to calculate total
    window.calculateTotal2 = function () {
        let quantity2 =parseInt(document.getElementById("quantityInput2").value) || 0;
        Total2 = price2 * quantity2;
        document.getElementById("Total2").innerHTML = "Total: " + Total2;
    };

    // Set initial total
    calculateTotal2();
//Set size
document.getElementById("size2").innerHTML = '<select id="sizeSelect" onchange="calculateTotal()"><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>';

let product3 = "Vans Formula 66 ComfyCush";
    let price3 = 1500;

    // Set product and price
    document.getElementById("product3").innerHTML = product3;
    document.getElementById("price3").innerHTML = price3;

    // Create quantity input
    document.getElementById("quantity3").innerHTML = '<input type="number" id="quantityInput3" value="0" min="0" max="10" onchange="calculateTotal3()"/>';

    // Initialize Total
    let Total3 = 0;

    // Function to calculate total
    window.calculateTotal3 = function () {
        let quantity3 = parseInt(document.getElementById("quantityInput3").value) || 0;
        Total3 = price3 * quantity3;
        document.getElementById("Total3").innerHTML = "Total: " + Total3;
    };

    // Set initial total
    calculateTotal3();
    document.getElementById("size3").innerHTML = '<select id="sizeSelect" onchange="calculateTotal()"><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>';


let product4 = "Adidas Samba";
    let price4 = 1500;

    // Set product and price
    document.getElementById("product4").innerHTML = product4;
    document.getElementById("price4").innerHTML = price4;

    // Create quantity input
    document.getElementById("quantity4").innerHTML = '<input type="number" id="quantityInput4" value="0" min="0" max="10" onchange="calculateTotal4()"/>';

    // Initialize Total
    let Total4 = 0;

    // Function to calculate total
    window.calculateTotal4 = function () {
        let quantity4 = parseInt(document.getElementById("quantityInput4").value) || 0;
        Total4 = price4 * quantity4;
        document.getElementById("Total4").innerHTML = "Total: " + Total4;
    };

    // Set initial total
    calculateTotal4();
    document.getElementById("size4").innerHTML = '<select id="sizeSelect" onchange="calculateTotal()"><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>';

 
let product5 = "Puma Vikky Platform";
    let price5 = 1500;

    // Set product and price
    document.getElementById("product5").innerHTML = product5;
    document.getElementById("price5").innerHTML = price5;

    // Create quantity input
    document.getElementById("quantity5").innerHTML = '<input type="number" id="quantityInput5" value="0" min="0" max="10" onchange="calculateTotal5()"/>';

    // Initialize Total
    let Total5 = 0;

    // Function to calculate total
    window.calculateTotal5 = function () {
        let quantity5 = parseInt(document.getElementById("quantityInput5").value) || 0;
        Total5 = price5 * quantity5;
        document.getElementById("Total5").innerHTML = "Total: " + Total5;
    };

    // Set initial total
    calculateTotal5();
    document.getElementById("size5").innerHTML = '<select id="sizeSelect" onchange="calculateTotal()"><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>';

let product6 = "Converse Chuck Taylor All Star 70";
    let price6 = 2300;

    // Set product and price
    document.getElementById("product6").innerHTML = product6;
    document.getElementById("price6").innerHTML = price6;

    // Create quantity input
    document.getElementById("quantity6").innerHTML = '<input type="number" id="quantityInput6" value="0" min="0" max="10" onchange="calculateTotal6()"/>';

    // Initialize Total
    let Total6 = 0;

    // Function to calculate total
    window.calculateTotal6 = function () {
        let quantity6 = parseInt(document.getElementById("quantityInput6").value) || 0;
        Total6 = price6 * quantity6;
        document.getElementById("Total6").innerHTML = "Total: " + Total6;
    };

    // Set initial total
    calculateTotal6();
    document.getElementById("size6").innerHTML = '<select id="sizeSelect" onchange="calculateTotal()"><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>';

let product7 = "Yeezy 450 'cloud Grey'";
    let price7 = 1500;

    // Set product and price
    document.getElementById("product7").innerHTML = product7;
    document.getElementById("price7").innerHTML = price7;

    // Create quantity input
    document.getElementById("quantity7").innerHTML = '<input type="number" id="quantityInput7" value="0" min="0" max="10" onchange="calculateTotal7()"/>';

    // Initialize Total
    let Total7 = 0;

    // Function to calculate total
    window.calculateTotal7 = function () {
        let quantity7 =parseInt(document.getElementById("quantityInput7").value) || 0;
        Total7 = price7 * quantity7;
        document.getElementById("Total7").innerHTML = "Total: " + Total7;
    };

    // Set initial total
    calculateTotal7();
    document.getElementById("size7").innerHTML = '<select id="sizeSelect" onchange="calculateTotal()"><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>';


let product8 = "Air Jordan 1 High Dior";
    let price8 = 2000;

    // Set product and price
    document.getElementById("product8").innerHTML = product8;
    document.getElementById("price8").innerHTML = price8;

    // Create quantity input
    document.getElementById("quantity8").innerHTML = '<input type="number" id="quantityInput8" value="0" min="0" max="10" onchange="calculateTotal8()"/>';

    // Initialize Total
    let Total8 = 0;

    // Function to calculate total
    window.calculateTotal8 = function () {
        let quantity8 =parseInt(document.getElementById("quantityInput8").value) || 0;
        Total8 = price8 * quantity8;
        document.getElementById("Total8").innerHTML = "Total: " + Total8;
    };

    // Set initial total
    calculateTotal8();
    document.getElementById("size8").innerHTML = '<select id="sizeSelect" onchange="calculateTotal()"><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>';

};// Declare shipping and Total variables in the global scope
let shipping = 0;
let Total = 0, Total2 = 0, Total3 = 0, Total4 = 0, Total5 = 0, Total6 = 0, Total7 = 0, Total8 = 0;

function checkLocation() {
    let location = document.querySelector("select").value;
    if (location == "CBD") {
        shipping = 0;
    } else if (location == "Nairobi") {
        shipping = 100;
    } else if (location == "Ruiru") {
        shipping = 150;
    } else if (location == "Kisumu") {
        shipping = 500;
    } else if (location == "Mombasa") {
        shipping = 500;
    }
    document.getElementById("shipping").innerHTML = "Shipping: " + shipping + " Ksh";
}

document.getElementById("tot").onclick = function payment() {
    console.log("Total: " + Total);
    console.log("Total2: " + Total2);
    let grandTotal = Total + Total2 + Total3 + Total4 + Total5 + Total6 + Total7 + Total8 + shipping;
    document.getElementById("grandTotal").innerHTML = "Grand Total: " + grandTotal + " Ksh";
};