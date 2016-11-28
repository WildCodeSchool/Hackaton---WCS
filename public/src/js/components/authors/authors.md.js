((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.authors', {
            url: '/authors/{authorId}',
            template: '<authors />'
        })
    }])
})(angular.module('app.authors', ['ui.router']))
