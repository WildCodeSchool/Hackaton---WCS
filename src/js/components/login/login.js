((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: ['AdminsService',function(AdminsService) {
            angular.extend(this, {
                $onInit() {

                },
                connect() {
                  debugger
                   AdminsService.connect(this.user).then((res) => {
                       $state.go('app.projects')
                   })
               },
               disconnect(){
                   AdminsService.disconnect().then((res) => {
                       $state.go('app.login')
                   })
               }
            })
        }]
    })
})(angular.module('app.login'))
