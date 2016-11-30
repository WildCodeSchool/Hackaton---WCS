((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.student', {
            url: '/student/{studentId}',
            template: '<student />'
        })
    }])
})(angular.module('app.student', ['ui.router']))
