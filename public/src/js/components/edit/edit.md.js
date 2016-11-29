((app)=>{

  app.config(['$stateProvider', ($stateProvider)=>{
    $stateProvider.state('app.edit', {
      url:'/edit',
      template:'<edit/>'

    })
  }])
})(angular.module('app.edit', ['ui.router']))
