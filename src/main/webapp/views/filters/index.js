/**
 * Created by shian_mac on 9/10/15.
 */
import angular from 'angular';
import firstNameFilter from './firstNameFilter';
import percentFilter from './percentFilter';

export default angular.
    module( 'customerFilters', [] )
    .filter('firstNameFilter', firstNameFilter)
    .filter('percentFilter', percentFilter);
