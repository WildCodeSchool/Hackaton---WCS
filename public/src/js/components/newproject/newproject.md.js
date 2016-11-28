((app)=>{

  app.config(['$stateProvider', ($stateProvider)=>{
    $stateProvider.state('app.newproject', {
      url:'/newproject',
      template:'<newproject/>'
    })
  }])
})(angular.module('app.newproject', ['ui.router']))
