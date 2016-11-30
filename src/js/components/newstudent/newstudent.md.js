((app) => {
  app.config(['$stateProvider', ($stateProvider)=>{
    $stateProvider.state('app.newstudent', {
      url:'/newstudent',
      template:'<newstudent/>'
    })
  }])
})(angular.module('app.newstudent', []))
