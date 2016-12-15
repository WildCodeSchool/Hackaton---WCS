((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: [function() {
            angular.extend(this, {
                $onInit() {

                },
                login(user){
                  console.log(user);
                }

            })
        }]
    })
})(angular.module('app.login'))
