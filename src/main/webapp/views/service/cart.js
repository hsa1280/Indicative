const annotation = ['$http'];

function cart( $http ) {

	var cartData = [];

	return {

		addProduct: function() {
			return $http.get('https://mockaroo.com/e7995d70/download?count=1&key=015777f0').then(response => response.data);
		},

		getProducts: function() {
			return cartData;
		},

		getProductList: function() {
			return $http.get('https://mockaroo.com/e7995d70/download?count=10&key=015777f0').then(response => response.data);
		}
	}
}

cart.$inject = annotation;

export default cart;
