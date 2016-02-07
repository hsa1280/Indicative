/**
 * Created by shian_mac on 9/12/15.
 */
import angular from 'angular';
import stats from './stats';
import lineChart from './lineChart';

export default angular.
    module('directive', [stats.name, lineChart.name])
