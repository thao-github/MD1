let product = [];
let indexP;

function displayProduct(){
    let boardProduct = document.getElementById("display")
    let data = "<table><tr><th><h4>Product</h4></th><th colspan='2' style='text-align:right'>" + product.length + "products" + "</th></tr>"
    for (let i = 0; i< product.length; i++) {
        data += "<tr>"
        data += "<td>" + product[i] +"</td>"
        data += "<td>" + "<button onclick='editProduct(" + i + ")'>Edit </button>" +"</td>"
        data += "<td>" + "<button onclick='deleteProduct(" + i + ")'>Delete </button>" +"</td>"
        data += "</tr>"
    }
    data += "</table>"
    boardProduct.innerHTML = data
}
function addProduct(){
    let newProduct = document.getElementById("add").value;
    if (newProduct === "") {
        alert ("Input Product Name")
    } else {
        product.push(newProduct)
        document.getElementById("add").value = ""
    }
    displayProduct()
}

function editProduct(){
    let newProduct = document.getElementById("edit").value;
    if (newProduct === "") {
        prompt ("Input Product Name")
    } else {
        product[indexP] = newProduct
        document.getElementById("edit").value = ""
    }
    displayProduct()
}

function deleteProduct(index){
    product.splice(index,1)
}
    displayProduct()