((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: ['$state', function($state) {
            angular.extend(this, {
                $onInit() {
                  

                }

            })
        }]
    })
})(angular.module('app.login'))
