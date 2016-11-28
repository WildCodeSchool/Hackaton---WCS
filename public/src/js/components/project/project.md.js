((app)=>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('app.project', {
      url:'/projects/{projectId}',
      template:'<project/>'

    })
  }])
})(angular.module('app.project', ['ui.router']))
