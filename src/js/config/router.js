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
            url: '/admin/callback/:token',
            template: '',
            controller: ['AdminsService', '$stateParams', '$state', function(AdminsService, $stateParams, $state) {
                if ($stateParams.token) {
                    AdminsService.setToken($stateParams.token).then((user) => {
                        $state.go('app.projects')
                    })
                } else {
                    $state.go('app.projects')
                }
            }]
        })
    }])

  })(angular.module('app.config'))
