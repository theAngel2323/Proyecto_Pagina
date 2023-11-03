class Product {
    constructor(name, price, year) {
      this.name = name;
      this.price = price;
      this.year = year;  
    }
} 

class UI {
    addProduct(product) {
        const ProductList = document.getElementById('product-list');
        const element = document.createElement('div');
         element.innerHTML = `
          <div class="card text-center mb-4"> 
            <div class="card-body">
             <strong>Product.name</strong>: ${product.name}
             <strong>Product.price</strong>: ${product.price}
             <strong>Product.year</strong>: ${product.year}
             <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
          </div>
          `;
       ProductList.appendChild(element);
       this.resetForm();
} 
resetForm() {
   document.getElementById('Product-form').reset();
}

deleteProduct(element) {
     if(element.name === 'delete') {
        element.parentElement.parentElement.parentElement.remove();
        this.showMessege('product Deleted Successfully', 'info');
    }
} 

showMessege(message, cssClass) {
  const div = document.createElement('div')
  div.className = `alert alert-${cssClas} mt-4`;
  div.appendChild(document.createTextNode(message));
// Showing in DOM
  const container = document.querySelector('.container');
  const app = document.querySelector('#App');
  container.insertBefore(div, app); 
  setTimeout(function () {
    document.querySelector('.alert').remove();
    },3000);
   }
}

//DOM Events
document.getElementById('Product-form')
  .addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year); 

    const ui = new UI();

    if(name === '' || price === '' || year === ''){
      return ui.showMessege('Complete Formulario', 'danger');
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessege('product Added sucessfully', 'succes')

    e.preventDefault();
}); 

document.getElementById('product-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteProduct(e.target);
}); 