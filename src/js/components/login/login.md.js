((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('login', {
            url: '',
            abstract: true,
            template: '<navbar></navbar><ui-view />'
        })
        .state('login.connect', {
            url: '/login',
            template: '<login />'
        })
    }])

})(angular.module('app.login', ['ui.router']))
