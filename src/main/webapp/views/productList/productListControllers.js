const annotation = ['cart'];

class ProductListController {

    constructor(cart) {
        this.pageSize = 3;
  		this.data = [];
  		this.cart = cart;
      this.watch = 0;
      this.firstNameInput = '';
  		this.getProducts();
    }

    getProducts() {
    	this.cart.getProductList().then( response => {
    		this.data = response;
    	});
    }

    addProduct() {
      this.cart.addProduct().then( product =>{
        this.watch++;
        this.data.push(product[0]);
      })
    }
}

ProductListController.$inject = annotation;

export default ProductListController;
