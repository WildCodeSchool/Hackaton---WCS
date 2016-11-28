((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
         $stateProvider.state('app.projects', {
           url: '/',
           template: '<projects />'
        })
     }])
})(angular.module('app.projects', ['ui.router']))
