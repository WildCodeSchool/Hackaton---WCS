((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: ['AdminsService', '$state', function(AdminsService, $state) {
            angular.extend(this, {
                $onInit() {

                },
                connect() {
                   AdminsService.connect(this.user).then((res) => {
                       $state.go('app.projects')
                   })
               }
            })
        }]
    })
})(angular.module('app.login'))
