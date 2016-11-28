((app) => {
    'use strict'
    app.component('navbar', {
        templateUrl: "/src/js/components/navbar/navbar.html",
        controller: [function() {
            angular.extend(this, {
                $onInit() {

                }
            })
        }]
    })

})(angular.module('app.navbar'))
