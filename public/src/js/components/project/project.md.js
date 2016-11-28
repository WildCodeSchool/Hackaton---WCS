((app)=>{
  'use strict'
  app.config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('app.article', {
      url:'/articles/{blogId}',
      template:'<article/>'

    })
  }])
})(angular.module('app.article', ['ui.router']))
