((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('callback', {
            url: '/amin/callback/:token',
            template: '',
            controller: ['usersService', '$stateParams', '$state', function(usersService, $stateParams, $state) {
                if ($stateParams.token) {
                    usersService.setToken($stateParams.token).then((user) => {
                        $state.go('app.projects')
                    })
                } else {
                    $state.go('app.projects')
                }
            }]
        })
    }])

  })(angular.module('app.config'))
