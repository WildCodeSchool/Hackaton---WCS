((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: [function() {
            angular.extend(this, {
                $onInit() {

                },
                connect() {
                   usersService.connect(this.user).then((res) => {
                       $state.go('app.projects')
                   })
               },
               disconnect(){
                   usersService.disconnect().then((res) => {
                       $state.go('app.login')
                   })
               }
            })
        }]
    })
})(angular.module('app.login'))
