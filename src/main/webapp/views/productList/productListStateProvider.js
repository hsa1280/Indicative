/**
 * Created by shian_mac on 9/2/15.
 http://192.168.1.74:8080/src/main/webapp/views/index.html#/productList
 */

const annotation = ['$stateProvider'];

function productListStateProvider($stateProvider) {
    console.log('in stateProvider again');
    $stateProvider.
        state('productList', {
            url: '/productList',
            views: {
                'content@': {
                    templateUrl: 'productList/productList.html',
                    controller: 'ProductListController as productListController'
                }
            }
        });
}

productListStateProvider.$inject = annotation;
export default productListStateProvider;