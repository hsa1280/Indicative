/**
 * Created by shian_mac on 9/3/15.
 */
import angular from 'angular';
import 'angular-ui-router';
import productList from './productList';
import service from './service';
import filters from './filters';
import directive from './directive';

export default angular.
    module( 'sportsStore', [ 'ui.router', productList.name, service.name, filters.name, directive.name ] );
