const annotation = ['cart'];

class ProductListController {

    constructor(cart) {
        this.pageSize = 3;
  		this.data = [];
  		this.cart = cart;
      this.firstNameInput = '';
  		this.getProducts();
    }

    getProducts() {
    	this.cart.getProductList().then( response => {
    		this.data = response;
    		console.log('response ', response);
    	});
    }

    addProduct() {
      this.cart.addProduct().then( product =>{
        this.data.push(product[0]);
      })
    }
}

ProductListController.$inject = annotation;

export default ProductListController;
