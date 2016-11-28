((app)=>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('app.project', {
      url:'/projects/{blogId}',
      template:'<project/>'

    })
  }])
})(angular.module('app.project', ['ui.router']))
