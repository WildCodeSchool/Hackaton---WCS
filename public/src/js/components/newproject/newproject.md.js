((app)=>{

  app.config(['$stateProvider', ($stateProvider)=>{
    $stateProvider.state('app.newarticle', {
      url:'/newarticle',
      template:'<newarticle/>'
    })
  }])
})(angular.module('app.newarticle', ['ui.router']))
